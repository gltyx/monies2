	function calcShipTotalValue(x){
		buildings[3].currGain = 0;
		buildings[3].baseGain = player.shipBaseGain;
		for(var i=0; i<x; i++){
			buildings[3].currGain += buildings[3].baseGain;
			if(i >= 120){
				buildings[3].baseGain = Math.round(buildings[3].baseGain * (player.shipMlt * .96));
			}
			else{
				buildings[3].baseGain = Math.round(buildings[3].baseGain * player.shipMlt);
			}
		}
		return buildings[3].currGain;
	}
	function runShip(){
		if(overdriveEnable)
			shipOverdrive();
		if(rocketFuelEnable)
			shipRocketFuel();
	}
	function shipRocketFuel(){
		rocketFuelLevel += 1;
		var rfReduc = 1-(rocketFuelLevel / 10000);
		if(rfReduc < rocketFuelMax)
			rfReduc = rocketFuelMax;
		buildings[3].cost = Math.round((buildings[3].baseCost * Math.pow(buildings[3].exp,(buildings[3].amount - player.freeShips)))*rfReduc);
		$('#rocketFuelPercent').text(((1-rfReduc)*100).formatMoney(2));
	}
	function shipOverdrive(){
		if(overdriveDuration == 1)
			overdriveDuration = 0;
		if(overdriveDuration==0)
			overdriveTimer += 1;
		
		var shipBorder = document.getElementById("buy4");
		shipBorder.style.backgroundImage="url('art/build4.png')";
		
		if(overdriveTimer >= player.overdriveWait){
			overdriveDuration = overdriveDurationVal;
			overdriveTimer = 0;
		}
		
		if(overdriveDuration > 1){
			var overdriveShipValue = buildings[3].currGain;
			if(avaShipUpgradeEnable){
				overdriveShipValue *= 6;
			}
			var overdriveMoney = Math.round(overdriveShipValue * getOverdriveValue());
			if(Math.random()*100 <= player.fireShipChnc){
				reduceAllIceTime(1);
			}
			addMoney_1(overdriveMoney);
			gainer4 += overdriveMoney;
			gainer8 += overdriveMoney;
			overdriveDuration -= 1;
			shipBorder.style.backgroundImage="url('art/build4.1.png')";
		}
		
			
		$('#liftoffCounter').text(Number(player.overdriveWait - overdriveTimer));
		if(overdriveDuration!=0)
			$('#liftoffCounter').text("In Flight");
		$('#liftoffDuration').text(overdriveDuration);
	}
	function getOverdriveValue(){
		var odValue = 1-Math.pow(Math.E, ((buildings[3].amount*-1)/90));
		return odValue;
	}