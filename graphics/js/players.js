'use strict';

$(function () {
		nodecg.listenFor('SlippiReady', ready);
		nodecg.listenFor('SlippiGame', game);
		nodecg.listenFor('SlippiUpdate', update);
		
		function update(data) {
			$('#p1dmg').text(data.p1Dmg);
			$('#p2dmg').text(data.p2Dmg);
			$('#p3Dmg').text(data.p3Dmg);
			$('#p4Dmg').text(data.p4Dmg);
			$('#p1CSP').attr('class', 'CSP CSP-' + data.p1Char + '-' + data.p1Cos);
			$('#p2CSP').attr('class', 'CSP CSP-' + data.p2Char + '-' + data.p2Cos);
			$('#p3CSP').attr('class', 'CSP CSP-' + data.p3Char + '-' + data.p3Cos);
			$('#p4CSP').attr('class', 'CSP CSP-' + data.p4Char + '-' + data.p4Cos);
			if(data.p1stock == 4) {
				$('#p1stock-1').attr('class', 'stock stock-' + data.p1Char + '-' + data.p1Cos);
				$('#p1stock-2').attr('class', 'stock stock-' + data.p1Char + '-' + data.p1Cos);
				$('#p1stock-3').attr('class', 'stock stock-' + data.p1Char + '-' + data.p1Cos);
				$('#p1stock-4').attr('class', 'stock stock-' + data.p1Char + '-' + data.p1Cos);
			}
			if(data.p1stock == 3) {
				$('#p1stock-1').attr('class', 'stock stock-' + data.p1Char + '-' + data.p1Cos);
				$('#p1stock-2').attr('class', 'stock stock-' + data.p1Char + '-' + data.p1Cos);
				$('#p1stock-3').attr('class', 'stock stock-' + data.p1Char + '-' + data.p1Cos);
				$('#p1stock-4').attr('class', 'stock stock-none');
			}
			if(data.p1stock == 2) {
				$('#p1stock-1').attr('class', 'stock stock-' + data.p1Char + '-' + data.p1Cos);
				$('#p1stock-2').attr('class', 'stock stock-' + data.p1Char + '-' + data.p1Cos);
				$('#p1stock-3').attr('class', 'stock stock-none');
				$('#p1stock-4').attr('class', 'stock stock-none');
			}
			if(data.p1stock == 1) {
				$('#p1stock-1').attr('class', 'stock stock-' + data.p1Char + '-' + data.p1Cos);
				$('#p1stock-2').attr('class', 'stock stock-none');
				$('#p1stock-3').attr('class', 'stock stock-none');
				$('#p1stock-4').attr('class', 'stock stock-none');
			}
			if(data.p1stock == 0 or data.p1stock == null ) {
				$('#p1stock-1').attr('class', 'stock stock-none');
				$('#p1stock-2').attr('class', 'stock stock-none');
				$('#p1stock-3').attr('class', 'stock stock-none');
				$('#p1stock-4').attr('class', 'stock stock-none');
			}
			if(data.p2stock == 4) {
				$('#p2stock-1').attr('class', 'stock stock-' + data.p2Char + '-' + data.p2Cos);
				$('#p2stock-2').attr('class', 'stock stock-' + data.p2Char + '-' + data.p2Cos);
				$('#p2stock-3').attr('class', 'stock stock-' + data.p2Char + '-' + data.p2Cos);
				$('#p2stock-4').attr('class', 'stock stock-' + data.p2Char + '-' + data.p2Cos);
			}
			if(data.p2stock == 3) {
				$('#p2stock-1').attr('class', 'stock stock-' + data.p2Char + '-' + data.p2Cos);
				$('#p2stock-2').attr('class', 'stock stock-' + data.p2Char + '-' + data.p2Cos);
				$('#p2stock-3').attr('class', 'stock stock-' + data.p2Char + '-' + data.p2Cos);
				$('#p2stock-4').attr('class', 'stock stock-none');
			}
			if(data.p2stock == 2) {
				$('#p2stock-1').attr('class', 'stock stock-' + data.p2Char + '-' + data.p2Cos);
				$('#p2stock-2').attr('class', 'stock stock-' + data.p2Char + '-' + data.p2Cos);
				$('#p2stock-3').attr('class', 'stock stock-none');
				$('#p2stock-4').attr('class', 'stock stock-none');
			}
			if(data.p2stock == 1) {
				$('#p2stock-1').attr('class', 'stock stock-' + data.p2Char + '-' + data.p2Cos);
				$('#p2stock-2').attr('class', 'stock stock-none');
				$('#p2stock-3').attr('class', 'stock stock-none');
				$('#p2stock-4').attr('class', 'stock stock-none');
			}
			if(data.p2stock == 0 or data.p2stock == null ) {
				$('#p2stock-1').attr('class', 'stock stock-none');
				$('#p2stock-2').attr('class', 'stock stock-none');
				$('#p2stock-3').attr('class', 'stock stock-none');
				$('#p2stock-4').attr('class', 'stock stock-none');
			}
			if(data.p3stock == 4) {
				$('#p3stock-1').attr('class', 'stock stock-' + data.p3Char + '-' + data.p3Cos);
				$('#p3stock-2').attr('class', 'stock stock-' + data.p3Char + '-' + data.p3Cos);
				$('#p3stock-3').attr('class', 'stock stock-' + data.p3Char + '-' + data.p3Cos);
				$('#p3stock-4').attr('class', 'stock stock-' + data.p3Char + '-' + data.p3Cos);
			}
			if(data.p3stock == 3) {
				$('#p3stock-1').attr('class', 'stock stock-' + data.p3Char + '-' + data.p3Cos);
				$('#p3stock-2').attr('class', 'stock stock-' + data.p3Char + '-' + data.p3Cos);
				$('#p3stock-3').attr('class', 'stock stock-' + data.p3Char + '-' + data.p3Cos);
				$('#p3stock-4').attr('class', 'stock stock-none');
			}
			if(data.p3stock == 2) {
				$('#p3stock-1').attr('class', 'stock stock-' + data.p3Char + '-' + data.p3Cos);
				$('#p3stock-2').attr('class', 'stock stock-' + data.p3Char + '-' + data.p3Cos);
				$('#p3stock-3').attr('class', 'stock stock-none');
				$('#p3stock-4').attr('class', 'stock stock-none');
			}
			if(data.p3stock == 1) {
				$('#p3stock-1').attr('class', 'stock stock-' + data.p3Char + '-' + data.p3Cos);
				$('#p3stock-2').attr('class', 'stock stock-none');
				$('#p3stock-3').attr('class', 'stock stock-none');
				$('#p3stock-4').attr('class', 'stock stock-none');
			}
			if(data.p3stock == 0 or data.p3stock == null ) {
				$('#p3stock-1').attr('class', 'stock stock-none');
				$('#p3stock-2').attr('class', 'stock stock-none');
				$('#p3stock-3').attr('class', 'stock stock-none');
				$('#p3stock-4').attr('class', 'stock stock-none');
			}
			if(data.p4stock == 4) {
				$('#p4stock-1').attr('class', 'stock stock-' + data.p4Char + '-' + data.p4Cos);
				$('#p4stock-2').attr('class', 'stock stock-' + data.p4Char + '-' + data.p4Cos);
				$('#p4stock-3').attr('class', 'stock stock-' + data.p4Char + '-' + data.p4Cos);
				$('#p4stock-4').attr('class', 'stock stock-' + data.p4Char + '-' + data.p4Cos);
			}
			if(data.p4stock == 3) {
				$('#p4stock-1').attr('class', 'stock stock-' + data.p4Char + '-' + data.p4Cos);
				$('#p4stock-2').attr('class', 'stock stock-' + data.p4Char + '-' + data.p4Cos);
				$('#p4stock-3').attr('class', 'stock stock-' + data.p4Char + '-' + data.p4Cos);
				$('#p4stock-4').attr('class', 'stock stock-none');
			}
			if(data.p4stock == 2) {
				$('#p4stock-1').attr('class', 'stock stock-' + data.p4Char + '-' + data.p4Cos);
				$('#p4stock-2').attr('class', 'stock stock-' + data.p4Char + '-' + data.p4Cos);
				$('#p4stock-3').attr('class', 'stock stock-none');
				$('#p4stock-4').attr('class', 'stock stock-none');
			}
			if(data.p4stock == 1) {
				$('#p4stock-1').attr('class', 'stock stock-' + data.p4Char + '-' + data.p4Cos);
				$('#p4stock-2').attr('class', 'stock stock-none');
				$('#p4stock-3').attr('class', 'stock stock-none');
				$('#p4stock-4').attr('class', 'stock stock-none');
			}
			if(data.p4stock == 0 or data.p4stock == null ) {
				$('#p4stock-1').attr('class', 'stock stock-none');
				$('#p4stock-2').attr('class', 'stock stock-none');
				$('#p4stock-3').attr('class', 'stock stock-none');
				$('#p4stock-4').attr('class', 'stock stock-none');
			}
			
		}
		
		function ready(data) {
			$('#p1tag').text(data.p1Tag);
			$('#p2tag').text(data.p2Tag);
			$('#p3tag').text(data.p3Tag);
			$('#p4tag').text(data.p4Tag);
			$('#p1port').attr('class', 'port port-' + data.p1Port);
			$('#p2port').attr('class', 'port port-' + data.p2Port);
			$('#p3port').attr('class', 'port port-' + data.p3Port);
			$('#p4port').attr('class', 'port port-' + data.p4Port);
			$('#p1score').text(data.p1Score);
			$('#p2score').text(data.p2Score);
			$('#p3score').text(data.p3Score);
			$('#p4score').text(data.p4Score);
			$('#p1CSP').attr('class', 'CSP CSP-' + data.p1Char + '-' + data.p1Cos);
			$('#p2CSP').attr('class', 'CSP CSP-' + data.p2Char + '-' + data.p2Cos);
			$('#p3CSP').attr('class', 'CSP CSP-' + data.p3Char + '-' + data.p3Cos);
			$('#p4CSP').attr('class', 'CSP CSP-' + data.p4Char + '-' + data.p4Cos);
			$('#p1stock-1').attr('class', 'stock stock-' + data.p1Char + '-' + data.p1Cos);
			$('#p1stock-2').attr('class', 'stock stock-' + data.p1Char + '-' + data.p1Cos);
			$('#p1stock-3').attr('class', 'stock stock-' + data.p1Char + '-' + data.p1Cos);
			$('#p1stock-4').attr('class', 'stock stock-' + data.p1Char + '-' + data.p1Cos);
			$('#p2stock-1').attr('class', 'stock stock-' + data.p2Char + '-' + data.p2Cos);
			$('#p2stock-2').attr('class', 'stock stock-' + data.p2Char + '-' + data.p2Cos);
			$('#p2stock-3').attr('class', 'stock stock-' + data.p2Char + '-' + data.p2Cos);
			$('#p2stock-4').attr('class', 'stock stock-' + data.p2Char + '-' + data.p2Cos);
			$('#p3stock-1').attr('class', 'stock stock-' + data.p3Char + '-' + data.p3Cos);
			$('#p3stock-2').attr('class', 'stock stock-' + data.p3Char + '-' + data.p3Cos);
			$('#p3stock-3').attr('class', 'stock stock-' + data.p3Char + '-' + data.p3Cos);
			$('#p3stock-4').attr('class', 'stock stock-' + data.p3Char + '-' + data.p3Cos);
			$('#p4stock-1').attr('class', 'stock stock-' + data.p4Char + '-' + data.p4Cos);
			$('#p4stock-2').attr('class', 'stock stock-' + data.p4Char + '-' + data.p4Cos);
			$('#p4stock-3').attr('class', 'stock stock-' + data.p4Char + '-' + data.p4Cos);
			$('#p4stock-4').attr('class', 'stock stock-' + data.p4Char + '-' + data.p4Cos);
			$('#panel1').text(data.panel1text);
			$('#panel2').text(data.panel1text);
			$('#panel3').text(data.panel1text);
			$('#panel4').text(data.panel1text);
		}
		
		function game(data) {
			$('#p1score').text(data.p1Score);
			$('#p2score').text(data.p2Score);
			$('#p3score').text(data.p3Score);
			$('#p4score').text(data.p4Score);
		}