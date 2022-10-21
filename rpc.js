	var selectedToTrade = 11;
	var selectedTradeName = "";
	var tradeTimer = 0;
	var asdfasdfasdf = 0;
	var fdsafdsafdsa = 0;
	function doRPC(){
		addMoney_6(1);
		totalMoney = getRPCVal();
		asdfasdfasdf = totalMoney;
		addMoney_1(totalMoney);
		if(player.rpcTradeEnable && !player.rpcTradeActive){
			if(Math.random()*100 < 5){
				selectedToTrade = Math.floor(Math.random()*10);
				selectedTradeName = buildings[selectedToTrade].name;
				player.rpcTradeActive = true;
				tradeTimer = 50;
			}
		}
		if(player.rpcTradeActive){
			tradeTimer -= 1;
			var ss = moneySpentPerBuilding[selectedToTrade];
			var bonusMon = ss * .0000000013;
			fdsafdsafdsa = bonusMon
			addMoney_1(bonusMon);
			if(tradeTimer <= 0){
				player.rpcTradeActive = false;
			}
			$('#tradeBuilding').text(selectedTradeName);
			$('#tradeDurationValue').text((tradeTimer+1));
			$('#buy11').css('background-image','url(art/build11.1.png)');
		}
		else{
			$('#tradeBuilding').text("None");
			$('#tradeDurationValue').text("0");
		}
	}
	function getRPCVal(){
		var arHolder = moneySpentPerBuilding.slice(0,10);
		var totalMoney = Number(1000000+Math.round(arHolder.reduce(sumBucket, 0) * .000000000139));
		return totalMoney;
	}
	function getRPCValTrade(){
		var arHolder = moneySpentPerBuilding.slice(0,10);
		var totalMoney = Number(1000000+Math.round(arHolder.reduce(sumBucket, 0) * .000000000139));
		var ss = moneySpentPerBuilding[selectedToTrade];
		var bonusMon = ss * .000000013;
		return totalMoney+bonusMon;
	}
