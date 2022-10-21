	var gameTimer;
	var buildings;
	var player;
	var bingoTimer = 0;
	var verNum = "v0.1.8994";
	var buyAmount = 1;
	var worthMult = 1000;
	var warpMulti = 0;
	var totalTicks = 0;
	var totalMoney = 10;
	var moneySpentPerBuilding = [0,0,0,0,0,0,0,0,0,0,0];
	var isRun = false;
	var allowShoeMulti = false;
	var shoeMultiDur = 0;
	var divClone;
	var smileCost = 10;
	var smileCostBase = 10;
	var upgCost = 100;
	var upgBought = 0;
	var consecDigMult = 1;
	var allowDigMulti = false;
	var bladedShoes = false;
	var weightOfMany = false;
	var bingoChain = false;
	var bingoChainValue = 1;
	var bingoFree = false;
	var bingoPicture = 1;
	var overdriveEnable = false;
	var overdriveTimer = 0;
	var overdriveDuration = 0;
	var rocketFuelMax = .80;
	var rocketFuelEnable = false;
	var rocketFuelLevel = 0;
	var sparePartsEnabled = false;
	var moneyBucket = new Array(300);
	moneyBucket.fill(0);
//	var moneyBucket2 = new Array(150);
//	moneyBucket2.fill(0);
//	var moneyBucket3 = new Array(150);
//	moneyBucket3.fill(0);
//	var moneyBucket4 = new Array(150);
//	moneyBucket4.fill(0);
	var moneyPerSecondInterval;
	var magicDuplicateEnable = false;
	var magicTridentGivesGainEnable = false;
	var magicAlterTimeEnable = false;
	var magicIceGainTridentEnable = false;
	var magicReduceIceTickEnable = false;
	var alterTimeDuration = 0;
	var alterTimeOn = false;
	var tridentsPerTick = 0;
	var batCounter = 0;
	var batFailSafe = false;
	var baterestEnable = false;
	var baterestValue = 0;
	var blastWaveEnable = false;
	var coldBatEnable = false;
	var coldBatDuration = 0;
	var unstableIceEnable = false;
	var totalIceReduc = 0;
	var totalBatValue = 0;
	var shoeMultiStepEnable = false;
	var garbageAlwaysSpadeEnable = false;
	var garbageThreeMultEnable = false;
	var garbageFourMultEnable = false;
	var garbageFiveMultEnable = false;
	var garbageGlobalMult = 1;
	var garbageGlobalMultBonus = 0;
	var garbageSkipCounter = 0;
	var garbageSkipEnable = false;
	var garbageBigValEnable = false;
	var totalUpgMax = 0;
	var upgUnlocked = 0;
	var shownMana = false;
	var manaDump = 0;
	var mannaDump = 0;
	var moanaDump = 0;
	var manaMoneyMult = 1;
	var manaMoney4Mult = 1;
	var fireBingo = false;
	var fireSpade = false;
	var avatarUpgPurchase = true;
	var shipReductApply = false;
	var avaMon1Mult = 1;
	var avaMon2Mult = 1;
	var avaMon3Mult = 1;
	var avaMon4Mult = 1;
	var avaMon5Mult = 1;
	var tripleTickEnable = false;
	var multiStepVal = 1;
	var overdriveDurationVal = 11;
	var doubleMagicChnc = 25;
	var hiddenValueVal = .77;
	var dateTicksToDo = Date.now();
	var baterestLoss = .3;
	var baterestGain = 500;
	var avaGarboUpgrade = false;
	var avaShipUpgradeEnable = false;
	var showSummonBTN = false;
	var selectedAvatarSave = -1;
	var selectedUpgradeSave = -1;
	var david_stupid_max_bat = 0;
	var infiMonMult = 1;
	var infiMon2Mult = 1;
	var infiMon3Mult = 1;
	var infiMon4Mult = 1;
	var infiMultDur = 0;
	var showInfinite = false;

	var oGainer = 0;
	var gainer1 = 0;
	var gainer2 = 0;
	var gainer3 = 0;
	var gainer4 = 0;
	var gainer5 = 0;
	var gainer6 = 0;
	var gainer7 = 0;
	var gainer8 = 0;
	var gainer9 = 0;
	var gainer10 = 0;
	var gainergarb = 0;
	
	function playerInfo(){
		var money;
		var money_2;
		var money_3;
		var money_4;
		var money_5;
		var updTime;
		var gain;
		var digChnc;
		var digMlt;
		var shipMlt;
		var spdWorth;
		var spdMWorth;
		var bingoHolder = new Array();
		var iceHolder = new Array();
		var bingoWait;
		var meltTime;
		var totalIce;
		var batSplodeChnc;
		var batWorth;
		var batSplodeWorth;
		var batFailChnc;
		var iceSaveWorth;
		var runChnc;
		var multCritValue;
		var multCritReduc;
		var digShoeWorth;
		var ballsCalled;
		var bingoBuckScale;
		var extraBingo
		var shipBaseGain;
		
		this.meltTime = 900;
		this.totalIce = 0;
		this.meltWorth = 21000;
		this.iceMeltMoney = 1;
		this.iceSaveWorth = 0.131;
		this.iceHolder = iceHolder;
		this.bingoHolder = bingoHolder;
		this.bingoWait = 20;
		this.spdWorth = 0.17;
		this.spdMWorth = 0.81;
		this.shipMlt = 1.075;
		this.shipBaseGain = 85;
		this.overdriveWait = 40;
		this.digChnc = 3.11;
		this.digMlt = 2.85;
		this.money = 10;
		this.money_2 = 0;
		this.money_3 = 0;
		this.money_4 = 0;
		this.money_5 = 0;
		this.money_6 = 0;
		this.updTime = 2000;
		this.gain = 1;
		this.baseBatSplodeChnc = 55.00;
		this.batSplodeChnc = 55.00;
		this.batWorth = 0.77;
		this.batSplodeWorth = 0.2;
		this.batFailChnc = 25;
		this.runChnc = 0;
		this.multCritValue = 1.0;
		this.multCritReduc = 0.33;
		this.digShoeWorth = 1;
		this.ballsCalled = 1;
		this.bingoBuckScale = 1.12;
		this.extraBingo = 0;
		this.freeShips = 0;
		this.magicBonus = 1;
		this.iceReform = 10;
		this.spadeCurrChnc = 20;
		this.timeWarpValue = .7;
		this.fireBingoChnc = 0;
		this.fireShipChnc = 0;
		this.pieChnc = 5;
		this.pieGainEnable = false;
		this.giantSleep = 50;
		this.giantAwake = 2;
		this.rpcTradeEnable = false;
		this.rpcTradeActive = false;
	}
	
	function building(name, cost, exp, gain){
		var name;
		var cost;
		var exp;
		var amount;
		var baseCost;
		var baseGain;
		var currGain;
		this.name = name;
		this.baseCost = cost;
		this.cost = cost;
		this.exp = exp;
		this.amount = 0;
		this.baseGain = gain;
		this.currGain = this.baseGain * this.amount;
	}
	
	function pageInit(){
		$('#alert').fadeOut(0)
		divClone = $('#wholeDocument').clone();
		resetPnB();
		clearInterval(moneyPerSecondInterval);
		moneyPerSecondInterval = setInterval(calcPerSec, 1000);
	//	mps2 = setInterval(cps2, 1000);
	//	mps3 = setInterval(cps3, 1000);
	//	mps4 = setInterval(cps4, 1000);
		money2PerSecondInterval = setInterval(calcPerSec2, 600000);
		load();
	}
	function calcPerSec2(){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function(){
			if(this.readyState == 4 && this.status == 200){
				var tempVerNum = xhr.responseText;
				tempVerNum = tempVerNum.trim();
				if(tempVerNum != verNum){
					setTimeout(function(){
						verNum = tempVerNum;
						save();
						location.reload(true);
					},120000);
				}
			}
		};
		xhr.open("GET", "https://sneekxy.github.io/verNum.txt?id="+Math.random()+"", true);
		xhr.send();
	}
	function calcPerSec(){
		moneyBucket.pop();
		moneyBucket.unshift(0);
		var monPerMinute = moneyBucket.reduce(sumBucket, 0);
		monPerMinute = Math.round((monPerMinute/300)*100)/100;
		document.getElementById("monPerSec").innerHTML = shortenLargeNumber(monPerMinute);
	}
	/*
	function cps2(){
		moneyBucket2.pop();
		moneyBucket2.unshift(0);
		var mpm = moneyBucket2.reduce(sumBucket, 0);
		mpm = Math.round((mpm/150)*100)/100;
		document.getElementById("mps2").innerHTML = mpm.formatMoney();
	}
	function cps3(){
		moneyBucket3.pop();
		moneyBucket3.unshift(0);
		var mpm = moneyBucket3.reduce(sumBucket, 0);
		mpm = Math.round((mpm/150)*100)/100;
		document.getElementById("mps3").innerHTML = mpm.formatMoney();
	}
	function cps4(){
		moneyBucket4.pop();
		moneyBucket4.unshift(0);
		var mpm = moneyBucket4.reduce(sumBucket, 0);
		mpm = Math.round((mpm/150)*100)/100;
		document.getElementById("mps4").innerHTML = mpm.formatMoney();
	}
	*/
	function sumBucket(a, b){
		return a+b;
	}
	function resetPnB(){
		player = new playerInfo();
		clearInterval(gameTimer);
		gameTimer = setInterval(gameTick, player.updTime);
		var autoSave = setInterval(save, 30000);

		buildings = [new building("Shoes", 20, 1.069, 1), new building("Spade", 200, 1.053, 2), new building("Bingo", 2300, 1.12, 19), new building("Spaceship", 9000, 1.19, player.shipBaseGain), new building("Magic", 50000, 1.02, 30), new building("Gold Bat 9000", 999999, 1.25, 9999), new building("Ice Cubes", 70000000, 1.85, 420), new building("Garbage", 654321000, 1.15, 1000), new building("Pie", 3141592653589, 1.214, 31415926), new building("Sleeping Giant", 9999999999999,1.3,1100000000), new building("Red Paper Clip",398536512698354,1.2,1)];
	}
	function resetGlobals(){
		 bingoTimer = 0;
		 buyAmount = 1;
		 worthMult = 1000;
		 warpMulti = 0;
		 totalTicks = 0;
		 totalMoney = 10;
		 moneySpentPerBuilding = [0,0,0,0,0,0,0,0,0,0,0];
		 isRun = false;
		 allowShoeMulti = false;
		 shoeMultiDur = 0;
		 upgCost = 100;
		 smileCost = 10;
		 consecDigMult = 1;
		 allowDigMulti = false;
		 bladedShoes = false;
		 weightOfMany = false;
		 bingoChain = false;
		 bingoChainValue = 1;
		 bingoFree = false;
		 bingoPicture = 1;
		 overdriveEnable = false;
		 overdriveTimer = 0;
		 overdriveDuration = 0;
		 rocketFuelMax = .80;
		 rocketFuelEnable = false;
		 rocketFuelLevel = 0;
		 sparePartsEnabled = false;
		 moneyBucket = new Array(300);
		 moneyBucket.fill(0);
	}

	function pageRefresh(){
		showBuilding();
		document.getElementById("myMoney").innerHTML = shortenLargeNumber(player.money);
		document.getElementById("myMoney2").innerHTML = shortenLargeNumber(player.money_2);
		document.getElementById("myMoney3").innerHTML = shortenLargeNumber(player.money_3);
		document.getElementById("myMoney4").innerHTML = shortenLargeNumber(player.money_4);
		document.getElementById("myMoney5").innerHTML = shortenLargeNumber(player.money_5);
		document.getElementById("myMoney6").innerHTML = shortenLargeNumber(player.money_6);
		document.getElementById("gainer").innerHTML = shortenLargeNumber(player.gain);
		document.getElementById("runChance").innerHTML = player.runChnc;
		document.getElementById("shoeMulti").innerHTML = shoeMultiDur;
		document.getElementById("digChance").innerHTML = player.digChnc;
		document.getElementById("digMult").innerHTML = player.digMlt;
		document.getElementById("bingoValue").innerHTML = shortenLargeNumber(calcBingoBucks());
		document.getElementById("bingoWait").innerHTML = player.bingoWait;
		document.getElementById("bingoBallsCalled").innerHTML = player.ballsCalled;
		document.getElementById("overdriveValue").innerHTML = (Math.round(getOverdriveValue()*10000)/100).formatMoney(2);
		document.getElementById("tridentBaseGain").innerHTML = (Math.round(buildings[4].currGain* hiddenValueVal));
		document.getElementById("conjureMoneyValue").innerHTML = (Math.round(buildings[4].currGain* hiddenValueVal));
		document.getElementById("meltTridentGain").innerHTML = (Math.round(buildings[4].amount*.3)).formatMoney();
		document.getElementById("batChance").innerHTML = player.batSplodeChnc;
		document.getElementById("baterestValue2").innerHTML = (Math.round((buildings[5].amount/500 + .1) * 100)/100);
		document.getElementById("iceTTL").innerHTML = getMeltTime();
		document.getElementById("iceMeltValue").innerHTML = getMeltWorth().formatMoney();
		document.getElementById("garbageSpadeGiveBonus").innerHTML = Math.round(buildings[7].amount/10).formatMoney();
		document.getElementById("melt7Value").innerHTML = player.iceMeltMoney.formatMoney();
		document.getElementById("smileyCost").innerHTML = smileCost;
		document.getElementById("nxtUpgValue").innerHTML = upgCost.formatMoney();
		document.getElementById("infiniteDuration").innerHTML = Math.floor(player.money_6/500);
		document.getElementById("oGainer").innerHTML = (oGainer/gainer8*100).formatMoney(2);
		document.getElementById("gainer1").innerHTML = (gainer1/gainer8*100).formatMoney(2);
		document.getElementById("gainer2").innerHTML = (gainer2/gainer8*100).formatMoney(2);
		document.getElementById("gainer3").innerHTML = (gainer3/gainer8*100).formatMoney(2);
		document.getElementById("gainer4").innerHTML = (gainer4/gainer8*100).formatMoney(2);
		document.getElementById("gainer5").innerHTML = (gainer5/gainer8*100).formatMoney(2);
		document.getElementById("gainer6").innerHTML = (gainer6/gainer8*100).formatMoney(2);
		document.getElementById("gainer7").innerHTML = (gainer7/gainer8*100).formatMoney(2);
		document.getElementById("gainer9").innerHTML = (gainer9/gainer8*100).formatMoney(2);
		document.getElementById("gainer10").innerHTML = (gainer10/gainer8*100).formatMoney(2);
		document.getElementById("gainerGarb").innerHTML = (gainergarb/gainer8*100).formatMoney(2);
		document.getElementById("gainer8").innerHTML = gainer8.formatMoney();
		document.getElementById("totalTickSpan").innerHTML = totalTicks.formatMoney();
		document.getElementById("totalmoneySpan").innerHTML = totalMoney.formatMoney();
		document.getElementById("spendOnShoe").innerHTML = moneySpentPerBuilding[0].formatMoney();
		document.getElementById("spendOnSpade").innerHTML = moneySpentPerBuilding[1].formatMoney();
		document.getElementById("spendOnBingo").innerHTML = moneySpentPerBuilding[2].formatMoney();
		document.getElementById("spendOnShip").innerHTML = moneySpentPerBuilding[3].formatMoney();
		document.getElementById("spendOnMagic").innerHTML = moneySpentPerBuilding[4].formatMoney();
		document.getElementById("spendOnBat").innerHTML = moneySpentPerBuilding[5].formatMoney();
		document.getElementById("spendOnCube").innerHTML = moneySpentPerBuilding[6].formatMoney();
		document.getElementById("spendOnGarbage").innerHTML = moneySpentPerBuilding[7].formatMoney();
		$('#sacReward').text(calcConvertMonies().formatMoney());
		
		buildings.forEach(function(building, index){
			index++;
			document.getElementById("owned"+index).innerHTML = building.amount;
			document.getElementById("cost"+index).innerHTML = shortenLargeNumber(building.cost);
		//	document.getElementById("give"+index).innerHTML = building.baseGain;
		//	document.getElementById("total"+index).innerHTML = building.currGain;
			document.getElementById("give"+index+"Txt").innerHTML = shortenLargeNumber(building.baseGain);
			if(index==4){
				document.getElementById("give"+index+"currTxt").innerHTML = shortenLargeNumber(Math.round(building.baseGain/player.shipMlt));
			}
			if(index==7)
				document.getElementById("melt"+index+"Txt").innerHTML = player.meltTime;
				document.getElementById("total"+index+"Txt").innerHTML = building.currGain.formatMoney();
			if(index==11){
				if(player.rpcTradeActive){
					document.getElementById("give"+index+"Txt").innerHTML = shortenLargeNumber(getRPCValTrade());
					document.getElementById("total"+index+"Txt").innerHTML = shortenLargeNumber((getRPCValTrade() * buildings[10].amount));
				}
				else{
					document.getElementById("give"+index+"Txt").innerHTML = shortenLargeNumber(getRPCVal());
					document.getElementById("total"+index+"Txt").innerHTML = shortenLargeNumber((getRPCVal() * buildings[10].amount));
				}
			}
			document.getElementById("ratio"+index+"Txt").innerHTML = getWorthRatio(building, index);
		});
	}
	function getWorthRatio(building, x){
		var worthRatio = 0;
		switch(x){
			case 1: if(buildings[1].amount > 0){
						worthRatio = Math.round((building.baseGain+(building.baseGain*(1+(player.digChnc/100)*(player.digMlt-1))))/building.cost*worthMult*(1+player.digChnc/100));
					}else{
						worthRatio = Math.round((building.baseGain/building.cost)*worthMult);
					}
					break;
			case 2: worthRatio = Math.round((building.baseGain+(buildings[0].baseGain*(1+((player.spdWorth+player.digChnc)/100)*(player.spdMWorth+player.digMlt-1))))/building.cost*worthMult*(1+player.digChnc/100));break;
			case 3: worthRatio = Math.round(((buildings[2].baseGain+(calcBingoBucks()/((player.extraBingo+1+(buildings[2].amount))*(player.bingoWait/(player.ballsCalled)))))*(1+(player.extraBingo/10)))/buildings[2].cost*worthMult); break;
			case 4: worthRatio = Math.round(((building.baseGain/player.shipMlt) / building.cost)*worthMult); break;
			case 5: worthRatio = Math.round(((building.baseGain + (10000*(Math.random()/10)))/building.cost)*worthMult); break;
			case 6: worthRatio = Math.round(((building.baseGain-(building.baseGain*((player.batSplodeChnc/100)*(1-player.batSplodeWorth))))*(1-(player.batSplodeChnc/100*player.batFailChnc/100)))/building.cost*worthMult);break;
			case 7: worthRatio = Math.round((((building.baseGain + getMeltWorth()+10000)/player.meltTime)/building.cost)*worthMult); break;
			case 8: worthRatio = Math.round((building.baseGain / building.cost)*worthMult); 
					if(warpMulti == 2){
						worthRatio = Math.round(((building.baseGain+120000) / building.cost)*worthMult); 
					}
					if(warpMulti == 1){
						worthRatio = Math.round((((building.baseGain+player.gain) * 1.7) / building.cost)*worthMult); 
					}break;
			case 9: worthRatio = Math.round((building.baseGain/building.cost)*worthMult); break;
			case 10: worthRatio = Math.round(((building.baseGain * (player.giantAwake / player.giantSleep))/building.cost)*worthMult); break;
			case 11: worthRatio = Math.round((getRPCVal()/building.cost)*worthMult);break;
		}
		return worthRatio
	}
	function addMoney_1(x){
		player.money = Number(player.money + (x * garbageGlobalMult * manaMoneyMult * avaMon1Mult * infiMonMult));
		totalMoney = Number(totalMoney + (x * garbageGlobalMult * manaMoneyMult * avaMon1Mult * infiMonMult));
		moneyBucket[0] += Number((x * garbageGlobalMult * manaMoneyMult * avaMon1Mult * infiMonMult));
	}
	function addMoney_2(x){
		player.money_2 = Number(player.money_2 + (x * avaMon2Mult * infiMon2Mult));
	//	moneyBucket2[0] += Number(x * avaMon2Mult);
	}
	function addMoney_3(x){
		player.money_3 = Number(player.money_3 + (x * avaMon3Mult * infiMon3Mult));
	//	moneyBucket3[0] += Number(x * avaMon3Mult);
	}
	function addMoney_4(x){
		player.money_4 = Number(player.money_4 + (x * manaMoney4Mult * avaMon4Mult * infiMon4Mult));
	//	moneyBucket4[0] += Number(x * avaMon4Mult * manaMoney4Mult);
	}
	function addMoney_5(x){
		player.money_5 = Number(player.money_5 + (x * avaMon5Mult));
	}
	function addMoney_6(x){
		player.money_6 = Number(player.money_6 + x);
	}
	function dumpInfinite(){
		infiMultDur += (Math.floor(player.money_6/500));
		player.money_6 = 0;
	}
	function gameTick(){
		var warpDValue = 1;
		if(warpMulti == 2){
			warpDValue = player.timeWarpValue;
		}
		var TicksToDo = Math.round((Date.now() - dateTicksToDo)/(player.updTime * warpDValue));
		if(TicksToDo > 100)
			TicksToDo = 100;
		if(TicksToDo < 1)
			TicksToDo = 1;
			
		for(var ww=0; ww<TicksToDo; ww++){
			if(tripleTickEnable){
				for(var ff=0; ff<7; ff++){
					doGameTick();
				}
			}
			else{
					doGameTick();
			}
		}
		dateTicksToDo = Date.now();
	}
	function doGameTick(){
		if(infiMultDur > 0){
			infiMonMult = 4;
			infiMon2Mult = 4;
			infiMon3Mult = 4;
			infiMon4Mult = 4;
			infiMultDur -= 1;
			$("#infiniteDump").css("background-image", "url('art/infiniteDump1.png')");
		}
		else{
			infiMonMult = 1;
			infiMon2Mult = 1;
			infiMon3Mult = 1;
			infiMon4Mult = 1;
			$("#infiniteDump").css("background-image", "url('art/infiniteDump.png')");
		}
		
		totalTicks++;
		resetBuildingIcon();
//		$('#building1Upgrade').css({"background-image": "url(art/build1.png)", "background-size":"contain"});
		if(Math.round((Math.random()*100000))==36321){
			buildings.forEach(function(building, index){
				index++;
				document.getElementById("buy"+index).src="buildx.png";
			});
		}
		addMoney_1(player.gain);
		if(player.money >= 10000000 && worthMult < 5000)
			worthMult = 5000;
		if(player.money >= 50000000 && worthMult < 10000)
			worthMult = 10000;
		if(player.money >= 100000000 && worthMult < 80000)
			worthMult = 80000;
		if(player.money >= 1000000000 && worthMult < 500000)
			worthMult = 500000;
		if(player.money >= 100000000000 && worthMult < 6000000)
			worthMult = 6000000;
		if(player.money >= 10000000000000 && worthMult < 10000000)
			worthMult = 10000000;
		if(player.money >= 100000000000000 && worthMult < 100000000)
			worthMult = 100000000;
		if(player.money >= 10000000000000000 && worthMult < 5000000000)
			worthMult = 5000000000;
		if(player.money >= 500000000000000000 && worthMult < 20000000000)
			worthMult = 20000000000;
		
		gainer8 += player.gain;
		oGainer += buildings[0].currGain;
		gainer1 += buildings[5].currGain;
		gainer2 += buildings[1].currGain;
		gainer3 += buildings[2].currGain;
		gainer4 += buildings[3].currGain;
		gainer5 += buildings[4].currGain;
		gainer9 += buildings[6].currGain;
		gainergarb += buildings[7].currGain;
		
		if(buildings[1].amount >=1)
			dig();
		if(buildings[2].amount >=1){
			bingoTimer++;
			if(bingoTimer >= player.bingoWait){
				for(var k=0;k<player.ballsCalled;k++){
					playBingo();
				}
				bingoTimer = 0;
				bingoChainValue = 1;
				bingoPicture = 1;
			}
			else{
				document.getElementById("bingoChain").innerHTML = bingoChainValue;
			}
		}
		if(buildings[4].amount >=1){
			tridentsPerTick = 0;
			doMagic();
		}
		if(buildings[5].amount >=1)
			batSplode();
		if(buildings[6].amount >=1)
			meltIce();
		if(buildings[7].amount >=1){
			doGarbage();
		}
		if(buildings[8].amount >=1){
			doPie();
		}
		if(buildings[9].amount >=1){
			doGiant();
		}
		if(buildings[10].amount >=1){
			doRPC();
		}
		if(buildings[3].amount >=1)
			runShip();
		if(shoeMultiStepEnable)
			shoeMultiStep();
		if(!isRun)
			shoeRun();
		if(shoeMultiDur == 1)
			shoeMultiDur -= 1;
		if(shoeMultiDur > 1){
			shoeMultiRun();
			shoeMultiDur -= 1;
		}
		for(var jjk=0; jjk<totalUpgMax;jjk++){
			if((Math.round(Math.random()*10000)/100) <=10){
				addMoney_4(1);
			}
		}
		if(player.money_3 >= 3 || enabledUpgrades.reduce(sumBucket,0) > 0){
			$('#upgBox:Hidden').toggle();
		}
		if(player.money_4 >= 2000000 || shownMana){
			shownMana = true;
			$('#manaArea:Hidden').toggle();
		}
		if(player.money_6 >= 1000 || showInfinite){
			showInfinite = true;
			$("#infiniteDump:Hidden").toggle();
		}
		pageRefresh();
	}
	
	function showAAAA(){
		$('#aaaa').toggle()
	}

	function showBuilding(){
		var showAll = false;
		for(var x = 8; x>0; x--){
			if(x < 6){
				if(((player.money > (buildings[x-1].baseCost*.5)) || buildings[x-1].amount > 0 || showAll)){
					$('#building'+(x-1)).fadeIn("slow");
					showAll = true;
				}
			}
			else{
				if(((player.money > (buildings[x-1].baseCost*.3)) || buildings[x-1].amount > 0 || showAll)){
					$('#building'+(x-1)).fadeIn("slow");
					showAll = true;
				}
			}
		}
	}
	
	function resetBuildingIcon(){
		buildings.forEach(function(building, index){
			index++;
			if(index != 8){
				document.getElementById("buy"+index).style.backgroundImage="url('art/build"+index+".png')";
				document.getElementById("buy"+index).style.borderColor="#000000";
			}
		});
	}

	function save(){
		var playerJSON = JSON.stringify(player);
		localStorage.setItem('player', playerJSON);
		buildings[3].amount -= player.freeShips;
		var buildJSON = JSON.stringify(buildings);
		localStorage.setItem('buildings',buildJSON);
		buildings[3].amount += player.freeShips;
		var upg1JSON = JSON.stringify(upg1Manage);
		localStorage.setItem('upg1', upg1JSON);
		var upg2JSON = JSON.stringify(upg2Manage);
		localStorage.setItem('upg2', upg2JSON);
		var upg3JSON = JSON.stringify(upg3Manage);
		localStorage.setItem('upg3', upg3JSON);
		var upg4JSON = JSON.stringify(upg4Manage);
		localStorage.setItem('upg4', upg4JSON);
		var upg5JSON = JSON.stringify(upg5Manage);
		localStorage.setItem('upg5', upg5JSON);
		var upg6JSON = JSON.stringify(upg6Manage);
		localStorage.setItem('upg6', upg6JSON);
		var upg7JSON = JSON.stringify(upg7Manage);
		localStorage.setItem('upg7', upg7JSON);
		var upg8JSON = JSON.stringify(upg8Manage);
		localStorage.setItem('upg8', upg8JSON);
		
		localStorage.setItem('upgProgress',canBuyUpgrade);
		localStorage.setItem('upgSeen1', shownUpg1Before);
		localStorage.setItem('upgSeen2', shownUpg2Before);
		localStorage.setItem('upgSeen3', shownUpg3Before);
		localStorage.setItem('upgSeen4', shownUpg4Before);
		localStorage.setItem('upgSeen5', shownUpg5Before);
		localStorage.setItem('upgSeen6', shownUpg6Before);
		localStorage.setItem('upgSeen7', shownUpg7Before);
		localStorage.setItem('upgSeen8', shownUpg8Before);
		
		localStorage.setItem('manaDump', manaDump);
		localStorage.setItem('mannaDump', mannaDump);
		localStorage.setItem('moanaDump', moanaDump);
		
		localStorage.setItem('versionNum',verNum);
		localStorage.setItem('worthMult', worthMult);
		localStorage.setItem('totalTick', totalTicks);
		localStorage.setItem('totalMon', totalMoney);
		localStorage.setItem('rocketFuel', rocketFuelLevel);
		localStorage.setItem('manaShown', shownMana);
		
		localStorage.setItem('showAvaBTN', showSummonBTN);
		
		var moneyPerBuild = JSON.stringify(moneySpentPerBuilding);
		localStorage.setItem('monPerBuild',moneyPerBuild);
		
		var avaUpgradeList = avaMatAmt.concat(avaGroAmt);
		avaUpgradeList = avaUpgradeList.concat(avaWelAmt);
		var avaUpgradeStrList = JSON.stringify(avaUpgradeList);
		localStorage.setItem('avaUpgrades',avaUpgradeStrList);
		localStorage.setItem('selectedAvaSave', selectedAvatarSave);
		localStorage.setItem('selectedUpgSave', selectedUpgradeSave);
		
		localStorage.setItem('showingInfinite', showInfinite);
		localStorage.setItem('infDuration', infiMultDur);
		
		document.getElementById("alert").innerHTML = "Game has been saved";
		saveLoadPopup();
	}
	function saveLoadPopup(){

		$('#alert').fadeIn('fast')
		$('#alert').fadeOut('fast')
		pageRefresh();
	}
	function load(){
			resetPnB();
			resetGlobals();
			shownUpg1Before = (localStorage.getItem('upgSeen1') == 'true');
			shownUpg2Before = (localStorage.getItem('upgSeen2') == 'true');
			shownUpg3Before = (localStorage.getItem('upgSeen3') == 'true');
			shownUpg4Before = (localStorage.getItem('upgSeen4') == 'true');
			shownUpg5Before = (localStorage.getItem('upgSeen5') == 'true');
			shownUpg6Before = (localStorage.getItem('upgSeen6') == 'true');
			shownUpg7Before = (localStorage.getItem('upgSeen7') == 'true');
			shownUpg8Before = (localStorage.getItem('upgSeen8') == 'true');
			shownMana = (localStorage.getItem('manaShown') == 'true');
			if(localStorage.getItem('player')){
				var playerHolder = JSON.parse(localStorage.getItem('player'));
				loadPlayer(playerHolder);
			}
			if(localStorage.getItem('buildings')){
				var buildingHolder = JSON.parse(localStorage.getItem('buildings'));	
				loadBuildings(buildingHolder);
			}
			if(localStorage.getItem('upg1')){
				var upg1Mang = JSON.parse(localStorage.getItem('upg1'));
				loadUpg1(upg1Mang);
			}
			if(localStorage.getItem('upg2')){
				var upg2Mang = JSON.parse(localStorage.getItem('upg2'));
				loadUpg2(upg2Mang);
			}
			if(localStorage.getItem('upg3')){
				var upg3Mang = JSON.parse(localStorage.getItem('upg3'));
				loadUpg3(upg3Mang);
			}
			if(localStorage.getItem('upg4')){
				var upg4Mang = JSON.parse(localStorage.getItem('upg4'));
				loadUpg4(upg4Mang);
			}
			if(localStorage.getItem('upg5')){
				var upg5Mang = JSON.parse(localStorage.getItem('upg5'));
				loadUpg5(upg5Mang);
			}
			if(localStorage.getItem('upg6')){
				var upg6Mang = JSON.parse(localStorage.getItem('upg6'));
				loadUpg6(upg6Mang);
			}
			if(localStorage.getItem('upg7')){
				var upg7Mang = JSON.parse(localStorage.getItem('upg7'));
				loadUpg7(upg7Mang);
			}
			if(localStorage.getItem('upg8')){
				var upg8Mang = JSON.parse(localStorage.getItem('upg8'));
				loadUpg8(upg8Mang);
			}
			
			if(localStorage.getItem('manaDump')){
				calcManaPercent(Number(localStorage.getItem('manaDump')));
			}
			if(localStorage.getItem('mannaDump')){
				calcMannaPercent(Number(localStorage.getItem('mannaDump')));
			}
			if(localStorage.getItem('moanaDump')){
				calcMoanaPercent(Number(localStorage.getItem('moanaDump')));
			}
			
			if(localStorage.getItem('worthMult')){
				worthMult = localStorage.getItem('worthMult');
			}
			if(localStorage.getItem('totalTick')){
				totalTicks = Number(localStorage.getItem('totalTick'));
			}
			if(localStorage.getItem('totalMon')){
				totalMoney = Number(localStorage.getItem('totalMon'));
			}
			if(localStorage.getItem('monPerBuild')){
				moneySpentPerBuilding = JSON.parse(localStorage.getItem('monPerBuild'));
				if(moneySpentPerBuilding.length == 8){
					moneySpentPerBuilding.push(0);
					moneySpentPerBuilding.push(0);
					moneySpentPerBuilding.push(0);
				}
			}
			if(localStorage.getItem('versionNum')){
				verNum = localStorage.getItem('versionNum');
			}
			if(localStorage.getItem('rocketFuel')){
				rocketFuelLevel = Number(localStorage.getItem('rocketFuel'));
			}
			
			canBuyUpgrade = (localStorage.getItem('upgProgress') == 'true');
			if(canBuyUpgrade){
				player.money_3 += smileCost;
				canBuyUpgrade = false;
				handleUpgBuy();
			}
			
			if(localStorage.getItem('avaUpgrades')){
				var avaUpgMan = JSON.parse(localStorage.getItem('avaUpgrades'));
				loadAvaUpg(avaUpgMan);
			}
			
			showSummonBTN = (localStorage.getItem('showAvaBTN') == 'true');
			if(localStorage.getItem('selectedAvaSave')){
				selectedAvatarSave = Number(localStorage.getItem('selectedAvaSave'));
			}
			if(localStorage.getItem('selectedUpgSave')){
				selectedUpgradeSave = Number(localStorage.getItem('selectedUpgSave'));
			}
				loadAvaDisplay();
			
			showInfinite = (localStorage.getItem('showingInfinite') == 'true');
			infiMultDur = Number(localStorage.getItem('infDuration'));
			
			document.getElementById("alert").innerHTML = "Game has been loaded";
			
			
		buildings.forEach(function(building, index){
			index++;
			document.getElementById("name"+index).innerHTML = building.name;
			document.getElementById("owned"+index).innerHTML = building.amount;
			document.getElementById("cost"+index).innerHTML = building.cost;
		});
		saveLoadPopup();
	}
	function nameBuilding(){
		buildings.forEach(function(building, index){
			index++;
			document.getElementById("name"+index).innerHTML = building.name;
			document.getElementById("owned"+index).innerHTML = building.amount;
			document.getElementById("cost"+index).innerHTML = building.cost;
		});
	}
	function loadBuildings(build){
		build.forEach(function(building, index){
			buildings[index].amount = building.amount;
		});
		loadBuilding();
	}
	function loadPlayer(p2){
		Object.keys(p2).forEach(function(playerNodes){
			if(playerNodes == "totalIce" || playerNodes == "iceHolder" || playerNodes == "bingoHolder" || playerNodes == "money" || playerNodes == "money_2" || playerNodes == "money_3" || playerNodes == "money_4" || playerNodes == "money_5" || playerNodes == "money_6"){
				player[playerNodes] = p2[playerNodes];
			}
		});
		var bHolder = new Array();
		var cHolder;
		player.bingoHolder.forEach(function(bingo){
			cHolder = new bingoCard();
			cHolder.setCard(bingo.valueSlots, bingo.usedSlots);
			bHolder.push(cHolder);
		});
		player.bingoHolder = bHolder;
	}
	
	$('.toggle').click(function(){
		$(this).toggleClass("grey");
		var content = $(this).next();
		$(content).toggle();
	});
	function reset(){
		if(confirm("This will reset your entire game. Are you sure you want to do this?")){
			localStorage.clear();
			location.reload();
		}	
	}
	


function shortenLargeNumber(number){
var SI_PREFIXES = ["Trillion", "Quadrillion", "Quintillion", "Sextillion", "Septillion", "Octillion"];
    var tier = Math.log10(number) / 3 | 0;
    if(tier < 4) return Math.round(number).formatMoney();
    var prefix = SI_PREFIXES[tier-4];
    var scale = Math.pow(10, tier * 3);
    var scaled = number / scale;
	return scaled.toFixed(2) + " "+prefix;
}
	

	Number.prototype.formatMoney = function(c, d, t){
		var n = this, 
		c = isNaN(c = Math.abs(c)) ? 0 : c, 
		d = d == undefined ? "." : d, 
		t = t == undefined ? "," : t, 
		s = n < 0 ? "-" : "", 
		i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))), 
		j = (j = i.length) > 3 ? j % 3 : 0;
	   return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
 };
	
