var upg6Manage = new Array(11);
var upg6Amt = [1,3,3,1,3,3,1,1,2,1,1];
var upg6Free = false;
var shownUpg6Before = false;
upg6Manage.fill(0);
upg6Manage[0] = 1;
upg6Manage[8] = 1;
$('#b6upg1').toggleClass("upgradeBuy");
$('#b6upg9').toggleClass("upgradeBuy");

	function hideB6Upgrade(){
		$('#b6Upgrades:visible').toggle();
		$('#b6upg1').fadeOut('fast');
		$('#b6upg2').fadeOut('fast');
		$('#b6upg3').fadeOut('fast');
		$('#b6upg4').fadeOut('fast');
		$('#b6upg5').fadeOut('fast');
		$('#b6upg6').fadeOut('fast');
		$('#b6upg7').fadeOut('fast');
		$('#b6upg8').fadeOut('fast');
		$('#b6upg9').fadeOut('fast');
		$('#b6upg10').fadeOut('fast');
		$('#b6upg11').fadeOut('fast');

		$('#b6l1').fadeOut('fast');
		$('#b6l2').fadeOut('fast');
		$('#b6l3').fadeOut('fast');
		$('#b6l4').fadeOut('fast');
		$('#b6l5').fadeOut('fast');
		$('#b6l6').fadeOut('fast');
		$('#b6l7').fadeOut('fast');
		$('#b6l8').fadeOut('fast');
		$('#b6l9').fadeOut('fast');
	}

	function showB6UpgradeSlow(){
		$('#b6Upgrades:hidden').toggle();
		for(var k=0; k<11;k++){
			showGrey6Upg(k);
		}
		$('#buildingUpgrades').css("background-image", "url(art/build6BGUpg.png)");
		
		$('#b6upg1').fadeIn('slow');
		$('#b6upg1amt').fadeIn('slow');
		$('#b6upg2').delay(350).fadeIn('slow');
		$('#b6upg3').delay(950).fadeIn('slow');
		$('#b6upg4').delay(650).fadeIn('slow');
		$('#b6upg5').delay(950).fadeIn('slow');
		$('#b6upg6').delay(350).fadeIn('slow');
		$('#b6upg7').delay(650).fadeIn('slow');
		$('#b6upg8').delay(950).fadeIn('slow');
		$('#b6upg9').fadeIn('slow');
		$('#b6upg9amt').fadeIn('slow');
		$('#b6upg10').delay(350).fadeIn('slow');
		$('#b6upg11').delay(650).fadeIn('slow');

		$('#b6l1').delay(350).fadeIn('slow');
		$('#b6l2').delay(650).fadeIn('slow');
		$('#b6l3').delay(950).fadeIn('slow');
		$('#b6l4').delay(950).fadeIn('slow');
		$('#b6l5').delay(350).fadeIn('slow');
		$('#b6l6').delay(650).fadeIn('slow');
		$('#b6l7').delay(950).fadeIn('slow');
		$('#b6l8').delay(350).fadeIn('slow');
		$('#b6l9').delay(650).fadeIn('slow');

	
		fillB6UpgradeText();
	}
	
	function showB6Upgrade(){
		$('#b6Upgrades:hidden').toggle();
		for(var k=0; k<11;k++){
			showGrey6Upg(k);
		}
		$('#buildingUpgrades').css("background-image", "url(art/build6BGUpg.png)");
			
		$('#b6upg1').fadeIn('fast');
		$('#b6upg1amt').fadeIn('fast');
		$('#b6upg2').fadeIn('fast');
		$('#b6upg3').fadeIn('fast');
		$('#b6upg4').fadeIn('fast');
		$('#b6upg5').fadeIn('fast');
		$('#b6upg6').fadeIn('fast');
		$('#b6upg7').fadeIn('fast');
		$('#b6upg8').fadeIn('fast');
		$('#b6upg9').fadeIn('fast');
		$('#b6upg9amt').fadeIn('fast');
		$('#b6upg10').fadeIn('fast');
		$('#b6upg11').fadeIn('fast');

		$('#b6l1').fadeIn('fast');
		$('#b6l2').fadeIn('fast');
		$('#b6l3').fadeIn('fast');
		$('#b6l4').fadeIn('fast');
		$('#b6l5').fadeIn('fast');
		$('#b6l6').fadeIn('fast');
		$('#b6l7').fadeIn('fast');
		$('#b6l8').fadeIn('fast');
		$('#b6l9').fadeIn('fast');

		fillB6UpgradeText();
	}
	
	function buy6Upgrade(x){
		if(upg6Manage[x] > 0 && (player.money_2 > upgCost || upg6Free)){
			if(upg6Manage[x] == 1){
				if(!upg6Free)
					player.money_2 -= upgCost; 
				upg6Manage[x]++;
				switch(x){
					case 0: $('#b6l1').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b6upg2').toggleClass("upgradeBuy");
							$('#b6upg2amt').fadeIn('slow');
							$('#b6l5').css('background-image','url(art/upgBar1_1.png)'); 
							$('#b6upg6').toggleClass("upgradeBuy");
							$('#b6upg6amt').fadeIn('slow');
							upg6Manage[1] = 1;
							upg6Manage[5] = 1;
							showColorUpg6(x);
							update6Upgrade(x);
							fillB6UpgradeText();
							break;
					case 1: $('#b6l2').css('background-image','url(art/upgBar1_1.png)'); 
							$('#b6upg3').toggleClass("upgradeBuy");
							$('#b6upg3amt').fadeIn('slow');
							upg6Manage[2] = 1;
							showColorUpg6(x);
							update6Upgrade(x);
							fillB6UpgradeText();
							break;
					case 2: $('#b6l3').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b6l4').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b6upg4').toggleClass("upgradeBuy");
							$('#b6upg5').toggleClass("upgradeBuy");
							$('#b6upg4amt').fadeIn('slow');
							$('#b6upg5amt').fadeIn('slow');
							upg6Manage[3] = 1;
							upg6Manage[4] = 1;
							showColorUpg6(x);
							update6Upgrade(x);
							fillB6UpgradeText();
							break;
					case 3: showColorUpg6(x);
							update6Upgrade(x);
							break;
					case 4: showColorUpg6(x);
							update6Upgrade(x);
							break;
					case 5:	$('#b6l6').css('background-image','url(art/upgBar4_1.png)'); 
							$('#b6upg7').toggleClass("upgradeBuy");
							$('#b6upg7amt').fadeIn('slow');
							upg6Manage[6] = 1;
							showColorUpg6(x);
							update6Upgrade(x);
							fillB6UpgradeText();
							break;
					case 6: $('#b6l7').css('background-image','url(art/upgBar1_1.png)'); 
							$('#b6upg8').toggleClass("upgradeBuy");
							$('#b6upg8amt').fadeIn('slow');
							upg6Manage[7] = 1;
							showColorUpg6(x);
							update6Upgrade(x);
							fillB6UpgradeText();
							break;
					case 7: showColorUpg6(x);
							update6Upgrade(x);
							break;
					case 8: $('#b6l8').css('background-image','url(art/upgBar2_1.png)'); 
							$('#b6upg10').toggleClass("upgradeBuy");
							$('#b6upg10amt').fadeIn('slow');
							upg6Manage[9] = 1;
							showColorUpg6(x);
							update6Upgrade(x);
							fillB6UpgradeText();
							break;
					case 9: $('#b6l9').css('background-image','url(art/upgBar4_1.png)'); 
							$('#b6upg11').toggleClass("upgradeBuy");
							$('#b6upg11amt').fadeIn('slow');
							upg6Manage[10] = 1;
							showColorUpg6(x);
							update6Upgrade(x);
							fillB6UpgradeText();
							break;
					case 10:showColorUpg6(x);
							update6Upgrade(x);
							break;
				}
			}
			else{
				if((upg6Manage[x]-1) < upg6Amt[x]){
					if(!upg6Free)
						player.money_2 -= upgCost; 
					upg6Manage[x]++;
					update6Upgrade(x);
					fillB6UpgradeText();
				}	
			}
		}
	}
	function update6Upgrade(x){
		$('#b6upg'+(x+1)+'amt').text((upg6Manage[x]-1)+"/"+upg6Amt[x]);
		handleB6Upgrade(x);
		pageRefresh();
	}
	function fillB6UpgradeText(){
		upg6Manage.forEach(function(upg, index){
			$('#b6upg'+(index+1)+'amt').text((upg-1)+"/"+upg6Amt[index]);
		});
	}
	function handleB6Upgrade(x){
		newUpgBought();
		switch(x){
			case 0: reduceBatScalingCost(); break;
			case 1: upBatBase(); break;
			case 2: reduceBatFailScale(); break;
			case 3: player.baseBatSplodeChnc -= 10; calcTrueSplode(); break;
			case 4: player.batFailChnc -= 5; break;
			case 5: player.batSplodeWorth += .1; break;
			case 6: batFailSafe = true; break;
			case 7: baterestEnable = true; $('#batBaterest').toggle(); break;
			case 8: increaseIceSaveWorthBat(); break;
			case 9: blastWaveEnable = true; break;
			case 10: coldBatEnable = true; $('#batColdBat').toggle(); break;
		}
		checkMaxUpgrade(6);
	}
	function upBatBase(){
		buildings[5].baseGain += 7500;
		player.gain -= Number(buildings[5].currGain);
		buildings[5].currGain = 0;
		buildings[5].currGain = buildings[5].baseGain * buildings[5].amount; 
		player.gain += Number(buildings[5].currGain);
	}
	function reduceBatScalingCost(){
		buildings[5].exp = Math.round(buildings[5].exp * (1-(.1*(upg6Manage[0]-1)))*10000)/10000;
		if(buildings[5].amount >0)
			buildings[5].cost = Math.round(buildings[5].baseCost * Math.pow(buildings[5].exp,buildings[5].amount));
	}
	function reduceBatFailScale(){
		player.batWorth = Math.round(player.batWorth*.90*100)/100;
		calcTrueSplode();
	}
	function increaseIceSaveWorthBat(){
		player.iceSaveWorth = Math.round(player.iceSaveWorth * 1.1* 100)/100;
		calcTrueSplode();		
	}
		
		
	function showGrey6Upg(x){
		x += 1;
		if(upg6Manage[x-1] > 1){
			$('#b6upg'+x).css("background-image", "url(art/B6/upg"+x+".png)");
		}
		else{
			$('#b6upg'+x).css("background-image", "url(art/B6/upg"+x+".1.png)");
		}
	}
	function showColorUpg6(x){
		x += 1;
		$('#b6upg'+x).css("background-image", "url(art/B6/upg"+x+".png)");
	}
	function loadUpg6(upg6List){

		upg6Manage = new Array(11);
		upg6Manage.fill(0);
		upg6Manage[0] = 1;
		upg6Manage[8] = 1;
		upg6Free = true;
		for(var i=0;i<11;i++){
			upg6List[i] -= 1;
			if(upg6List[i] > 0){
				shownUpg6Before = true;
				for(var j=0; j<upg6List[i]; j++){
					buy6Upgrade(i);
				}
			}
			upg6List[i] += 1;
		}
		upg6Free = false;
		showB6Upgrade();
		hideB6Upgrade();
		if(shownUpg6Before){
			canBuyUpgrade = true;
			buyUpg(6);
			buyUpg(6);
		}
	}
	function upg6Complete(){
		totalUpgMax += 1;
		$('#bgBuilding6').css("background-color", "gold");
	}
	
	/*
		1 	Reduce scaling cost of Bats
		2	Increases gain of bats
		3	Reduces scaling fail rate
		4	flat fail rate reduction
		5	reduce critical fail rate reduction
		6	reduces fail rate penalty
		7	prevents fails from happening more than twice in a row
		8	every time bats don't fail they get a gain multiplier
		9	increases ice fail reduction bonus
		10	getting a  fail reduces remaining ice ticks by 5
		11  when ice melts gain 0% fail chance for 5 ticks
	*/