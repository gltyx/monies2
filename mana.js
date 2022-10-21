	function manaFill1(x){
		var manaHeight = $('#manaBar1').height();
		var manaPercent = 510 - (510 * x/100);
		$('#manaBar1').height(manaPercent);
	}
	function manaFill2(x){
		var manaHeight = $('#manaBar2').height();
		var manaPercent = 510 - (510 * x/100);
		$('#manaBar2').height(manaPercent);
	}
	function manaFill3(x){
		var manaHeight = $('#manaBar3').height();
		var manaPercent = 510 - (510 * x/100);
		$('#manaBar3').height(manaPercent);
	}
	function calcManaPercent(x){
		manaDump += x;
		$('#mana1Dump').text(shortenLargeNumber(manaDump));
		var fillPercent = Math.round((1-(Math.pow(Math.E, (manaDump*-1)/223456789)))*10000)/100;
		$('#mana1Percent').text(fillPercent);
		manaFill1(fillPercent);
		var moneyMult =  Math.round((.0000015*Math.pow(fillPercent,4)+.01)*10000)/100;
		$('#mana1Worth').text(moneyMult.formatMoney());
		manaMoneyMult = Math.round((1+(.0000015*Math.pow(fillPercent,4)+.01))*100)/100;
	}
	function calcMannaPercent(x){
		mannaDump += x;
		$('#mana2Dump').text(shortenLargeNumber(mannaDump));
		var fillPercent = Math.round((1-(Math.pow(Math.E, (mannaDump*-1)/45000000)))*10000)/100;
		$('#mana2Percent').text(fillPercent);
		manaFill2(fillPercent);
		var moneyMult =  Math.round((.55*fillPercent+.01)*10000)/100;
		$('#mana2Worth').text(moneyMult.formatMoney());
		manaMoney4Mult = Math.round((1+(.55*fillPercent+.01))*100)/100;
	}
	function calcMoanaPercent(x){
		moanaDump += x;
		$('#mana3Dump').text(shortenLargeNumber(moanaDump));
		var fillPercent = Math.round((moanaDump/(15000000000000000 * moanaScale))*10000)/100;
		$('#mana3Percent').text(fillPercent);
		$('#mana3DumpRemain').text(shortenLargeNumber((15000000000000000 * moanaScale)-moanaDump));
		manaFill3(fillPercent);
		if(fillPercent >= 100){
			avatarUpgPurchase = false;
			showSummonBTN = true;
			$('#summonButton:hidden').toggle();
		}
	}
	function manaDumpFunc(x){
		if(x==1){
			var dumpVal = player.money_4;
			player.money_4 = 0;
			calcManaPercent(dumpVal);
		}
		if(x==2){
			var dumpVal = player.money_4;
			player.money_4 = 0;
			calcMannaPercent(dumpVal);
		}
		if(x==3){
			var dumpVal = player.money;
			player.money = 0;
			calcMoanaPercent(dumpVal);
		}
	}
