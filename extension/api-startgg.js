'use strict';

// Ours
const nodecg = require('./util/nodecg-api-context').get();

//Libs
const got = require("got");

//Replicants
const tournament = nodecg.Replicant('tournament');
const players = nodecg.Replicant('players');
const startgg = nodecg.Replicant('startgg');

//Statics
const apiKey = nodecg.bundleConfig.api && nodecg.bundleConfig.api.startgg ? nodecg.bundleConfig.api.startgg.key : null;
const apiBaseURL = "https://api.start.gg/gql/alpha";
const updateInterval = 30 * 1000;

//Dynamics
var apiTimeout;

//Templates
const tournamentQueryTemplateGQL = {
	operationName: "TournamentQuery",
	query: `
query TournamentQuery($slug: String) {
		tournament(slug: $slug){
			id
			name
			streamQueue {
      			stream {
        			streamName
      			}
      			sets {
        			id
                    state
                    round
                    startedAt
                    completedAt
                    winnerId                 
      		    }
    	    }
		}
}`,
	variables: { slug: "" }
};

const setQueryTemplateGQL = {
	operationName: "SetQuery",
	query: `
query SetQuery($setId: ID!) {
		set(id: $setId){
			slots {
				entrant {
              		id
        			name
                    initialSeedNum
                    team {
						id
                        name
                        discriminator                                
                    }
              		participants {
          				id
                        gamerTag
                        prefix 
                        user {
							id
                            name 
                            slug
                            discriminator
                            genderPronoun
                            authorizations {                         
								id
                                externalId
                                externalUsername
                                type
                                url
                            }
                        }
        			}
      			}
      			standing {
        			placement
        			stats {
          				score {
            				value
          				}
        			}
      			}
    		}
		}
}`,
	variables: { setId: 0 }
};

//Exit if no key set
if (!apiKey)
	return;

//Functions
function refreshTimeout() {

	if (!startgg.value.syncEnabled)
		return;

	apiTimeout = setTimeout(() => {
		doUpdate();
	}, updateInterval);
}

function cancelTimeout() {

	if (apiTimeout) {
		clearTimeout(apiTimeout);
		apiTimeout = null;
	}
}

async function pullTournamentData(tournamentSlug) {

	let newBody = JSON.parse(JSON.stringify(tournamentQueryTemplateGQL));
	newBody.variables.slug = tournamentSlug;

	return await got.post(apiBaseURL, {
		headers: {
			Authorization: "Bearer " + apiKey
		},
		json: newBody
	}).json();
}

async function pullMatchData(setID) {

	let newBody = JSON.parse(JSON.stringify(setQueryTemplateGQL));
	newBody.variables.setId = setID;

	return await got.post(apiBaseURL, {
		headers: {
			Authorization: "Bearer " + apiKey
		},
		json: newBody
	}).json();
}

async function doUpdate() {

	cancelTimeout();

	if (startgg.value.tournamentSlug && startgg.value.tournamentSlug.length > 0) {

		try {

			let tournyData = await pullTournamentData(startgg.value.tournamentSlug);

			//Confirm tournament exists
			if (!tournyData.data.tournament) {
				startgg.value.availableQueues = [];
				startgg.value.selectedQueue = -1;

				throw new Error("invalid_tournament_slug");
			}

			//Update generic tournament rep data here
			tournament.value.name = tournyData.data.tournament.name;

			//If stream queue is set, but no longer available, clear it
			let activeQueueStreamName = null;

			if (startgg.value.selectedQueue >= 0) {

				let activeQueue = startgg.value.availableQueues.length > startgg.value.selectedQueue ?
					startgg.value.availableQueues[startgg.value.selectedQueue]
					: null;

				let matchingQueue = null;

				if (activeQueue) {

					if (tournyData.data.tournament.streamQueue) {
						matchingQueue = tournyData.data.tournament.streamQueue.find(elem => {
							return activeQueue.streamName === elem.stream.streamName;
						});
					}
				}

				if (!matchingQueue) {
					//Clear selected queue
					startgg.value.selectedQueue = -1;
				} else {
					activeQueueStreamName = activeQueue.streamName;
				}
			}

			//Update stream queues if available
			let newQueues = [];

			if (tournyData.data.tournament.streamQueue) {

				for (let queue of tournyData.data.tournament.streamQueue) {

					//Find first active set of each queue
					let activeSet = {};

					for (let set of queue.sets) {

						if (set.state == 2) {

							activeSet = {
								id: set.id,
								round: set.round,
								startedAt: set.startedAt
							};

							break;
						}
					}

					newQueues.push({
						streamName: queue.stream.streamName,
						activeSet: activeSet
					});
				}
			}

			startgg.value.availableQueues = newQueues;

			//Identify selected stream queue by name and if necessary adjust the index (covers cases where the stream queue moves between API responses, needed to keep sync)
			if (activeQueueStreamName && startgg.value.availableQueues.length > 0) {
				let selectedStreamQueueIndex = startgg.value.availableQueues.findIndex(elem => {
					return activeQueueStreamName === elem.streamName;
				});

				if (startgg.value.selectedQueue != selectedStreamQueueIndex) {
					startgg.value.selectedQueue = selectedStreamQueueIndex;
				}
			}

			//If a valid stream queue has been selected, check if it has an activeSet, if so pull it, else skip
			if (startgg.value.selectedQueue >= 0 && startgg.value.availableQueues.length > startgg.value.selectedQueue) {
				let activeQueue = startgg.value.availableQueues[startgg.value.selectedQueue];

				if (activeQueue && activeQueue.activeSet && activeQueue.activeSet.id) {

					let matchData = await pullMatchData(activeQueue.activeSet.id);

					//Apply data to current match replicant
					tournament.value.round = activeQueue.activeSet.round.toString();

					let playerIndex = 0;

					for (let slot of matchData.data.set.slots) {

						if (players.value.length <= playerIndex)
							break;

						for (let participant of slot.entrant.participants) {

							if (players.value.length <= playerIndex)
								break;

							if (participant.gamerTag)
								players.value[playerIndex].name = participant.gamerTag;
							else if (slot.entrant.name)
								players.value[playerIndex].name = slot.entrant.name;

							if (participant.user && participant.user.genderPronoun)
								players.value[playerIndex].pronouns = participant.user.genderPronoun;

							if (participant.prefix)
								players.value[playerIndex].sponsor = participant.prefix;

							playerIndex++;
						}
					}
				}
			}
		}
		catch (ex) {
			console.error("[api-startgg] Error during API update:", ex);
		}
	} else {
		startgg.value.availableQueues = [];
		startgg.value.selectedQueue = -1;
	}

	refreshTimeout();
}

//Rep Listeners
startgg.on('change', (newVal, oldVal) => {

	if (!newVal)
		return;

	if (!newVal.syncEnabled) {
		cancelTimeout();
		return;
	}

	let forceUpdate = false;

	//If tournament slug changes, clear selected queue and force update
	if (oldVal && oldVal.tournamentSlug != newVal.tournamentSlug) {
		startgg.value.selectedQueue = -1;
		forceUpdate = true;
	}

	//If selected stream queue changes, force update
	if (oldVal && oldVal.selectedQueue != newVal.selectedQueue) {
		forceUpdate = true;
	}

	if (forceUpdate || !oldVal || !oldVal.syncEnabled) {
		doUpdate();
	}
});

//Message Listeners
nodecg.listenFor('api_startgg_refresh', () => {
	doUpdate(); //Force update
});
