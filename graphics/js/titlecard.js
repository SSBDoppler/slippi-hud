'use strict';

$(function () {
		var TitleCardOn = true;
		nodecg.listenFor('SlippiReady', slippiready);
		nodecg.listenFor('SlippiStart', slippistart);
		
		function slippiready(data) {
			$('#p1score').text(data.p1Score);
			$('#p2score').text(data.p2Score);
			$('#p1name').text(data.p1Tag);
			$('p2name').text(data.p2Tag);
			$('#p1character').attr('class', 'character character-' + data.p1Char + '-' + data.p1Cos);
			$('#p2character').attr('class', 'character character-' + data.p2Char + '-' + data.p2Cos);
			$('#stage').attr('class', 'stage stage-' + data.Stage);
			if(TitleCardOn == false){
				$('#stage').animate({up: "1080px"}, {duration: 1000});
				setTimeout (function () {
					$('#playerright').animate({left: "960px"}, {duration:1000});
					$('#playerleft').animate({right: "960px"}, {duration:1000});
				}, 1000);
				var TitleCardOn = true;
			};
		}
		
		function slippistart(data) {
			if(TitleCardOn == true){
				$('#stage').animate({up: "-1080px"}, {duration: 500});
				setTimeout (function () {
					$('#playerleft').animate({left: "960px"}, {duration:500});
					$('#playerright').animate({right: "960px"}, {duration:500});
				}, 500);
			var TitleCardOn = false;
			};
		}
})