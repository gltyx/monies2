var upg3Manage = new Array(11);
var upg3Amt = [2,3,1,1,3,2,1,1,3,1,2];
var upg3Free = false;
var shownUpg3Before = false;
upg3Manage.fill(0);
upg3Manage[0] = 1;
upg3Manage[4] = 1;
upg3Manage[7] = 1;
$('#b3upg1').toggleClass("upgradeBuy");
$('#b3upg5').toggleClass("upgradeBuy");
$('#b3upg8').toggleClass("upgradeBuy");

	function hideB3Upgrade(){
		$('#b3Upgrades:visible').toggle();
		$('#b3upg1').fadeOut('fast');
		$('#b3upg2').fadeOut('fast');
		$('#b3upg3').fadeOut('fast');
		$('#b3upg4').fadeOut('fast');
		$('#b3upg5').fadeOut('fast');
		$('#b3upg6').fadeOut('fast');
		$('#b3upg7').fadeOut('fast');
		$('#b3upg8').fadeOut('fast');
		$('#b3upg9').fadeOut('fast');
		$('#b3upg10').fadeOut('fast');
		$('#b3upg11').fadeOut('fast');

		$('#b3l1').fadeOut('fast');
		$('#b3l2').fadeOut('fast');
		$('#b3l3').fadeOut('fast');
		$('#b3l4').fadeOut('fast');
		$('#b3l5').fadeOut('fast');
		$('#b3l6').fadeOut('fast');
		$('#b3l7').fadeOut('fast');
		$('#b3l8').fadeOut('fast');
	}

	function showB3UpgradeSlow(){
		$('#b3Upgrades:hidden').toggle();
		for(var k=0; k<11;k++){
			showGrey3Upg(k);
		}
		$('#buildingUpgrades').css("background-image", "url(art/build3BGUpg.png)");
		
		$('#b3upg1').fadeIn('slow');
		$('#b3upg1amt').fadeIn('slow');
		$('#b3upg2').delay(350).fadeIn('slow');
		$('#b3upg3').delay(650).fadeIn('slow');
		$('#b3upg4').delay(950).fadeIn('slow');
		$('#b3upg5').fadeIn('slow');
		$('#b3upg5amt').fadeIn('slow');
		$('#b3upg6').delay(350).fadeIn('slow');
		$('#b3upg7').delay(650).fadeIn('slow');
		$('#b3upg8').fadeIn('slow');
		$('#b3upg8amt').fadeIn('slow');
		$('#b3upg9').delay(350).fadeIn('slow');
		$('#b3upg10').delay(650).fadeIn('slow');
		$('#b3upg11').delay(950).fadeIn('slow');

		$('#b3l1').delay(350).fadeIn('slow');
		$('#b3l2').delay(650).fadeIn('slow');
		$('#b3l3').delay(350).fadeIn('slow');
		$('#b3l4').delay(650).fadeIn('slow');
		$('#b3l5').delay(350).fadeIn('slow');
		$('#b3l6').delay(650).fadeIn('slow');
		$('#b3l7').delay(950).fadeIn('slow');
		$('#b3l8').delay(950).fadeIn('slow');

	
		fillB3UpgradeText();
	}
	
	function showB3Upgrade(){
		$('#b3Upgrades:hidden').toggle();
		for(var k=0; k<11;k++){
			showGrey3Upg(k);
		}
		$('#buildingUpgrades').css("background-image", "url(art/build3BGUpg.png)");
			
		$('#b3upg1').fadeIn('fast');
		$('#b3upg1amt').fadeIn('fast');
		$('#b3upg2').fadeIn('fast');
		$('#b3upg3').fadeIn('fast');
		$('#b3upg4').fadeIn('fast');
		$('#b3upg5').fadeIn('fast');
		$('#b3upg5amt').fadeIn('fast');
		$('#b3upg6').fadeIn('fast');
		$('#b3upg7').fadeIn('fast');
		$('#b3upg8').fadeIn('fast');
		$('#b3upg8amt').fadeIn('fast');
		$('#b3upg9').fadeIn('fast');
		$('#b3upg10').fadeIn('fast');
		$('#b3upg11').fadeIn('fast');

		$('#b3l1').fadeIn('fast');
		$('#b3l2').fadeIn('fast');
		$('#b3l3').fadeIn('fast');
		$('#b3l4').fadeIn('fast');
		$('#b3l5').fadeIn('fast');
		$('#b3l6').fadeIn('fast');
		$('#b3l7').fadeIn('fast');
		$('#b3l8').fadeIn('fast');

		fillB3UpgradeText();
	}
	
	function buy3Upgrade(x){
		if(upg3Manage[x] > 0 && (player.money_2 > upgCost || upg3Free)){
			if(upg3Manage[x] == 1){
				if(!upg3Free)
					player.money_2 -= upgCost; 
				upg3Manage[x]++;
				switch(x){
					case 0: $('#b3l1').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b3upg2').toggleClass("upgradeBuy");
							$('#b3upg2amt').fadeIn('slow');
							upg3Manage[1] = 1;
							showColorUpg3(x);
							update3Upgrade(x);
							fillB3UpgradeText();
							break;
					case 1: $('#b3l2').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b3upg3').toggleClass("upgradeBuy");
							$('#b3upg3amt').fadeIn('slow');
							upg3Manage[2] = 1;
							showColorUpg3(x);
							update3Upgrade(x);
							fillB3UpgradeText();
							break;
					case 2: $('#b3l7').css('background-image','url(art/upgBar4_1.png)'); 
							$('#b3upg4').toggleClass("upgradeBuy");
							$('#b3upg4amt').fadeIn('slow');
							upg3Manage[3] = 1;
							showColorUpg3(x);
							update3Upgrade(x);
							fillB3UpgradeText();
							break;
					case 3: showColorUpg3(x);
							update3Upgrade(x);
							break;
					case 4: $('#b3l3').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b3upg6').toggleClass("upgradeBuy");
							$('#b3upg6amt').fadeIn('slow');
							upg3Manage[5] = 1;
							showColorUpg3(x);
							update3Upgrade(x);
							fillB3UpgradeText();
							break;
					case 5: $('#b3l4').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b3upg7').toggleClass("upgradeBuy");
							$('#b3upg7amt').fadeIn('slow');
							upg3Manage[6] = 1;
							showColorUpg3(x);
							update3Upgrade(x);
							fillB3UpgradeText();
							break;
					case 6: showColorUpg3(x);
							update3Upgrade(x);
							break;
					case 7: $('#b3l5').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b3upg9').toggleClass("upgradeBuy");
							$('#b3upg9amt').fadeIn('slow');
							upg3Manage[8] = 1;
							showColorUpg3(x);
							update3Upgrade(x);
							fillB3UpgradeText();
							break;
					case 8: $('#b3l6').css('background-image','url(art/upgBar3_1.png)'); 
							$('#b3upg10').toggleClass("upgradeBuy");
							$('#b3upg10amt').fadeIn('slow');
							upg3Manage[9] = 1;
							showColorUpg3(x);
							update3Upgrade(x);
							fillB3UpgradeText();
							break;
					case 9: $('#b3l8').css('background-image','url(art/upgBar1_1.png)'); 
							$('#b3upg11').toggleClass("upgradeBuy");
							$('#b3upg11amt').fadeIn('slow');
							upg3Manage[10] = 1;
							showColorUpg3(x);
							update3Upgrade(x);
							fillB3UpgradeText();
							break;
					case 10:showColorUpg3(x);
							update3Upgrade(x);
							break;
				}
			}
			else{
				if((upg3Manage[x]-1) < upg3Amt[x]){
					if(!upg3Free)
						player.money_2 -= upgCost; 
					upg3Manage[x]++;
					update3Upgrade(x);
					fillB3UpgradeText();
				}	
			}
		}
	}
	function update3Upgrade(x){
		$('#b3upg'+(x+1)+'amt').text((upg3Manage[x]-1)+"/"+upg3Amt[x]);
		handleB3Upgrade(x);
		pageRefresh();
	}
	function fillB3UpgradeText(){
		upg3Manage.forEach(function(upg, index){
			$('#b3upg'+(index+1)+'amt').text((upg-1)+"/"+upg3Amt[index]);
		});
	}
	function handleB3Upgrade(x){
		newUpgBought();
		switch(x){
			case 0:  upBingoBase(); break;
			case 1:  player.bingoBuckScale = Math.round((player.bingoBuckScale * 1.06)*100)/100; break;
			case 2:  bingoChain = true; $('#bingoBuckChain').toggle(); break;
			case 3:  player.ballsCalled += 1; break;
			case 4:  reduceBingoCost(); break;
			case 5:  reduceTimeTickBingo(); break;
			case 6:  bingoFree = true; break;
			case 7:  player.bingoWait -= 10; break;
			case 8:  reduceIceTickBingo(); break;
			case 9:  player.ballsCalled += 1; break;
			case 10: player.extraBingo += 15; break;
		}
		checkMaxUpgrade(3);
	}
		
	function upBingoBase(){
		buildings[2].baseGain += 3;
		player.gain -= Number(buildings[2].currGain);
		buildings[2].currGain = 0;
		buildings[2].currGain = buildings[2].baseGain * buildings[2].amount; 
		player.gain += Number(buildings[2].currGain);
	}	
	function reduceBingoCost(){
		if(upg3Manage[4] > 1)
			buildings[2].exp = buildings[2].exp / (1-(.0015*(upg3Manage[4]-2)));
		buildings[2].exp = Math.round(buildings[2].exp * (1-(.0015*(upg3Manage[4]-1)))*10000)/10000;
		if(buildings[2].amount >0)
			buildings[2].cost = Math.round(buildings[2].baseCost * Math.pow(buildings[2].exp,buildings[2].amount));
	}
	function reduceTimeTickBingo(){
		player.updTime = player.updTime - 50;
		checkGarbage(buildings[7].amount);
	}	
	function reduceIceTickBingo(){
		fireBingo = true;
		player.fireBingoChnc += 15;
	}
		
	function showGrey3Upg(x){
		x += 1;
		if(upg3Manage[x-1] > 1){
			$('#b3upg'+x).css("background-image", "url(art/B3/upg"+x+".png)");
		}
		else{
			$('#b3upg'+x).css("background-image", "url(art/B3/upg"+x+".1.png)");
		}
	}
	function showColorUpg3(x){
		x += 1;
		$('#b3upg'+x).css("background-image", "url(art/B3/upg"+x+".png)");
	}
	function loadUpg3(upg3List){

		upg3Manage = new Array(11);
		upg3Manage.fill(0);
		upg3Manage[0] = 1;
		upg3Manage[4] = 1;
		upg3Manage[7] = 1;
		upg3Free = true;
		for(var i=0;i<11;i++){
			upg3List[i] -= 1;
			if(upg3List[i] > 0){
				shownUpg3Before = true;
				for(var j=0; j<upg3List[i]; j++){
					buy3Upgrade(i);
				}
			}
			upg3List[i] += 1;
		}
		upg3Free = false;
		showB3Upgrade();
		hideB3Upgrade();
		if(shownUpg3Before){
			canBuyUpgrade = true;
			buyUpg(3);
			buyUpg(3);
		}
	}
	function upg3Complete(){
		totalUpgMax += 1;
		$('#bgBuilding3').css("background-color", "gold");
	}
	
	/*
		1 	incrase base production
		2	reduce cost multiplier
		3	increase bingo reward 
		4	reduce time for bingo ticks
		5	ice duration reduction
		6	game time speedup
		7	consecutive BINGOS within the same tick increase the BINGO BUCKS reward
		8	an extra BINGO ball is called
		9	an extra BINGO ball is called
		10	Bingo cards now have a free space
		11	Every BINGO has a 25% chance of giving an extra BINGO
	*/
