var upg7Manage = new Array(11);
var upg7Amt = [4,2,3,1,1,2,2,1,2,1,1];
var upg7Free = false;
var shownUpg7Before = false;
upg7Manage.fill(0);
upg7Manage[0] = 1;
$('#b7upg1').toggleClass("upgradeBuy");

	function hideB7Upgrade(){
		$('#b7Upgrades:visible').toggle();
		$('#b7upg1').fadeOut('fast');
		$('#b7upg2').fadeOut('fast');
		$('#b7upg3').fadeOut('fast');
		$('#b7upg4').fadeOut('fast');
		$('#b7upg5').fadeOut('fast');
		$('#b7upg6').fadeOut('fast');
		$('#b7upg7').fadeOut('fast');
		$('#b7upg8').fadeOut('fast');
		$('#b7upg9').fadeOut('fast');
		$('#b7upg10').fadeOut('fast');
		$('#b7upg11').fadeOut('fast');

		$('#b7l1').fadeOut('fast');
		$('#b7l2').fadeOut('fast');
		$('#b7l3').fadeOut('fast');
		$('#b7l4').fadeOut('fast');
		$('#b7l5').fadeOut('fast');
		$('#b7l6').fadeOut('fast');
		$('#b7l7').fadeOut('fast');
		$('#b7l8').fadeOut('fast');
		$('#b7l9').fadeOut('fast');
		$('#b7l10').fadeOut('fast');
	}

	function showB7UpgradeSlow(){
		$('#b7Upgrades:hidden').toggle();
		for(var k=0; k<11;k++){
			showGrey7Upg(k);
		}
		$('#buildingUpgrades').css("background-image", "url(art/build7BGUpg.png)");
		
		$('#b7upg1').fadeIn('slow');
		$('#b7upg1amt').fadeIn('slow');
		$('#b7upg2').delay(350).fadeIn('slow');
		$('#b7upg3').delay(650).fadeIn('slow');
		$('#b7upg4').delay(950).fadeIn('slow');
		$('#b7upg5').delay(1250).fadeIn('slow');
		$('#b7upg6').delay(350).fadeIn('slow');
		$('#b7upg7').delay(650).fadeIn('slow');
		$('#b7upg8').delay(950).fadeIn('slow');
		$('#b7upg9').delay(350).fadeIn('slow');
		$('#b7upg10').delay(650).fadeIn('slow');
		$('#b7upg11').delay(950).fadeIn('slow');

		$('#b7l1').delay(350).fadeIn('slow');
		$('#b7l2').delay(650).fadeIn('slow');
		$('#b7l3').delay(950).fadeIn('slow');
		$('#b7l4').delay(1250).fadeIn('slow');
		$('#b7l5').delay(350).fadeIn('slow');
		$('#b7l6').delay(650).fadeIn('slow');
		$('#b7l7').delay(950).fadeIn('slow');
		$('#b7l8').delay(350).fadeIn('slow');
		$('#b7l9').delay(650).fadeIn('slow');
		$('#b7l10').delay(950).fadeIn('slow');

	
		fillB7UpgradeText();
	}
	
	function showB7Upgrade(){
		$('#b7Upgrades:hidden').toggle();
		for(var k=0; k<11;k++){
			showGrey7Upg(k);
		}
		$('#buildingUpgrades').css("background-image", "url(art/build7BGUpg.png)");
			
		$('#b7upg1').fadeIn('fast');
		$('#b7upg1amt').fadeIn('fast');
		$('#b7upg2').fadeIn('fast');
		$('#b7upg3').fadeIn('fast');
		$('#b7upg4').fadeIn('fast');
		$('#b7upg5').fadeIn('fast');
		$('#b7upg6').fadeIn('fast');
		$('#b7upg7').fadeIn('fast');
		$('#b7upg8').fadeIn('fast');
		$('#b7upg9').fadeIn('fast');
		$('#b7upg10').fadeIn('fast');
		$('#b7upg11').fadeIn('fast');

		$('#b7l1').fadeIn('fast');
		$('#b7l2').fadeIn('fast');
		$('#b7l3').fadeIn('fast');
		$('#b7l4').fadeIn('fast');
		$('#b7l5').fadeIn('fast');
		$('#b7l6').fadeIn('fast');
		$('#b7l7').fadeIn('fast');
		$('#b7l8').fadeIn('fast');
		$('#b7l9').fadeIn('fast');
		$('#b7l10').fadeIn('fast');
		
		fillB7UpgradeText();
	}
	
	function buy7Upgrade(x){
		if(upg7Manage[x] > 0 && (player.money_2 > upgCost || upg7Free)){
			if(upg7Manage[x] == 1){
				if(!upg7Free)
					player.money_2 -= upgCost; 
				upg7Manage[x]++;
				switch(x){
					case 0: $('#b7l1').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b7l5').css('background-image','url(art/upgBar4_1.png)'); 
							$('#b7l8').css('background-image','url(art/upgBar4_1.png)'); 
							$('#b7upg2').toggleClass("upgradeBuy");
							$('#b7upg6').toggleClass("upgradeBuy");
							$('#b7upg9').toggleClass("upgradeBuy");
							$('#b7upg2amt').fadeIn('slow');
							$('#b7upg6amt').fadeIn('slow');
							$('#b7upg9amt').fadeIn('slow');
							upg7Manage[1] = 1;
							upg7Manage[5] = 1;
							upg7Manage[8] = 1;
							showColorUpg7(x);
							update7Upgrade(x);
							fillB7UpgradeText();
							break;
					case 1: $('#b7l2').css('background-image','url(art/upgBar2_1.png)'); 
							$('#b7upg3').toggleClass("upgradeBuy");
							$('#b7upg3amt').fadeIn('slow');
							upg7Manage[2] = 1;
							showColorUpg7(x);
							update7Upgrade(x);
							fillB7UpgradeText();
							break;
					case 2: $('#b7l3').css('background-image','url(art/upgBar4_1.png)'); 
							$('#b7upg4').toggleClass("upgradeBuy");
							$('#b7upg4amt').fadeIn('slow');
							upg7Manage[3] = 1;
							showColorUpg7(x);
							update7Upgrade(x);
							fillB7UpgradeText();
							break;
					case 3: $('#b7l4').css('background-image','url(art/upgBar2_1.png)'); 
							$('#b7upg5').toggleClass("upgradeBuy");
							$('#b7upg5amt').fadeIn('slow');
							upg7Manage[4] = 1;
							showColorUpg7(x);
							update7Upgrade(x);
							fillB7UpgradeText();
							break;
					case 4: showColorUpg7(x);
							update7Upgrade(x);
							break;
					case 5:	$('#b7l6').css('background-image','url(art/upgBar4_1.png)'); 
							$('#b7upg7').toggleClass("upgradeBuy");
							$('#b7upg7amt').fadeIn('slow');
							upg7Manage[6] = 1;
							showColorUpg7(x);
							update7Upgrade(x);
							fillB7UpgradeText();
							break;
					case 6: $('#b7l7').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b7upg8').toggleClass("upgradeBuy");
							$('#b7upg8amt').fadeIn('slow');
							upg7Manage[7] = 1;
							showColorUpg7(x);
							update7Upgrade(x);
							fillB7UpgradeText();
							break;
					case 7: showColorUpg7(x);
							update7Upgrade(x);
							break;
					case 8: $('#b7l9').css('background-image','url(art/upgBar2_1.png)'); 
							$('#b7upg10').toggleClass("upgradeBuy");
							$('#b7upg10amt').fadeIn('slow');
							upg7Manage[9] = 1;
							showColorUpg7(x);
							update7Upgrade(x);
							fillB7UpgradeText();
							break;
					case 9: $('#b7l10').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b7upg11').toggleClass("upgradeBuy");
							$('#b7upg11amt').fadeIn('slow');
							upg7Manage[10] = 1;
							showColorUpg7(x);
							update7Upgrade(x);
							fillB7UpgradeText();
							break;
					case 10:showColorUpg7(x);
							update7Upgrade(x);
							break;
				}
			}
			else{
				if((upg7Manage[x]-1) < upg7Amt[x]){
					if(!upg7Free)
						player.money_2 -= upgCost; 
					upg7Manage[x]++;
					update7Upgrade(x);
					fillB7UpgradeText();
				}	
			}
		}
	}
	function update7Upgrade(x){
		$('#b7upg'+(x+1)+'amt').text((upg7Manage[x]-1)+"/"+upg7Amt[x]);
		handleB7Upgrade(x);
		pageRefresh();
	}
	function fillB7UpgradeText(){
		upg7Manage.forEach(function(upg, index){
			$('#b7upg'+(index+1)+'amt').text((upg-1)+"/"+upg7Amt[index]);
		});
	}
	function handleB7Upgrade(x){
		newUpgBought();
		switch(x){
			case 0: upIceBase(); break;
			case 1: reduceIceTickIce(); break;
			case 2: player.meltWorth += 1000; break;
			case 3: player.iceReform = 50; break;
			case 4: player.iceReform = 100; break;
			case 5: reduceTimeTickIce(); break;
			case 6: reduceIceTickIce(); break;
			case 7: reduceIceScaleCost(); break;
			case 8: reduceIceTickIce(); break;
			case 9: unstableIceEnable = true; break;
			case 10: player.iceMeltMoney = 2; break;
		}
		checkMaxUpgrade(7);
	}
	function upIceBase(){
		buildings[6].baseGain += 42;
		player.gain -= Number(buildings[6].currGain);
		buildings[6].currGain = 0;
		buildings[6].currGain = buildings[6].baseGain * buildings[6].amount; 
		player.gain += Number(buildings[6].currGain);
	}
	function reduceIceTickIce(){
		player.meltTime -= 10;
		if(!upg7Free)
			reduceAllIceTime(10);
	}
	function reduceTimeTickIce(){
		player.updTime = player.updTime - 50;
		checkGarbage(buildings[7].amount);
	}
	function reduceIceScaleCost(){
		buildings[6].exp = Math.round(buildings[6].exp * (1-(.1))*10000)/10000;
		if(buildings[6].amount >0)
			buildings[6].cost = Math.round(buildings[6].baseCost * Math.pow(buildings[6].exp,buildings[6].amount));
	}
		
		
	function showGrey7Upg(x){
		x += 1;
		if(upg7Manage[x-1] > 1){
			$('#b7upg'+x).css("background-image", "url(art/B7/upg"+x+".png)");
		}
		else{
			$('#b7upg'+x).css("background-image", "url(art/B7/upg"+x+".1.png)");
		}
	}
	function showColorUpg7(x){
		x += 1;
		$('#b7upg'+x).css("background-image", "url(art/B7/upg"+x+".png)");
	}
	function loadUpg7(upg7List){

		upg7Manage = new Array(11);
		upg7Manage.fill(0);
		upg7Manage[0] = 1;
		upg7Free = true;
		for(var i=0;i<11;i++){
			upg7List[i] -= 1;
			if(upg7List[i] > 0){
				shownUpg7Before = true;
				for(var j=0; j<upg7List[i]; j++){
					buy7Upgrade(i);
				}
			}
			upg7List[i] += 1;
		}
		upg7Free = false;
		showB7Upgrade();
		hideB7Upgrade();
		if(shownUpg7Before){
			canBuyUpgrade = true;
			buyUpg(7);
			buyUpg(7);
		}
	}
	function upg7Complete(){
		totalUpgMax += 1;
		$('#bgBuilding7').css("background-color", "gold");
	}
	
	/*
		1 	Increases the base gain of Ice Cubes
		2	Reduces the number of ticks for Ice Cubes to melt by 25
		3	Increases the amount of money you gain from ice melting
		4	Ice Cubes have a 50% chance to reform when they melt
		5	Ice Cubes always reform when they melt
		6	Reduces time between ticks by .05 seconds
		7	Reduces the number of ticks for Ice Cubes to melt by 25
		8	Reduces the cost scaling of Ice Cubes by 10%
		9	Reduces the number of ticks for Ice Cubes to melt by 25
		10	Ice Cubes with 100 or less Ticks remaining have a 5% chance to instantly melt
		11	Ice Cubes give an extra ☺ when they melt
	*/
