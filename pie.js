	function doPie(){
		if(Math.random()*100 <= player.pieChnc){
			addMoney_6((buildings[8].amount/2));
			$('#buy9').css('background-image','url(art/build9.1.png)');
		}
		if(player.pieGainEnable){
			var pieWorth = 1+(Math.random()*628)/100;
			addMoney_1(pieWorth*buildings[8].currGain);
			$('#pieRanGive').text(Math.round((pieWorth-1)*100).formatMoney());
		}
	}
