	var davidisdumb = 0;
	function buySpade(x){
			player.digChnc = Math.round((player.digChnc + (player.spdWorth*x))*100)/100;
			player.digMlt = Math.round((player.digMlt + (player.spdMWorth*x))*100)/100;
	}
	function dig(){
		var critAgain = true;
		var counter = 0;
		var counterPic = 1;
		var totalCritValue = 0;
		var multiDigTalent = false;
		if(consecDigMult == 3)
			multiDigTalent = true;
		while(critAgain){
			if((Math.round(Math.random()*10000)/100) <= Math.round((player.digChnc / (1+(player.multCritReduc*counter))))){
				if(fireSpade){
					if(Math.random()*100 <= 5){
						davidisdumb += 1;
						reduceAllIceTime(1);
					}
				}
				var critValue = Math.round((buildings[0].currGain * player.digShoeWorth)* (player.digMlt * consecDigMult) * Math.pow(player.multCritValue,counter));
				addMoney_1(critValue);
				totalCritValue += critValue;
				gainer6 += critValue;
				gainer8 += critValue;
				
				if(allowShoeMulti){
					if((Math.round(Math.random()*100)+1 <= 20)){
						shoeMultiDur = 11;
					}
				}
				if(counter > 4)
					multiDigTalent = false;
				
				var spadeBorder = document.getElementById("buy2");
				switch(counterPic){
					case 1: spadeBorder.style.borderColor='FFD700';break;
					case 2: spadeBorder.style.borderColor='C3C3C3';break;
					case 3: spadeBorder.style.borderColor='00A2E8';break;
					case 4: spadeBorder.style.borderColor='A349A4';break;
					case 5: spadeBorder.style.borderColor='A349A4';break;
				}
				spadeBorder.style.backgroundImage="url('art/build2."+counterPic+".png')";
				counter++
				if(counterPic < 5){
					counterPic++;
				}
			}
			else{
				critAgain = false;
			}
		}
		if(counter > 4){
			if(allowDigMulti){
				consecDigMult = 3;
			}
		}
		if(multiDigTalent)
			consecDigMult = 1;
		document.getElementById("digVal").innerHTML = totalCritValue.formatMoney();
	}