'use strict';

// Ours
const nodecgApiContext = require('./util/nodecg-api-context');

module.exports = function(nodecg) {
    // Store a reference to this nodecg API context in a place where other libs can easily access it.
    // This must be done before any other files are `require`d.
    nodecgApiContext.set(nodecg);

    // Be careful when re-ordering these.
    // Some of them depend on Replicants initialized in others.
	require('./players');
	require('./tournament');
	require('./slippi');
	require('./templates');
	require('./obs');
};
