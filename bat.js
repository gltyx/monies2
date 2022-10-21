	function batSplode(){
		var counter = 0;
		var doSplode;
		var zeroGain = false;
		var counterPic = 1;
		doSplode = false;
		
		if((Math.round(Math.random()*10000)/100) <= player.batSplodeChnc){
			doSplode = true;
		}
		if(doSplode){
			if(Math.round(Math.random()*100) < player.batFailChnc){
				zeroGain = true;
			}
		}

		if(coldBatEnable && coldBatDuration > 0){
			coldBatDuration -= 1;
			if(coldBatDuration != 0){
				doSplode = false;
				document.getElementById("buy6").style.backgroundImage="url('art/build6.3.png')";
			}
			
		}
		
		if(doSplode){
			if(batFailSafe){
				batCounter += 1
			}
			if(batCounter <= 2){
				if(blastWaveEnable){
					reduceAllIceTime(1);
				}
				if(baterestEnable){
					if(baterestValue >= david_stupid_max_bat)
						david_stupid_max_bat = baterestValue;
					baterestValue = Math.round((baterestValue * baterestLoss)*100)/100;
				}
				var splodeValue = Math.round(buildings[5].currGain * (1-player.batSplodeWorth));
				if(zeroGain){
					splodeValue = buildings[5].currGain;
					counterPic = 2;
				}
				addMoney_1((splodeValue*-1));
				gainer1 -= splodeValue;
				
				var batBorder = document.getElementById("buy6");
				batBorder.style.borderColor='DF0000';
				batBorder.style.backgroundImage="url('art/build6."+counterPic+".png')";
			}
			else{
				batCounter = 0;
				if(baterestEnable){
					addMoney_1((buildings[5].currGain * baterestValue));
					gainer1 += (buildings[5].currGain * baterestValue);
					gainer8 += (buildings[5].currGain * baterestValue);
					baterestValue = Math.round((baterestValue + (buildings[5].amount/baterestGain + .1))*100)/100;
				}
			}
		}
		else{
			if(baterestEnable){
				addMoney_1((buildings[5].currGain * baterestValue));
				gainer1 += (buildings[5].currGain * baterestValue);
				gainer8 += (buildings[5].currGain * baterestValue);
				baterestValue =  Math.round((baterestValue + (buildings[5].amount/baterestGain + .1))*100)/100;
			}
		}
		$('#coldBatDuration').text(coldBatDuration);
		$('#baterestValue').text((baterestValue*100).formatMoney());
	}
	function calcTrueSplode(){		
		calcTotalIceValue();
		calcTotalBatValue();
		player.batSplodeChnc = Math.round((player.baseBatSplodeChnc  + totalBatValue - totalIceReduc)*100)/100;
		if(player.batSplodeChnc <= 10){
			player.batSplodeChnc = 10;
		}
		
		
	}
	function calcTotalIceValue(){
		totalIceReduc = (player.iceSaveWorth * player.totalIce);
		if(totalIceReduc >= 65){
			totalIceReduc = 65;
		}
	}
	function calcTotalBatValue(){
		totalBatValue = (player.batWorth * buildings[5].amount);
		if(totalBatValue >= 45){
			totalBatValue = 45;
		}
	}
