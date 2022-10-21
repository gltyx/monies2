	function checkGarbage(x){
		var isWarp = false;
		if(avaGarboUpgrade){
			x = 120;
		}
		if(x > 0){
			if(x % 4 == 0 && garbageFourMultEnable){
				garbageGlobalMult = Math.round((1.04 + garbageGlobalMultBonus)*100)/100;
			}
			else{
				garbageGlobalMult = 1;
			}
			if(x % 3 == 0 && garbageThreeMultEnable){
				garbageSkipEnable = true;
			}
			else{
				garbageSkipEnable = false;
				garbageSkipCounter = 0;
			}
			if(x % 5 == 0 && garbageFiveMultEnable){
				garbageBigValEnable = true;
			}
			else{
				garbageBigValEnable = false;
			}
			if(x % 2 == 0){
				isWarp = true;
			}
			calcGarbagePic();
		}

		if(x == 0){
			clearInterval(gameTimer);
			gameTimer = setInterval(gameTick, player.updTime);
		}
		else{
			garbageWarp(isWarp);
		}
	}
	var daveHolder = 0;
	function doGarbage(){
		if(warpMulti==1 || garbageAlwaysSpadeEnable){
			warpMoney();
		}
		if(garbageSkipEnable){
			if(garbageSkipCounter >= 3){
				garbageSkipCounter = -1;
				daveHolder += 1;
				doGameTick();
				
			}
			garbageSkipCounter += 1;
		}
		if(garbageBigValEnable){
			addMoney_1(Math.round(buildings[7].currGain* 7));
			gainergarb += Math.round(buildings[7].currGain* 7);
			gainer8 += Math.round(buildings[7].currGain* 7);
		}
	}
	function garbageWarp(isWarp){
		var warpBorder = document.getElementById("buy8");
		if(isWarp){
			clearInterval(gameTimer);
			gameTimer = setInterval(gameTick, (player.updTime * player.timeWarpValue));
			warpMulti = 2;
		}
		else{
			clearInterval(gameTimer);
			gameTimer = setInterval(gameTick, player.updTime);
			warpMulti = 1;
		}
	}
	function calcGarbagePic(){
		var warpBorder = document.getElementById("buy8");
		var garbAmount = buildings[7].amount;
		if(avaGarboUpgrade){
			garbAmount = 120;
		}
		var counter = 1;
		if(garbageFiveMultEnable){
			if(garbAmount % 5 == 0){
				counter *= 5;
			}
		}
		if(garbageFourMultEnable){
			if(garbAmount % 4 == 0){
				counter *= 4;
			}
		}
		if(garbageThreeMultEnable){
			if(garbAmount % 3 == 0){
				counter *= 3;
			}
		}
		if(garbAmount % 2 == 0){
			counter *= 2;
		}
			warpBorder.style.backgroundImage="url('art/build8."+counter+".png')";
		if(counter == 1){
			warpBorder.style.backgroundImage="url('art/build8.png')";
		}
		
	}
	function warpMoney(){
		if((Math.round(Math.random()*10000)/100) <= player.spadeCurrChnc){
			var giveSpades = 1;
			if(garbageAlwaysSpadeEnable)
					giveSpades = 1+Math.round(buildings[7].amount/10);
			addMoney_4(giveSpades);
		}
	}
