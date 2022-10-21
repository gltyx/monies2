var upg8Manage = new Array(11);
var upg8Amt = [2,1,2,1,4,2,1,2,3,1,1];
var upg8Free = false;
var shownUpg8Before = false;
upg8Manage.fill(0);
upg8Manage[0] = 1;
$('#b8upg1').toggleClass("upgradeBuy");

	function hideB8Upgrade(){
		$('#b8Upgrades:visible').toggle();
		$('#b8upg1').fadeOut('fast');
		$('#b8upg2').fadeOut('fast');
		$('#b8upg3').fadeOut('fast');
		$('#b8upg4').fadeOut('fast');
		$('#b8upg5').fadeOut('fast');
		$('#b8upg6').fadeOut('fast');
		$('#b8upg7').fadeOut('fast');
		$('#b8upg8').fadeOut('fast');
		$('#b8upg9').fadeOut('fast');
		$('#b8upg10').fadeOut('fast');
		$('#b8upg11').fadeOut('fast');

		$('#b8l1').fadeOut('fast');
		$('#b8l2').fadeOut('fast');
		$('#b8l3').fadeOut('fast');
		$('#b8l4').fadeOut('fast');
		$('#b8l5').fadeOut('fast');
		$('#b8l6').fadeOut('fast');
		$('#b8l7').fadeOut('fast');
		$('#b8l8').fadeOut('fast');
		$('#b8l9').fadeOut('fast');
		$('#b8l10').fadeOut('fast');
	}

	function showB8UpgradeSlow(){
		$('#b8Upgrades:hidden').toggle();
		for(var k=0; k<11;k++){
			showGrey8Upg(k);
		}
		$('#buildingUpgrades').css("background-image", "url(art/build8BGUpg.png)");
		
		$('#b8upg1').fadeIn('slow');
		$('#b8upg1amt').fadeIn('slow');
		$('#b8upg2').delay(350).fadeIn('slow');
		$('#b8upg3').delay(650).fadeIn('slow');
		$('#b8upg4').delay(950).fadeIn('slow');
		$('#b8upg5').delay(950).fadeIn('slow');
		$('#b8upg6').delay(350).fadeIn('slow');
		$('#b8upg7').delay(650).fadeIn('slow');
		$('#b8upg8').delay(950).fadeIn('slow');
		$('#b8upg9').delay(650).fadeIn('slow');
		$('#b8upg10').delay(950).fadeIn('slow');
		$('#b8upg11').delay(1250).fadeIn('slow');

		$('#b8l1').delay(350).fadeIn('slow');
		$('#b8l2').delay(650).fadeIn('slow');
		$('#b8l3').delay(950).fadeIn('slow');
		$('#b8l4').delay(950).fadeIn('slow');
		$('#b8l5').delay(350).fadeIn('slow');
		$('#b8l6').delay(650).fadeIn('slow');
		$('#b8l7').delay(950).fadeIn('slow');
		$('#b8l8').delay(650).fadeIn('slow');
		$('#b8l9').delay(950).fadeIn('slow');
		$('#b8l10').delay(1250).fadeIn('slow');

	
		fillB8UpgradeText();
	}
	
	function showB8Upgrade(){
		$('#b8Upgrades:hidden').toggle();
		for(var k=0; k<11;k++){
			showGrey8Upg(k);
		}
		$('#buildingUpgrades').css("background-image", "url(art/build8BGUpg.png)");
			
		$('#b8upg1').fadeIn('fast');
		$('#b8upg1amt').fadeIn('fast');
		$('#b8upg2').fadeIn('fast');
		$('#b8upg3').fadeIn('fast');
		$('#b8upg4').fadeIn('fast');
		$('#b8upg5').fadeIn('fast');
		$('#b8upg6').fadeIn('fast');
		$('#b8upg7').fadeIn('fast');
		$('#b8upg8').fadeIn('fast');
		$('#b8upg9').fadeIn('fast');
		$('#b8upg10').fadeIn('fast');
		$('#b8upg11').fadeIn('fast');

		$('#b8l1').fadeIn('fast');
		$('#b8l2').fadeIn('fast');
		$('#b8l3').fadeIn('fast');
		$('#b8l4').fadeIn('fast');
		$('#b8l5').fadeIn('fast');
		$('#b8l6').fadeIn('fast');
		$('#b8l7').fadeIn('fast');
		$('#b8l8').fadeIn('fast');
		$('#b8l9').fadeIn('fast');
		$('#b8l10').fadeIn('fast');
		
		fillB8UpgradeText();
	}
	
	function buy8Upgrade(x){
		if(upg8Manage[x] > 0 && (player.money_2 > upgCost || upg8Free)){
			if(upg8Manage[x] == 1){
				if(!upg8Free)
					player.money_2 -= upgCost; 
				upg8Manage[x]++;
				switch(x){
					case 0: $('#b8l1').css('background-image','url(art/upgBar4_1.png)'); 
							$('#b8l5').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b8upg2').toggleClass("upgradeBuy");
							$('#b8upg6').toggleClass("upgradeBuy");
							$('#b8upg2amt').fadeIn('slow');
							$('#b8upg6amt').fadeIn('slow');
							upg8Manage[1] = 1;
							upg8Manage[5] = 1;
							showColorUpg8(x);
							update8Upgrade(x);
							fillB8UpgradeText();
							break;
					case 1: $('#b8l2').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b8upg3').toggleClass("upgradeBuy");
							$('#b8upg3amt').fadeIn('slow');
							upg8Manage[2] = 1;
							showColorUpg8(x);
							update8Upgrade(x);
							fillB8UpgradeText();
							break;
					case 2: $('#b8l3').css('background-image','url(art/upgBar1_1.png)'); 
							$('#b8l4').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b8upg4').toggleClass("upgradeBuy");
							$('#b8upg5').toggleClass("upgradeBuy");
							$('#b8upg4amt').fadeIn('slow');
							$('#b8upg5amt').fadeIn('slow');
							upg8Manage[3] = 1;
							upg8Manage[4] = 1;
							showColorUpg8(x);
							update8Upgrade(x);
							fillB8UpgradeText();
							break;
					case 3: showColorUpg8(x);
							update8Upgrade(x);
							break;
					case 4: showColorUpg8(x);
							update8Upgrade(x);
							break;
					case 5:	$('#b8l6').css('background-image','url(art/upgBar4_1.png)'); 
							$('#b8l8').css('background-image','url(art/upgBar4_1.png)'); 
							$('#b8upg7').toggleClass("upgradeBuy");
							$('#b8upg9').toggleClass("upgradeBuy");
							$('#b8upg7amt').fadeIn('slow');
							$('#b8upg9amt').fadeIn('slow');
							upg8Manage[6] = 1;
							upg8Manage[8] = 1;
							showColorUpg8(x);
							update8Upgrade(x);
							fillB8UpgradeText();
							break;
					case 6: $('#b8l7').css('background-image','url(art/upgBar4_1.png)'); 
							$('#b8upg8').toggleClass("upgradeBuy");
							$('#b8upg8amt').fadeIn('slow');
							upg8Manage[7] = 1;
							showColorUpg8(x);
							update8Upgrade(x);
							fillB8UpgradeText();
							break;
					case 7: showColorUpg8(x);
							update8Upgrade(x);
							break;
					case 8: $('#b8l9').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b8upg10').toggleClass("upgradeBuy");
							$('#b8upg10amt').fadeIn('slow');
							upg8Manage[9] = 1;
							showColorUpg8(x);
							update8Upgrade(x);
							fillB8UpgradeText();
							break;
					case 9: $('#b8l10').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b8upg11').toggleClass("upgradeBuy");
							$('#b8upg11amt').fadeIn('slow');
							upg8Manage[10] = 1;
							showColorUpg8(x);
							update8Upgrade(x);
							fillB8UpgradeText();
							break;
					case 10:showColorUpg8(x);
							update8Upgrade(x);
							break;
				}
			}
			else{
				if((upg8Manage[x]-1) < upg8Amt[x]){
					if(!upg8Free)
						player.money_2 -= upgCost; 
					upg8Manage[x]++;
					update8Upgrade(x);
					fillB8UpgradeText();
				}	
			}
		}
	}
	function update8Upgrade(x){
		$('#b8upg'+(x+1)+'amt').text((upg8Manage[x]-1)+"/"+upg8Amt[x]);
		handleB8Upgrade(x);
		pageRefresh();
	}
	function fillB8UpgradeText(){
		upg8Manage.forEach(function(upg, index){
			$('#b8upg'+(index+1)+'amt').text((upg-1)+"/"+upg8Amt[index]);
		});
	}
	function handleB8Upgrade(x){
		newUpgBought();
		switch(x){
			case 0: upGarbageBase(); break;
			case 1: reduceGarbageScalingCost(); break;
			case 2: player.spadeCurrChnc += 10; break;
			case 3: garbageAlwaysSpadeEnable = true; break;
			case 4: reduceGarbageBaseCost(); break;
			case 5: reduceTimeTickGarbage(); break;
			case 6: garbageFourMultEnable = true; checkGarbage(buildings[7].amount); break;
			case 7: garbageGlobalMultBonus += 0.05; checkGarbage(buildings[7].amount); break;
			case 8: player.timeWarpValue -= 0.1; checkGarbage(buildings[7].amount); break;
			case 9: garbageThreeMultEnable = true; checkGarbage(buildings[7].amount); break;
			case 10: garbageFiveMultEnable = true; checkGarbage(buildings[7].amount); break;
		}
		checkMaxUpgrade(8);
	}
	function upGarbageBase(){
		buildings[7].baseGain += 1000;
		player.gain -= Number(buildings[7].currGain);
		buildings[7].currGain = 0;
		buildings[7].currGain = buildings[7].baseGain * buildings[7].amount; 
		player.gain += Number(buildings[7].currGain);
	}
	function reduceGarbageScalingCost(){
		buildings[7].exp = Math.round(buildings[7].exp * (1-(.1*(upg8Manage[1]-1)))*10000)/10000;
		if(buildings[7].amount >0)
			buildings[7].cost = Math.round(buildings[7].baseCost * Math.pow(buildings[7].exp,buildings[7].amount));
	}
	function reduceGarbageBaseCost(){
		buildings[7].baseCost = Math.round(buildings[7].baseCost * .8);
		buildings[7].cost = Math.round(buildings[7].baseCost * Math.pow(buildings[7].exp,buildings[7].amount));
	}
	function reduceTimeTickGarbage(){
		player.updTime = player.updTime - 30;
		checkGarbage(buildings[7].amount);
	}
		
		
	function showGrey8Upg(x){
		x += 1;
		if(upg8Manage[x-1] > 1){
			$('#b8upg'+x).css("background-image", "url(art/B8/upg"+x+".png)");
		}
		else{
			$('#b8upg'+x).css("background-image", "url(art/B8/upg"+x+".1.png)");
		}
	}
	function showColorUpg8(x){
		x += 1;
		$('#b8upg'+x).css("background-image", "url(art/B8/upg"+x+".png)");
	}
	function loadUpg8(upg8List){

		upg8Manage = new Array(11);
		upg8Manage.fill(0);
		upg8Manage[0] = 1;
		upg8Free = true;
		for(var i=0;i<11;i++){
			upg8List[i] -= 1;
			if(upg8List[i] > 0){
				shownUpg8Before = true;
				for(var j=0; j<upg8List[i]; j++){
					buy8Upgrade(i);
				}
			}
			upg8List[i] += 1;
		}
		upg8Free = false;
		showB8Upgrade();
		hideB8Upgrade();
		if(shownUpg8Before){
			canBuyUpgrade = true;
			buyUpg(8);
			buyUpg(8);
		}
	}
	function upg8Complete(){
		totalUpgMax += 1;
		$('#bgBuilding8').css("background-color", "gold");
	}
	
	/*
		1 	Increases the Base Gain of Garbage by 100%
		2	Reduces the Scaling Cost of Garbage by 20%
		3	Increases the Chance for Garabge to give ♠ by 10%
		4	Garbage can now always give ♠
		5	Reduces the base cost of Garbage by 20%
		6	Reduces the time between ticks by .03 seconds
		7	Multiples of 4 Garbage increases all $ earned by 5%
		8	Increases the bonus of Upgrade 7 by 1%
		9	Increases the Time Warp power by 10%
		10	Multiples of 3 Garbage cause every 10 ticks to perform an extra tick
		11	Multiples of 5 Garbage Produce 10x the base gain of garbage
	*/