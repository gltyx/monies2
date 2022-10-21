var buildingFree = false;

	function cycleBuy(){
		switch(buyAmount){
			case 1: buyAmount = 2; document.getElementById("buyAmount").innerHTML = "10"; break;
			case 2: buyAmount = 3; document.getElementById("buyAmount").innerHTML = "Max"; break;
			case 3: buyAmount = 1; document.getElementById("buyAmount").innerHTML = "1"; break;
		}
	}
	function pickBuy(x){
		switch(buyAmount){
			case 1: buy(x); break;
			case 2: buyTen(x); break;
			case 3: buyMax(x); break;
		}
	}
	function buyTen(x){
		for(var y = 0; y < 10; y++){
			buy(x);
		}
	}
	function buyMax(x){
		while(player.money >= buildings[x-1].cost){
			buy(x);
		}
	}
	function buy(x){
		var buyInQuest = document.getElementById("buy"+x);
		var currBuilding = buildings[x-1];
		
		if(currBuilding.cost <= player.money || buildingFree){
			if(!buildingFree){
				player.money = player.money - currBuilding.cost;
				moneySpentPerBuilding[x-1] += currBuilding.cost;
			}
			currBuilding.amount++;
			currBuilding.cost = Math.round(currBuilding.baseCost * Math.pow(currBuilding.exp,currBuilding.amount));
			buyInQuest.border="2";
			window.setTimeout(function(){buyInQuest.border="1";},100);
			currBuilding.currGain += currBuilding.baseGain
			if(currBuilding.name=="Shoes" && bladedShoes){
				if(currBuilding.amount%25 == 0)
					player.digChnc += 1;
			}
			if(currBuilding.name=="Spade")
				buySpade(1);
			if(currBuilding.name=="Bingo")
				buyBingo(1);
			if(currBuilding.name=="Ice Cubes"){
				buyIce(1);
			}
			player.gain += Number(currBuilding.baseGain);
			if(x==10){
				player.gain -= Number(currBuilding.baseGain);
			}
			if(currBuilding.name=="Spaceship"){
				if(currBuilding.amount >= 120){
					currBuilding.baseGain = Math.round(currBuilding.baseGain * (player.shipMlt * .96));
				}
				else{
					currBuilding.baseGain = Math.round(currBuilding.baseGain * player.shipMlt);
				}
				rocketFuelLevel = 0;
			}
			if(currBuilding.name=="Gold Bat 9000"){
				calcTrueSplode();
			}	
			if(currBuilding.name=="Garbage")
				checkGarbage(currBuilding.amount);
			if(weightOfMany && currBuilding.name!="Spade" && !buildingFree)
				player.digMlt = Math.round((player.digMlt+0.1)*100)/100;
			if(currBuilding.name=="Spaceship"){
				if(sparePartsEnabled){
					currBuilding.cost = Math.round(currBuilding.baseCost * Math.pow(currBuilding.exp,(currBuilding.amount-player.freeShips)));
					if(currBuilding.amount % 10==0){
						if(!buildingFree){
							buildingFree = true;
							player.freeShips += 1;
							buy(4);
							buildingFree = false;
						}
						else{
							player.freeShips += 1;
							buy(4);
						}
					}
				}
			}
			pageRefresh();
		}	
	}
	function loadBuilding(){
		for(var x=0; x<11; x++){
			var currBuilding = buildings[x];
			currBuilding.cost = Math.round(currBuilding.baseCost * Math.pow(currBuilding.exp,currBuilding.amount));
			if(x!=3){
				if(x==9){
					currBuilding.currGain += (currBuilding.baseGain * currBuilding.amount);
				}
				else{
					player.gain += Number(currBuilding.baseGain * currBuilding.amount);
					currBuilding.currGain += (currBuilding.baseGain * currBuilding.amount);
				}
			}
			else{
				player.gain += calcShipTotalValue(currBuilding.amount);
			}
		}
		buySpade(buildings[1].amount);
		checkGarbage(buildings[7].amount);
		calcTrueSplode();
	}
