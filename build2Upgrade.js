var upg2Manage = new Array(11);
var upg2Amt = [1,1,4,3,3,1,1,1,1,1,3];
var upg2Free = false;
var shownUpg2Before = false;
upg2Manage.fill(0);
upg2Manage[0] = 1;
$('#b2upg1').toggleClass("upgradeBuy");

	function hideB2Upgrade(){
		$('#b2Upgrades:visible').toggle();
		$('#b2upg1').fadeOut('fast');
		$('#b2upg2').fadeOut('fast');
		$('#b2upg3').fadeOut('fast');
		$('#b2upg4').fadeOut('fast');
		$('#b2upg5').fadeOut('fast');
		$('#b2upg6').fadeOut('fast');
		$('#b2upg7').fadeOut('fast');
		$('#b2upg8').fadeOut('fast');
		$('#b2upg9').fadeOut('fast');
		$('#b2upg10').fadeOut('fast');
		$('#b2upg11').fadeOut('fast');

		$('#b2l1').fadeOut('fast');
		$('#b2l2').fadeOut('fast');
		$('#b2l3').fadeOut('fast');
		$('#b2l4').fadeOut('fast');
		$('#b2l5').fadeOut('fast');
		$('#b2l6').fadeOut('fast');
		$('#b2l7').fadeOut('fast');
		$('#b2l8').fadeOut('fast');
		$('#b2l9').fadeOut('fast');
		$('#b2l10').fadeOut('fast');
		$('#b2l11').fadeOut('fast');
	}

	function showB2UpgradeSlow(){
		$('#b2Upgrades:hidden').toggle();
		for(var k=0; k<11;k++){
			showGrey2Upg(k);
		}
		$('#buildingUpgrades').css("background-image", "url(art/build2BGUpg.png)");
		
		$('#b2upg1').fadeIn('slow');
		$('#b2upg1amt').fadeIn('slow');
		$('#b2upg2').delay(350).fadeIn('slow');
		$('#b2upg3').delay(950).fadeIn('slow');
		$('#b2upg4').delay(650).fadeIn('slow');
		$('#b2upg5').delay(950).fadeIn('slow');
		$('#b2upg6').delay(1550).fadeIn('slow');
		$('#b2upg7').delay(1850).fadeIn('slow');
		$('#b2upg8').delay(1550).fadeIn('slow');
		$('#b2upg9').delay(1250).fadeIn('slow');
		$('#b2upg10').delay(950).fadeIn('slow');
		$('#b2upg11').delay(650).fadeIn('slow');

		$('#b2l1').delay(350).fadeIn('slow');
		$('#b2l2').delay(950).fadeIn('slow');
		$('#b2l3').delay(950).fadeIn('slow');
		$('#b2l4').delay(1250).fadeIn('slow');
		$('#b2l5').delay(650).fadeIn('slow');
		$('#b2l6').delay(650).fadeIn('slow');
		$('#b2l7').delay(1250).fadeIn('slow');
		$('#b2l8').delay(1550).fadeIn('slow');
		$('#b2l9').delay(950).fadeIn('slow');
		$('#b2l10').delay(1550).fadeIn('slow');
		$('#b2l11').delay(1250).fadeIn('slow');
	
		fillB2UpgradeText();
	}
	
	function showB2Upgrade(){
		$('#b2Upgrades:hidden').toggle();
		for(var k=0; k<11;k++){
			showGrey2Upg(k);
		}
		$('#buildingUpgrades').css("background-image", "url(art/build2BGUpg.png)");
			
		$('#b2upg1').fadeIn('fast');
		$('#b2upg1amt').fadeIn('fast');
		$('#b2upg2').fadeIn('fast');
		$('#b2upg3').fadeIn('fast');
		$('#b2upg4').fadeIn('fast');
		$('#b2upg5').fadeIn('fast');
		$('#b2upg6').fadeIn('fast');
		$('#b2upg7').fadeIn('fast');
		$('#b2upg8').fadeIn('fast');
		$('#b2upg9').fadeIn('fast');
		$('#b2upg10').fadeIn('fast');
		$('#b2upg11').fadeIn('fast');

		$('#b2l1').fadeIn('fast');
		$('#b2l2').fadeIn('fast');
		$('#b2l3').fadeIn('fast');
		$('#b2l4').fadeIn('fast');
		$('#b2l5').fadeIn('fast');
		$('#b2l6').fadeIn('fast');
		$('#b2l7').fadeIn('fast');
		$('#b2l8').fadeIn('fast');
		$('#b2l9').fadeIn('fast');
		$('#b2l10').fadeIn('fast');
		$('#b2l11').fadeIn('fast');
		

		fillB2UpgradeText();
	}
	
	function buy2Upgrade(x){
		if(upg2Manage[x] > 0 && (player.money_2 > upgCost || upg2Free)){
			if(upg2Manage[x] == 1){
				if(!upg2Free)
					player.money_2 -= upgCost; 
				upg2Manage[x]++;
				switch(x){
					case 0: $('#b2l1').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b2upg2').toggleClass("upgradeBuy");
							$('#b2upg2amt').fadeIn('slow');
							upg2Manage[1] = 1;
							showColorUpg2(x);
							update2Upgrade(x);
							fillB2UpgradeText();
							break;
					case 1: $('#b2l2').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b2l5').css('background-image','url(art/upgBar4_1.png)'); 
							$('#b2l6').css('background-image','url(art/upgBar4_1.png)'); 
							$('#b2upg3').toggleClass("upgradeBuy");
							$('#b2upg4').toggleClass("upgradeBuy");
							$('#b2upg11').toggleClass("upgradeBuy");
							$('#b2upg3amt').fadeIn('slow');
							$('#b2upg4amt').fadeIn('slow');
							$('#b2upg11amt').fadeIn('slow');
							upg2Manage[2] = 1;
							upg2Manage[3] = 1;
							upg2Manage[10] = 1;
							showColorUpg2(x);
							update2Upgrade(x);
							fillB2UpgradeText();
							break;
					case 2: showColorUpg2(x);
							update2Upgrade(x);
							break;
					case 3: $('#b2l3').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b2upg5').toggleClass("upgradeBuy");
							$('#b2upg5amt').fadeIn('slow');
							if(upg2Manage[4] < 1)
								upg2Manage[4] = 1;
							showColorUpg2(x);
							update2Upgrade(x);
							fillB2UpgradeText();
							break;
					case 4: $('#b2l7').css('background-image','url(art/upgBar2_1.png)');
							$('#b2l3').css('background-image','url(art/upgBar3_1.png)');
							
							if(!$('#b2upg4').hasClass("upgradeBuy"))
								$('#b2upg4').toggleClass("upgradeBuy");
							if(!$('#b2upg6').hasClass("upgradeBuy"))
								$('#b2upg6').toggleClass("upgradeBuy");
							
							if(upg2Manage[3] < 1)
								upg2Manage[3] = 1;
							if(upg2Manage[5] < 1)
								upg2Manage[5] = 1;
							
							$('#b2upg6amt').fadeIn('slow');
							$('#b2upg4amt').fadeIn('slow');
							
							showColorUpg2(x);
							update2Upgrade(x);
							fillB2UpgradeText();
							break;
					case 5: $('#b2l7').css('background-image','url(art/upgBar2_1.png)');
							$('#b2l8').css('background-image','url(art/upgBar2_1.png)');
							
							if(!$('#b2upg5').hasClass("upgradeBuy"))
								$('#b2upg5').toggleClass("upgradeBuy");
							if(!$('#b2upg7').hasClass("upgradeBuy"))
								$('#b2upg7').toggleClass("upgradeBuy");
							
							if(upg2Manage[4] < 1)
								upg2Manage[4] = 1;
							if(upg2Manage[6] < 1)
								upg2Manage[6] = 1;
							
							$('#b2upg5amt').fadeIn('slow');
							$('#b2upg7amt').fadeIn('slow');
							showColorUpg2(x);
							update2Upgrade(x);
							fillB2UpgradeText();
							break;
					case 6: $('#b2l10').css('background-image','url(art/upgBar1_1.png)');
							$('#b2l8').css('background-image','url(art/upgBar2_1.png)');
							
							if(!$('#b2upg6').hasClass("upgradeBuy"))
								$('#b2upg6').toggleClass("upgradeBuy");
							if(!$('#b2upg8').hasClass("upgradeBuy"))
								$('#b2upg8').toggleClass("upgradeBuy");
							
							if(upg2Manage[5] < 1)
								upg2Manage[5] = 1;
							if(upg2Manage[7] < 1)
								upg2Manage[7] = 1;
							
							$('#b2upg6amt').fadeIn('slow');
							$('#b2upg8amt').fadeIn('slow');
							showColorUpg2(x);
							update2Upgrade(x);
							fillB2UpgradeText();
							break;
					case 7: $('#b2l10').css('background-image','url(art/upgBar1_1.png)');
							$('#b2l11').css('background-image','url(art/upgBar1_1.png)');
							
							if(!$('#b2upg7').hasClass("upgradeBuy"))
								$('#b2upg7').toggleClass("upgradeBuy");
							if(!$('#b2upg9').hasClass("upgradeBuy"))
								$('#b2upg9').toggleClass("upgradeBuy");
							
							if(upg2Manage[6] < 1)
								upg2Manage[6] = 1;
							if(upg2Manage[8] < 1)
								upg2Manage[8] = 1;
							
							$('#b2upg7amt').fadeIn('slow');
							$('#b2upg9amt').fadeIn('slow');
							showColorUpg2(x);
							update2Upgrade(x);
							fillB2UpgradeText();
							break;
					case 8: $('#b2l11').css('background-image','url(art/upgBar1_1.png)');
							$('#b2l4').css('background-image','url(art/upgBar3_1.png)');
							
							if(!$('#b2upg8').hasClass("upgradeBuy"))
								$('#b2upg8').toggleClass("upgradeBuy");
							if(!$('#b2upg10').hasClass("upgradeBuy"))
								$('#b2upg10').toggleClass("upgradeBuy");
							
							if(upg2Manage[7] < 1)
								upg2Manage[7] = 1;
							if(upg2Manage[9] < 1)
								upg2Manage[9] = 1;
							
							$('#b2upg8amt').fadeIn('slow');
							$('#b2upg10amt').fadeIn('slow');
							showColorUpg2(x);
							update2Upgrade(x);
							fillB2UpgradeText();
							break;
					case 9: $('#b2l9').css('background-image','url(art/upgBar2_1.png)');
							$('#b2l4').css('background-image','url(art/upgBar3_1.png)');
							
							if(!$('#b2upg9').hasClass("upgradeBuy"))
								$('#b2upg9').toggleClass("upgradeBuy");
							if(!$('#b2upg11').hasClass("upgradeBuy"))
								$('#b2upg11').toggleClass("upgradeBuy");
							
							if(upg2Manage[8] < 1)
								upg2Manage[8] = 1;
							if(upg2Manage[10] < 1)
								upg2Manage[10] = 1;
							
							$('#b2upg9amt').fadeIn('slow');
							$('#b2upg11amt').fadeIn('slow');
							showColorUpg2(x);
							update2Upgrade(x);
							fillB2UpgradeText();
							break;
					case 10:$('#b2l9').css('background-image','url(art/upgBar2_1.png)'); 
							$('#b2upg10').toggleClass("upgradeBuy");
							$('#b2upg10amt').fadeIn('slow');
							if(upg2Manage[9] < 1)
								upg2Manage[9] = 1;
							showColorUpg2(x);
							update2Upgrade(x);
							fillB2UpgradeText();
							break;
				}
			}
			else{
				if((upg2Manage[x]-1) < upg2Amt[x]){
					if(!upg2Free)
						player.money_2 -= upgCost; 
					upg2Manage[x]++;
					update2Upgrade(x);
					fillB2UpgradeText();
				}	
			}
		}
	}
	function update2Upgrade(x){
		$('#b2upg'+(x+1)+'amt').text((upg2Manage[x]-1)+"/"+upg2Amt[x]);
		handleB2Upgrade(x);
		pageRefresh();
	}
	function fillB2UpgradeText(){
		upg2Manage.forEach(function(upg, index){
			$('#b2upg'+(index+1)+'amt').text((upg-1)+"/"+upg2Amt[index]);
		});
	}
	function handleB2Upgrade(x){
		newUpgBought();
		switch(x){
			case 0: upSpadeBase(); break;
			case 1: player.multCritValue = 1.10; break;
			case 2: player.multCritValue += 0.05; break;
			case 3: reduceSpadeCost(); break;
			case 4: player.multCritReduc = Math.round((player.multCritReduc - 0.07)*100)/100; break;
			case 5: player.digShoeWorth = 1.5; break;
			case 6: allowDigMulti = true; break;
			case 7: reduceIceTickSpade(); break;
			case 8: enableBladedShoes(); break;
			case 9: enableBuildMultCrit(); break;
			case 10: player.digChnc = Math.round((player.digChnc + 2)*100)/100; break;
		}
		checkMaxUpgrade(2);
	}
	
	function upSpadeBase(){
		buildings[1].baseGain += 8;
		player.gain -= Number(buildings[1].currGain);
		buildings[1].currGain = 0;
		buildings[1].currGain = buildings[1].baseGain * buildings[1].amount; 
		player.gain += Number(buildings[1].currGain);
	}
	function reduceSpadeCost(){
		if(upg2Manage[3] > 1)
			buildings[1].exp = buildings[1].exp / (1-(.002*(upg2Manage[3]-2)));
		buildings[1].exp = Math.round(buildings[1].exp * (1-(.002*(upg2Manage[3]-1)))*10000)/10000;
		if(buildings[1].amount >0)
			buildings[1].cost = Math.round(buildings[1].baseCost * Math.pow(buildings[1].exp,buildings[1].amount));
	}
	function reduceIceTickSpade(){
		fireSpade = true;
	}
	function enableBladedShoes(){
		player.digChnc += Math.floor(buildings[0].amount / 25);
		bladedShoes = true;
	}
	function enableBuildMultCrit(){
		weightOfMany = true;
		player.digMlt += Math.round((0.1 * buildings[0].amount)*100)/100;
		player.digMlt += Math.round((0.1 * buildings[2].amount)*100)/100;
		player.digMlt += Math.round((0.1 * buildings[3].amount)*100)/100;
		player.digMlt += Math.round((0.1 * buildings[4].amount)*100)/100;
		player.digMlt += Math.round((0.1 * buildings[5].amount)*100)/100;
		player.digMlt += Math.round((0.1 * buildings[6].amount)*100)/100;
		player.digMlt += Math.round((0.1 * buildings[7].amount)*100)/100;
		player.digMlt = Math.round(player.digMlt*100)/100;
	}
	/* upgrade functions
	
	*/
	
	
	function showGrey2Upg(x){
		x += 1;
		if(upg2Manage[x-1] > 1){
			$('#b2upg'+x).css("background-image", "url(art/B2/upg"+x+".png)");
		}
		else{
			$('#b2upg'+x).css("background-image", "url(art/B2/upg"+x+".1.png)");
		}
	}
	function showColorUpg2(x){
		x += 1;
		$('#b2upg'+x).css("background-image", "url(art/B2/upg"+x+".png)");
	}
	function loadUpg2(upg2List){

		upg2Manage = new Array(11);
		upg2Manage.fill(0);
		upg2Manage[0] = 1;
		upg2Free = true;
		for(var i=0;i<11;i++){
			upg2List[i] -= 1;
			if(upg2List[i] > 0){
				shownUpg2Before = true;
				if(upg2Manage[i] == 0)
					upg2Manage[i] = 1;
				for(var j=0; j<upg2List[i]; j++){
					buy2Upgrade(i);
				}
			}
			upg2List[i] += 1;
		}
		upg2Free = false;
		showB2Upgrade();
		hideB2Upgrade();
		if(shownUpg2Before){
			canBuyUpgrade = true;
			buyUpg(2);
			buyUpg(2);
		}
	}
	function upg2Complete(){
		totalUpgMax += 1;
		$('#bgBuilding2').css("background-color", "gold");
	}
	
	/*
		1 	base income increase by 8
		2	reduce spade cost multiplier
		3	increase dig multiplier per building bought
		4	reduce multiple dig penalty (increase chance for multiple digs)
		5	increase dig chance
		6	reduce ice time
		7	getting a x5+ dig doubles dig multiplier for next tick
		8	Digs now use 150% of shoes value
		9	every 20 shoes gives 1% crit
		10	Consecutive digs in the same tick are now 10% stronger per dig 
		11	Bonus from Consecutive digs is increased by 5%	
	*/
