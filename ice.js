	function reduceAllIceTime(x){
		var cubes = player.iceHolder;
		var index = cubes.length-1;
		if(index >= 10)
			index = 10;
		while(index >= 0){
			cubes[index].duration -= x;
			index --;
		}
	}
	function meltIce(){
		var picSel = 0;
		var cubes = player.iceHolder;
		var index = cubes.length-1;
		var currBuilding = buildings[6];
		while(index >= 0){
			cubes[index].duration--;
			if(unstableIceEnable){
				if(cubes[index].duration <= 50){
					if(Math.random()*100 <= 3){
						cubes[index].duration = 0;
						picSel = 1;
					}
				}
			}
			if(cubes[index].duration <= 0){
				if(picSel==0){
					document.getElementById("buy7").style.backgroundImage="url('art/build7.1.png')";
				}
				else{
					document.getElementById("buy7").style.backgroundImage="url('art/build7.2.png')";
				}
				addMoney_3(player.iceMeltMoney);
				addMoney_1(getMeltWorth());
				gainer10 += getMeltWorth();
				gainer8 += getMeltWorth();
				cubes.splice(index,1);
				currBuilding.amount --;
				currBuilding.cost = Math.round(currBuilding.baseCost * Math.pow(currBuilding.exp, currBuilding.amount));
				player.gain -= Number(currBuilding.baseGain);
				currBuilding.currGain -= currBuilding.baseGain;

				if(magicIceGainTridentEnable){
					magicIceMelted();
				}
				if(coldBatEnable){
					coldBatDuration = 5;
				}
				if(Math.random()*100 <= player.iceReform){
					buildingFree = true;
					buy(7);
					buildingFree = false;
				}
			}
			index --;
		}
	}	
	function getMeltTime(){
		if(player.iceHolder[0] != null){
			if(player.iceHolder[0].duration <= 0)
				player.iceHolder[0].duration = 0;
			return player.iceHolder[0].duration;
		}
		return 0;
	}
	function getMeltWorth(){
		return (Math.round(buildings[6].baseGain * 0.9 * player.meltWorth * (player.meltTime * .01)));
	}
	function buyIce(x){
		for(var i=0; i<x; i++){
			player.iceHolder.push(new iceCube());
			player.totalIce++;
			calcTrueSplode();
		}
	}
	function iceCube(){
		var duration = player.meltTime;
		this.duration = duration;
	}
