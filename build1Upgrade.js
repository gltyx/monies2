var upg1Manage = new Array(11);
var upg1Amt = [1,3,1,3,1,1,3,1,3,1,2];
var upg1Free = false;
var shownUpg1Before = false;
upg1Manage.fill(0);
upg1Manage[0] = 1;
$('#b1upg1').toggleClass("upgradeBuy");

	function hideB1Upgrade(){
		$('#b1Upgrades:visible').toggle();
		$('#b1upg1').fadeOut('fast');
		$('#b1upg2').fadeOut('fast');
		$('#b1upg3').fadeOut('fast');
		$('#b1upg4').fadeOut('fast');
		$('#b1upg5').fadeOut('fast');
		$('#b1upg6').fadeOut('fast');
		$('#b1upg7').fadeOut('fast');
		$('#b1upg8').fadeOut('fast');
		$('#b1upg9').fadeOut('fast');
		$('#b1upg10').fadeOut('fast');
		$('#b1upg11').fadeOut('fast');

		$('#b1l1').fadeOut('fast');
		$('#b1l2').fadeOut('fast');
		$('#b1l3').fadeOut('fast');
		$('#b1l4').fadeOut('fast');
		$('#b1l5').fadeOut('fast');
		$('#b1l6').fadeOut('fast');
		$('#b1l7').fadeOut('fast');
		$('#b1l8').fadeOut('fast');
		$('#b1l9').fadeOut('fast');
		$('#b1l10').fadeOut('fast');
	}

	function showB1UpgradeSlow(){
		$('#b1Upgrades:hidden').toggle();
		for(var k=0; k<11;k++){
			showGrey1Upg(k);
		}
		$('#buildingUpgrades').css("background-image", "url(art/build1BGUpg.png)");
		
		$('#b1upg1').fadeIn('slow');
		$('#b1upg1amt').fadeIn('slow');
		$('#b1upg2').delay(350).fadeIn('slow');
		$('#b1upg3').delay(650).fadeIn('slow');
		$('#b1upg4').delay(1250).fadeIn('slow');
		$('#b1upg5').delay(950).fadeIn('slow');
		$('#b1upg6').delay(1550).fadeIn('slow');
		$('#b1upg7').delay(350).fadeIn('slow');
		$('#b1upg8').delay(650).fadeIn('slow');
		$('#b1upg9').delay(650).fadeIn('slow');
		$('#b1upg10').delay(950).fadeIn('slow');
		$('#b1upg11').delay(1250).fadeIn('slow');

		$('#b1l1').delay(350).fadeIn('slow');
		$('#b1l2').delay(650).fadeIn('slow');
		$('#b1l3').delay(950).fadeIn('slow');
		$('#b1l4').delay(950).fadeIn('slow');
		$('#b1l5').delay(350).fadeIn('slow');
		$('#b1l6').delay(1250).fadeIn('slow');
		$('#b1l7').delay(1550).fadeIn('slow');
		$('#b1l8').delay(650).fadeIn('slow');
		$('#b1l9').delay(1250).fadeIn('slow');
		$('#b1l10').delay(650).fadeIn('slow');
	
		fillB1UpgradeText();
	}
	
	function showB1Upgrade(){
		$('#b1Upgrades:hidden').toggle();
		for(var k=0; k<11;k++){
			showGrey1Upg(k);
		}
		$('#buildingUpgrades').css("background-image", "url(art/build1BGUpg.png)");
			
		$('#b1upg1').fadeIn('fast');
		$('#b1upg1amt').fadeIn('fast');
		$('#b1upg2').fadeIn('fast');
		$('#b1upg3').fadeIn('fast');
		$('#b1upg4').fadeIn('fast');
		$('#b1upg5').fadeIn('fast');
		$('#b1upg6').fadeIn('fast');
		$('#b1upg7').fadeIn('fast');
		$('#b1upg8').fadeIn('fast');
		$('#b1upg9').fadeIn('fast');
		$('#b1upg10').fadeIn('fast');
		$('#b1upg11').fadeIn('fast');

		$('#b1l1').fadeIn('fast');
		$('#b1l2').fadeIn('fast');
		$('#b1l3').fadeIn('fast');
		$('#b1l4').fadeIn('fast');
		$('#b1l5').fadeIn('fast');
		$('#b1l6').fadeIn('fast');
		$('#b1l7').fadeIn('fast');
		$('#b1l8').fadeIn('fast');
		$('#b1l9').fadeIn('fast');
		$('#b1l10').fadeIn('fast');
		

		fillB1UpgradeText();
	}
	
	function buy1Upgrade(x){
		if(upg1Manage[x] > 0 && (player.money_2 > upgCost || upg1Free)){
			if(upg1Manage[x] == 1){
				if(!upg1Free)
					player.money_2 -= upgCost; 
				upg1Manage[x]++;
				switch(x){
					case 0: $('#b1l5').css('background-image','url(art/upgBar2_1.png)'); 
							$('#b1l1').css('background-image','url(art/upgBar1_1.png)'); 
							$('#b1upg2').toggleClass("upgradeBuy");
							$('#b1upg7').toggleClass("upgradeBuy");
							$('#b1upg2amt').fadeIn('slow');
							$('#b1upg7amt').fadeIn('slow');
							upg1Manage[1] = 1;
							upg1Manage[6] = 1;
							showColorUpg1(x);
							update1Upgrade(x);
							fillB1UpgradeText();
							break;
					case 1: $('#b1l8').css('background-image','url(art/upgBar4_1.png)'); 
							$('#b1upg3').toggleClass("upgradeBuy");
							$('#b1upg3amt').fadeIn('slow');
							upg1Manage[2] = 1;
							showColorUpg1(x);
							update1Upgrade(x);
							fillB1UpgradeText();
							break;
					case 2: $('#b1l9').css('background-image','url(art/upgBar4_1.png)'); 
							$('#b1l4').css('background-image','url(art/upgBar1_1.png)'); 
							$('#b1upg4').toggleClass("upgradeBuy");
							$('#b1upg5').toggleClass("upgradeBuy");
							$('#b1upg4amt').fadeIn('slow');
							$('#b1upg5amt').fadeIn('slow');
							upg1Manage[3] = 1;
							upg1Manage[4] = 1;
							showColorUpg1(x);
							update1Upgrade(x);
							fillB1UpgradeText();
							break;
					case 3: $('#b1l7').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b1upg6').toggleClass("upgradeBuy");
							$('#b1upg6amt').fadeIn('slow');
							upg1Manage[5] = 1;
							showColorUpg1(x);
							update1Upgrade(x);
							fillB1UpgradeText();
							break;
					case 4: showColorUpg1(x);
							update1Upgrade(x);
							break;
					case 5: showColorUpg1(x);
							update1Upgrade(x);
							break;
					case 6: $('#b1l10').css('background-image','url(art/upgBar4_1.png)'); 
							$('#b1l2').css('background-image','url(art/upgBar1_1.png)'); 
							$('#b1upg8').toggleClass("upgradeBuy");
							$('#b1upg9').toggleClass("upgradeBuy");
							$('#b1upg8amt').fadeIn('slow');
							$('#b1upg9amt').fadeIn('slow');
							upg1Manage[7] = 1;
							upg1Manage[8] = 1;
							showColorUpg1(x);
							update1Upgrade(x);
							fillB1UpgradeText();
							break;
					case 7: showColorUpg1(x);
							update1Upgrade(x);
							break;
					case 8: $('#b1l3').css('background-image','url(art/upgBar1_1.png)'); 
							$('#b1upg10').toggleClass("upgradeBuy");
							$('#b1upg10amt').fadeIn('slow');
							upg1Manage[9] = 1;
							showColorUpg1(x);
							update1Upgrade(x);
							fillB1UpgradeText();
							break;
					case 9: $('#b1l6').css('background-image','url(art/upgBar2_1.png)'); 
							$('#b1upg11').toggleClass("upgradeBuy");
							$('#b1upg11amt').fadeIn('slow');
							upg1Manage[10] = 1;
							showColorUpg1(x);
							update1Upgrade(x);
							fillB1UpgradeText();
							break;
					case 10:showColorUpg1(x); 
							update1Upgrade(x);
							fillB1UpgradeText();
							break;
				}
			}
			else{
				if((upg1Manage[x]-1) < upg1Amt[x]){
					if(!upg1Free)
						player.money_2 -= upgCost; 
					upg1Manage[x]++;
					update1Upgrade(x);
					fillB1UpgradeText();
				}	
			}
		}
	}
	function update1Upgrade(x){
		$('#b1upg'+(x+1)+'amt').text((upg1Manage[x]-1)+"/"+upg1Amt[x]);
		handleB1Upgrade(x);
		pageRefresh();
	}
	function fillB1UpgradeText(){
		upg1Manage.forEach(function(upg, index){
			$('#b1upg'+(index+1)+'amt').text((upg-1)+"/"+upg1Amt[index]);
		});
	}
	function handleB1Upgrade(x){
		newUpgBought();
		switch(x){
			case 0: upShoeBase(); break;
			case 1: reduceShoeCost(); break;
			case 2: reduceSpadeCostShoe(); break;
			case 3: reduceTimeTickShoe(); break;
			case 4: shoeMultiStepEnable = true; $('#shoeMultiStep').toggle(); break;
			case 5: upShoeBase(); break;
			case 6: player.digChnc = Math.round((player.digChnc + 0.5)*100)/100; break;
			case 7: setShoeDigBonus(); break;
			case 8: reduceIceTickShoe(); break;
			case 9: player.runChnc = 5; $('#shoeRunChnc').toggle(); break;
			case 10: player.runChnc += 5;  break;
		}
		checkMaxUpgrade(1);
	}
	
	function upShoeBase(){
		buildings[0].baseGain += 1;
		player.gain -= Number(buildings[0].currGain);
		buildings[0].currGain = 0;
		buildings[0].currGain = buildings[0].baseGain * buildings[0].amount; 
		player.gain += Number(buildings[0].currGain);
	}
	function reduceShoeCost(){
		if(upg1Manage[1] > 1)
			buildings[0].exp = buildings[0].exp / (1-(.002*(upg1Manage[1]-2)));
		buildings[0].exp = Math.round(buildings[0].exp * (1-(.002*(upg1Manage[1]-1)))*10000)/10000;
		if(buildings[0].amount >0)
			buildings[0].cost = Math.round(buildings[0].baseCost * Math.pow(buildings[0].exp,buildings[0].amount));
	}
	function reduceSpadeCostShoe(){
		buildings[1].baseCost = Math.round(buildings[1].baseCost * .95);
		buildings[1].cost = Math.round(buildings[1].baseCost * Math.pow(buildings[1].exp,buildings[1].amount));
	}
	function reduceTimeTickShoe(){
		player.updTime = player.updTime - 10;
		checkGarbage(buildings[7].amount);
	}
	function setShoeDigBonus(){
		allowShoeMulti = true;
		$('#shoeMultVal').toggle();
	}
	function reduceIceTickShoe(){
		player.meltTime -= 15;
		if(!upg1Free)
			reduceAllIceTime(15);
	}
	function showGrey1Upg(x){
		x += 1;
		if(upg1Manage[x-1] > 1){
			$('#b1upg'+x).css("background-image", "url(art/B1/upg"+x+".png)");
		}
		else{
			$('#b1upg'+x).css("background-image", "url(art/B1/upg"+x+".1.png)");
		}
	}
	function showColorUpg1(x){
		x += 1;
		$('#b1upg'+x).css("background-image", "url(art/B1/upg"+x+".png)");
	}
	function loadUpg1(upg1List){
		upg1Manage = new Array(11);
		upg1Manage.fill(0);
		upg1Manage[0] = 1;
		upg1Free = true;
		for(var i=0;i<11;i++){
			upg1List[i] -= 1;
			if(upg1List[i] > 0){
				shownUpg1Before = true;
				for(var j=0; j<upg1List[i]; j++){
					buy1Upgrade(i);
				}
			}
			upg1List[i] += 1;
		}
		upg1Free = false;
		showB1Upgrade();
		hideB1Upgrade();
		if(shownUpg1Before){
			canBuyUpgrade = true;
			buyUpg(1);
			buyUpg(1);
		}
	}
	function upg1Complete(){
		totalUpgMax += 1;
		$('#bgBuilding1').css("background-color", "gold");
	}
	