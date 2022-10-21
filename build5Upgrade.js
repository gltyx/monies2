var upg5Manage = new Array(11);
var upg5Amt = [1,3,2,1,1,5,2,1,2,1,1];
var upg5Free = false;
var shownUpg5Before = false;
upg5Manage.fill(0);
upg5Manage[0] = 1;
upg5Manage[5] = 1;
upg5Manage[8] = 1;
$('#b5upg1').toggleClass("upgradeBuy");
$('#b5upg6').toggleClass("upgradeBuy");
$('#b5upg9').toggleClass("upgradeBuy");

	function hideB5Upgrade(){
		$('#b5Upgrades:visible').toggle();
		$('#b5upg1').fadeOut('fast');
		$('#b5upg2').fadeOut('fast');
		$('#b5upg3').fadeOut('fast');
		$('#b5upg4').fadeOut('fast');
		$('#b5upg5').fadeOut('fast');
		$('#b5upg6').fadeOut('fast');
		$('#b5upg7').fadeOut('fast');
		$('#b5upg8').fadeOut('fast');
		$('#b5upg9').fadeOut('fast');
		$('#b5upg10').fadeOut('fast');
		$('#b5upg11').fadeOut('fast');

		$('#b5l1').fadeOut('fast');
		$('#b5l2').fadeOut('fast');
		$('#b5l3').fadeOut('fast');
		$('#b5l4').fadeOut('fast');
		$('#b5l5').fadeOut('fast');
		$('#b5l6').fadeOut('fast');
		$('#b5l7').fadeOut('fast');
		$('#b5l8').fadeOut('fast');
	}

	function showB5UpgradeSlow(){
		$('#b5Upgrades:hidden').toggle();
		for(var k=0; k<11;k++){
			showGrey5Upg(k);
		}
		$('#buildingUpgrades').css("background-image", "url(art/build5BGUpg.png)");
		
		$('#b5upg1').fadeIn('slow');
		$('#b5upg1amt').fadeIn('slow');
		$('#b5upg2').delay(350).fadeIn('slow');
		$('#b5upg3').delay(650).fadeIn('slow');
		$('#b5upg4').delay(950).fadeIn('slow');
		$('#b5upg5').delay(950).fadeIn('slow');
		$('#b5upg6').fadeIn('slow');
		$('#b5upg6amt').fadeIn('slow');
		$('#b5upg7').delay(350).fadeIn('slow');
		$('#b5upg8').delay(650).fadeIn('slow');
		$('#b5upg9').fadeIn('slow');
		$('#b5upg9amt').fadeIn('slow');
		$('#b5upg10').delay(350).fadeIn('slow');
		$('#b5upg11').delay(350).fadeIn('slow');

		$('#b5l1').delay(350).fadeIn('slow');
		$('#b5l2').delay(650).fadeIn('slow');
		$('#b5l3').delay(950).fadeIn('slow');
		$('#b5l4').delay(950).fadeIn('slow');
		$('#b5l5').delay(350).fadeIn('slow');
		$('#b5l6').delay(650).fadeIn('slow');
		$('#b5l7').delay(350).fadeIn('slow');
		$('#b5l8').delay(350).fadeIn('slow');

	
		fillB5UpgradeText();
	}
	
	function showB5Upgrade(){
		$('#b5Upgrades:hidden').toggle();
		for(var k=0; k<11;k++){
			showGrey5Upg(k);
		}
		$('#buildingUpgrades').css("background-image", "url(art/build5BGUpg.png)");
			
		$('#b5upg1').fadeIn('fast');
		$('#b5upg1amt').fadeIn('fast');
		$('#b5upg2').fadeIn('fast');
		$('#b5upg3').fadeIn('fast');
		$('#b5upg4').fadeIn('fast');
		$('#b5upg5').fadeIn('fast');
		$('#b5upg6').fadeIn('fast');
		$('#b5upg6amt').fadeIn('fast');
		$('#b5upg7').fadeIn('fast');
		$('#b5upg8').fadeIn('fast');
		$('#b5upg9').fadeIn('fast');
		$('#b5upg9amt').fadeIn('fast');
		$('#b5upg10').fadeIn('fast');
		$('#b5upg11').fadeIn('fast');

		$('#b5l1').fadeIn('fast');
		$('#b5l2').fadeIn('fast');
		$('#b5l3').fadeIn('fast');
		$('#b5l4').fadeIn('fast');
		$('#b5l5').fadeIn('fast');
		$('#b5l6').fadeIn('fast');
		$('#b5l7').fadeIn('fast');
		$('#b5l8').fadeIn('fast');

		fillB5UpgradeText();
	}
	
	function buy5Upgrade(x){
		if(upg5Manage[x] > 0 && (player.money_2 > upgCost || upg5Free)){
			if(upg5Manage[x] == 1){
				if(!upg5Free)
					player.money_2 -= upgCost; 
				upg5Manage[x]++;
				switch(x){
					case 0: $('#b5l1').css('background-image','url(art/upgBar2_1.png)'); 
							$('#b5upg2').toggleClass("upgradeBuy");
							$('#b5upg2amt').fadeIn('slow');
							upg5Manage[1] = 1;
							showColorUpg5(x);
							update5Upgrade(x);
							fillB5UpgradeText();
							break;
					case 1: $('#b5l2').css('background-image','url(art/upgBar2_1.png)'); 
							$('#b5upg3').toggleClass("upgradeBuy");
							$('#b5upg3amt').fadeIn('slow');
							upg5Manage[2] = 1;
							showColorUpg5(x);
							update5Upgrade(x);
							fillB5UpgradeText();
							break;
					case 2: $('#b5l3').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b5l4').css('background-image','url(art/upgBar4_1.png)'); 
							$('#b5upg4').toggleClass("upgradeBuy");
							$('#b5upg5').toggleClass("upgradeBuy");
							$('#b5upg4amt').fadeIn('slow');
							$('#b5upg5amt').fadeIn('slow');
							upg5Manage[3] = 1;
							upg5Manage[4] = 1;
							showColorUpg5(x);
							update5Upgrade(x);
							fillB5UpgradeText();
							break;
					case 3: showColorUpg5(x);
							update5Upgrade(x);
							break;
					case 4: showColorUpg5(x);
							update5Upgrade(x);
							break;
					case 5:	$('#b5l5').css('background-image','url(art/upgBar4_1.png)'); 
							$('#b5upg7').toggleClass("upgradeBuy");
							$('#b5upg7amt').fadeIn('slow');
							upg5Manage[6] = 1;
							showColorUpg5(x);
							update5Upgrade(x);
							fillB5UpgradeText();
							break;
					case 6: $('#b5l6').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b5upg8').toggleClass("upgradeBuy");
							$('#b5upg8amt').fadeIn('slow');
							upg5Manage[7] = 1;
							showColorUpg5(x);
							update5Upgrade(x);
							fillB5UpgradeText();
							break;
					case 7: showColorUpg5(x);
							update5Upgrade(x);
							break;
					case 8: $('#b5l7').css('background-image','url(art/upgBar2_1.png)'); 
							$('#b5l8').css('background-image','url(art/upgBar1_1.png)'); 
							$('#b5upg10').toggleClass("upgradeBuy");
							$('#b5upg11').toggleClass("upgradeBuy");
							$('#b5upg10amt').fadeIn('slow');
							$('#b5upg11amt').fadeIn('slow');
							upg5Manage[9] = 1;
							upg5Manage[10] = 1;
							showColorUpg5(x);
							update5Upgrade(x);
							fillB5UpgradeText();
							break;
					case 9: showColorUpg5(x);
							update5Upgrade(x);
							break;
					case 10:showColorUpg5(x);
							update5Upgrade(x);
							break;
				}
			}
			else{
				if((upg5Manage[x]-1) < upg5Amt[x]){
					if(!upg5Free)
						player.money_2 -= upgCost; 
					upg5Manage[x]++;
					update5Upgrade(x);
					fillB5UpgradeText();
				}	
			}
		}
	}
	function update5Upgrade(x){
		$('#b5upg'+(x+1)+'amt').text((upg5Manage[x]-1)+"/"+upg5Amt[x]);
		handleB5Upgrade(x);
		pageRefresh();
	}
	function fillB5UpgradeText(){
		upg5Manage.forEach(function(upg, index){
			$('#b5upg'+(index+1)+'amt').text((upg-1)+"/"+upg5Amt[index]);
		});
	}
	function handleB5Upgrade(x){
		newUpgBought();
		switch(x){
			case 0: reduceMagicBaseCost(); break;
			case 1: upMagicBase(); break;
			case 2: player.magicBonus += 0.15; break;
			case 3: magicDuplicateEnable = true; break;
			case 4: magicTridentGivesGainEnable = true; $('#magicConjureMoney').toggle(); break;
			case 5: reduceTimeTickMagic(); break;
			case 6: reduceMagicScaleCost(); break;
			case 7: magicAlterTimeEnable = true; $('#magicAlterTime').toggle(); break;
			case 8: reduceIceTickMagic(); break;
			case 9: magicIceGainTridentEnable = true; break;
			case 10: magicReduceIceTickEnable = true; break;
		}
		checkMaxUpgrade(5);
	}
	
	function reduceMagicBaseCost(){
		buildings[4].baseCost = Math.round(buildings[4].baseCost * .8);
		buildings[4].cost = Math.round(buildings[4].baseCost * Math.pow(buildings[4].exp,buildings[4].amount));
	}
	function upMagicBase(){
		buildings[4].baseGain += 12;
		player.gain -= Number(buildings[4].currGain);
		buildings[4].currGain = 0;
		buildings[4].currGain = buildings[4].baseGain * buildings[4].amount; 
		player.gain += Number(buildings[4].currGain);
	}
	function reduceIceTickMagic(){
		player.meltTime -= 20;
		if(!upg5Free)
			reduceAllIceTime(20);
	}
	function reduceMagicScaleCost(){
		if(upg5Manage[6] > 1)
			buildings[4].exp = buildings[4].exp / (1-(.002*(upg5Manage[6]-2)));
		buildings[4].exp = Math.round(buildings[4].exp * (1-(.002*(upg5Manage[6]-1)))*10000)/10000;
		if(buildings[4].amount >0)
			buildings[4].cost = Math.round(buildings[4].baseCost * Math.pow(buildings[4].exp,buildings[4].amount));
	}
	function reduceTimeTickMagic(){
		player.updTime = player.updTime - 20;
		checkGarbage(buildings[7].amount);
	}
		
		
	function showGrey5Upg(x){
		x += 1;
		if(upg5Manage[x-1] > 1){
			$('#b5upg'+x).css("background-image", "url(art/B5/upg"+x+".png)");
		}
		else{
			$('#b5upg'+x).css("background-image", "url(art/B5/upg"+x+".1.png)");
		}
	}
	function showColorUpg5(x){
		x += 1;
		$('#b5upg'+x).css("background-image", "url(art/B5/upg"+x+".png)");
	}
	function loadUpg5(upg5List){

		upg5Manage = new Array(11);
		upg5Manage.fill(0);
		upg5Manage[0] = 1;
		upg5Manage[5] = 1;
		upg5Manage[8] = 1;
		upg5Free = true;
		for(var i=0;i<11;i++){
			upg5List[i] -= 1;
			if(upg5List[i] > 0){
				shownUpg5Before = true;
				for(var j=0; j<upg5List[i]; j++){
					buy5Upgrade(i);
				}
			}
			upg5List[i] += 1;
		}
		upg5Free = false;
		showB5Upgrade();
		hideB5Upgrade();
		if(shownUpg5Before){
			canBuyUpgrade = true;
			buyUpg(5);
			buyUpg(5);
		}
	}
	function upg5Complete(){
		totalUpgMax += 1;
		$('#bgBuilding5').css("background-color", "gold");
	}
	
	/*
		1 	Reduces Base cast of Magic
		2	Increases Base Gain of Magic
		3	Increases the Chance to gain Tridents by 20%
		4	When you gain a trident you have a 10% chance to gain another trident
		5	Gaining a trident gives 30% of Magic Base Gain
		6	Reduces the time between ticks by .02 seconds
		7	Increases the chance to gain Tridents by your tick duration
		8	Gaining at least 10 tridents in a tick has a 30% chance to reduce tick duration by .5 seconds for 10 ticks
		9	Reduces the number of ticks for Ice to melt by 40
		10	When an ice cube melts you gain tridents up to 30% of the number of magic you own
		11	When you gain a trident you have a 30% chance to reduce the remaining time on ice by a tick		
	*/