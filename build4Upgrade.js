var upg4Manage = new Array(11);
var upg4Amt = [1,3,3,1,1,2,2,1,2,1,3];
var upg4Free = false;
var shownUpg4Before = false;
upg4Manage.fill(0);
upg4Manage[0] = 1;
$('#b4upg1').toggleClass("upgradeBuy");

	function hideB4Upgrade(){
		$('#b4Upgrades:visible').toggle();
		$('#b4upg1').fadeOut('fast');
		$('#b4upg2').fadeOut('fast');
		$('#b4upg3').fadeOut('fast');
		$('#b4upg4').fadeOut('fast');
		$('#b4upg5').fadeOut('fast');
		$('#b4upg6').fadeOut('fast');
		$('#b4upg7').fadeOut('fast');
		$('#b4upg8').fadeOut('fast');
		$('#b4upg9').fadeOut('fast');
		$('#b4upg10').fadeOut('fast');
		$('#b4upg11').fadeOut('fast');

		$('#b4l1').fadeOut('fast');
		$('#b4l2').fadeOut('fast');
		$('#b4l3').fadeOut('fast');
		$('#b4l4').fadeOut('fast');
		$('#b4l5').fadeOut('fast');
		$('#b4l6').fadeOut('fast');
		$('#b4l7').fadeOut('fast');
		$('#b4l8').fadeOut('fast');
		$('#b4l9').fadeOut('fast');
		$('#b4l10').fadeOut('fast');
	}

	function showB4UpgradeSlow(){
		$('#b4Upgrades:hidden').toggle();
		for(var k=0; k<11;k++){
			showGrey4Upg(k);
		}
		$('#buildingUpgrades').css("background-image", "url(art/build4BGUpg.png)");
		
		$('#b4upg1').fadeIn('slow');
		$('#b4upg1amt').fadeIn('slow');
		$('#b4upg2').delay(350).fadeIn('slow');
		$('#b4upg3').delay(650).fadeIn('slow');
		$('#b4upg4').delay(950).fadeIn('slow');
		$('#b4upg5').delay(1250).fadeIn('slow');
		$('#b4upg6').delay(1550).fadeIn('slow');
		$('#b4upg7').delay(350).fadeIn('slow');
		$('#b4upg8').delay(650).fadeIn('slow');
		$('#b4upg9').delay(950).fadeIn('slow');
		$('#b4upg10').delay(1250).fadeIn('slow');
		$('#b4upg11').delay(1550).fadeIn('slow');

		$('#b4l1').delay(350).fadeIn('slow');
		$('#b4l2').delay(650).fadeIn('slow');
		$('#b4l3').delay(950).fadeIn('slow');
		$('#b4l4').delay(1250).fadeIn('slow');
		$('#b4l5').delay(1550).fadeIn('slow');
		$('#b4l6').delay(350).fadeIn('slow');
		$('#b4l7').delay(650).fadeIn('slow');
		$('#b4l8').delay(950).fadeIn('slow');
		$('#b4l9').delay(1250).fadeIn('slow');
		$('#b4l10').delay(1550).fadeIn('slow');

	
		fillB4UpgradeText();
	}
	
	function showB4Upgrade(){
		$('#b4Upgrades:hidden').toggle();
		for(var k=0; k<11;k++){
			showGrey4Upg(k);
		}
		$('#buildingUpgrades').css("background-image", "url(art/build4BGUpg.png)");
			
		$('#b4upg1').fadeIn('fast');
		$('#b4upg1amt').fadeIn('fast');
		$('#b4upg2').fadeIn('fast');
		$('#b4upg3').fadeIn('fast');
		$('#b4upg4').fadeIn('fast');
		$('#b4upg5').fadeIn('fast');
		$('#b4upg6').fadeIn('fast');
		$('#b4upg7').fadeIn('fast');
		$('#b4upg8').fadeIn('fast');
		$('#b4upg9').fadeIn('fast');
		$('#b4upg10').fadeIn('fast');
		$('#b4upg11').fadeIn('fast');

		$('#b4l1').fadeIn('fast');
		$('#b4l2').fadeIn('fast');
		$('#b4l3').fadeIn('fast');
		$('#b4l4').fadeIn('fast');
		$('#b4l5').fadeIn('fast');
		$('#b4l6').fadeIn('fast');
		$('#b4l7').fadeIn('fast');
		$('#b4l8').fadeIn('fast');
		$('#b4l9').fadeIn('fast');
		$('#b4l10').fadeIn('fast');

		fillB4UpgradeText();
	}
	
	function buy4Upgrade(x){
		if(upg4Manage[x] > 0 && (player.money_2 > upgCost || upg4Free)){
			if(upg4Manage[x] == 1){
				if(!upg4Free)
					player.money_2 -= upgCost; 
				upg4Manage[x]++;
				switch(x){
					case 0: $('#b4l1').css('background-image','url(art/upgBar2_1.png)'); 
							$('#b4l6').css('background-image','url(art/upgBar1_1.png)'); 
							$('#b4upg2').toggleClass("upgradeBuy");
							$('#b4upg7').toggleClass("upgradeBuy");
							$('#b4upg2amt').fadeIn('slow');
							$('#b4upg7amt').fadeIn('slow');
							upg4Manage[1] = 1;
							upg4Manage[6] = 1;
							showColorUpg4(x);
							update4Upgrade(x);
							fillB4UpgradeText();
							break;
					case 1: $('#b4l2').css('background-image','url(art/upgBar2_1.png)'); 
							$('#b4upg3').toggleClass("upgradeBuy");
							$('#b4upg3amt').fadeIn('slow');
							upg4Manage[2] = 1;
							showColorUpg4(x);
							update4Upgrade(x);
							fillB4UpgradeText();
							break;
					case 2: $('#b4l3').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b4upg4').toggleClass("upgradeBuy");
							$('#b4upg4amt').fadeIn('slow');
							upg4Manage[3] = 1;
							showColorUpg4(x);
							update4Upgrade(x);
							fillB4UpgradeText();
							break;
					case 3: $('#b4l4').css('background-image','url(art/upgBar1_1.png)'); 
							$('#b4upg5').toggleClass("upgradeBuy");
							$('#b4upg5amt').fadeIn('slow');
							upg4Manage[4] = 1;
							showColorUpg4(x);
							update4Upgrade(x);
							fillB4UpgradeText();
							break;
					case 4: $('#b4l5').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b4upg6').toggleClass("upgradeBuy");
							$('#b4upg6amt').fadeIn('slow');
							upg4Manage[5] = 1;
							showColorUpg4(x);
							update4Upgrade(x);
							fillB4UpgradeText();
							break;
					case 5:	showColorUpg4(x);
							update4Upgrade(x);
							break;
					case 6: $('#b4l7').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b4upg8').toggleClass("upgradeBuy");
							$('#b4upg8amt').fadeIn('slow');
							upg4Manage[7] = 1;
							showColorUpg4(x);
							update4Upgrade(x);
							fillB4UpgradeText();
							break;
					case 7: $('#b4l8').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b4upg9').toggleClass("upgradeBuy");
							$('#b4upg9amt').fadeIn('slow');
							upg4Manage[8] = 1;
							showColorUpg4(x);
							update4Upgrade(x);
							fillB4UpgradeText();
							break;
					case 8: $('#b4l9').css('background-image','url(art/upgBar2_1.png)'); 
							$('#b4upg10').toggleClass("upgradeBuy");
							$('#b4upg10amt').fadeIn('slow');
							upg4Manage[9] = 1;
							showColorUpg4(x);
							update4Upgrade(x);
							fillB4UpgradeText();
							break;
					case 9: $('#b4l10').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b4upg11').toggleClass("upgradeBuy");
							$('#b4upg11amt').fadeIn('slow');
							upg4Manage[10] = 1;
							showColorUpg4(x);
							update4Upgrade(x);
							fillB4UpgradeText();
							break;
					case 10:showColorUpg4(x);
							update4Upgrade(x);
							break;
				}
			}
			else{
				if((upg4Manage[x]-1) < upg4Amt[x]){
					if(!upg4Free)
						player.money_2 -= upgCost; 
					upg4Manage[x]++;
					update4Upgrade(x);
					fillB4UpgradeText();
				}	
			}
		}
	}
	function update4Upgrade(x){
		$('#b4upg'+(x+1)+'amt').text((upg4Manage[x]-1)+"/"+upg4Amt[x]);
		handleB4Upgrade(x);
		pageRefresh();
	}
	function fillB4UpgradeText(){
		upg4Manage.forEach(function(upg, index){
			$('#b4upg'+(index+1)+'amt').text((upg-1)+"/"+upg4Amt[index]);
		});
	}
	function handleB4Upgrade(x){
		newUpgBought();
		switch(x){
			case 0: increaseShipScaling(); break;
			case 1: reduceIceTickShip(); break;
			case 2: reduceTimeTickShip(); break;
			case 3: increaseShipBase(); break;
			case 4: overdriveEnable = true; $('#shipLiftoffCounter').toggle(); $('#shipLiftoffDuration').toggle(); break;
			case 5: player.fireShipChnc += 25; break;
			case 6: reduceShipScalingCost(); break;
			case 7: enableSpareParts(); break;
			case 8: reduceShipCost(); break;
			case 9: rocketFuelEnable = true; $('#shipRocketFuelPercent').toggle(); break;
			case 10: rocketFuelMax -= .1; break;
		}
		checkMaxUpgrade(4);
	}
		
	function increaseShipScaling(){
		player.shipMlt = Math.round((player.shipMlt * 1.01)*100)/100;
		player.gain -= buildings[3].currGain;
		player.gain += calcShipTotalValue(buildings[3].amount);
	}
	function reduceIceTickShip(){
		player.meltTime -= 15;
		if(!upg4Free)
			reduceAllIceTime(15);
	}
	function reduceTimeTickShip(){
		player.updTime = player.updTime - 100;
		checkGarbage(buildings[7].amount);
	}	
	function increaseShipBase(){
		player.shipBaseGain += 25;
		player.gain -= buildings[3].currGain;
		player.gain += calcShipTotalValue(buildings[3].amount);
	}
	function reduceShipScalingCost(){
		if(upg4Manage[6] > 1)
			buildings[3].exp = buildings[3].exp / (1-(.005*(upg4Manage[6]-2)));
		buildings[3].exp = Math.round(buildings[3].exp * (1-(.005*(upg4Manage[6]-1)))*10000)/10000;
		if(buildings[3].amount >0)
			buildings[3].cost = Math.round(buildings[3].baseCost * Math.pow(buildings[3].exp,(buildings[3].amount-player.freeShips)));
	}
	function reduceShipCost(){
		buildings[3].baseCost -= 500;
		if(buildings[3].amount >0)
			buildings[3].cost = Math.round(buildings[3].baseCost * Math.pow(buildings[3].exp,(buildings[3].amount-player.freeShips)));
	}
	function enableSpareParts(){
		sparePartsEnabled = true;
		buildingFree = true;
		var freeShips = Math.floor(buildings[3].amount / 10);
		player.freeShips = freeShips;
		for(var x=0; x<freeShips; x++){
			buy(4);
		}
		buildingFree = false;
	}
		
		
		
	function showGrey4Upg(x){
		x += 1;
		if(upg4Manage[x-1] > 1){
			$('#b4upg'+x).css("background-image", "url(art/B4/upg"+x+".png)");
		}
		else{
			$('#b4upg'+x).css("background-image", "url(art/B4/upg"+x+".1.png)");
		}
	}
	function showColorUpg4(x){
		x += 1;
		$('#b4upg'+x).css("background-image", "url(art/B4/upg"+x+".png)");
	}
	function loadUpg4(upg4List){

		upg4Manage = new Array(11);
		upg4Manage.fill(0);
		upg4Manage[0] = 1;
		upg4Free = true;
		for(var i=0;i<11;i++){
			upg4List[i] -= 1;
			if(upg4List[i] > 0){
				shownUpg4Before = true;
				for(var j=0; j<upg4List[i]; j++){
					buy4Upgrade(i);
				}
			}
			upg4List[i] += 1;
		}
		upg4Free = false;
		showB4Upgrade();
		hideB4Upgrade();
		if(shownUpg4Before){
			canBuyUpgrade = true;
			buyUpg(4);
			buyUpg(4);
		}
	}
	function upg4Complete(){
		totalUpgMax += 1;
		$('#bgBuilding4').css("background-color", "gold");
	}
	
	/*
		1 	Increases ship scaling gain by 5%
		2	Reduces ice melt time
		3	Reduces time between ticks
		4	Increases base production of ships
		5	Every 50 ticks spaceships give % production based on ships owned for 10 ticks
		6	Reduces overdrive bonus wait to 30 ticks
		7	Reduces ship cost mult by 10%
		8	Garbage reduces the cost of spaceships
		9	Reduces base cost of ships by 1000
		10	Ships build up rocket fuel overtime. Reducing the cost of spaceships by up to 25%. Buying a spaceship consumes all rocket fuel
		11	Increases the discount of rocket fuel to 50%
	*/