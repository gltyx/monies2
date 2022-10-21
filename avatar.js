	var avaMatComplete = false;
	var avaGroComplete = false;
	var avaWelComplete = false;
	var avaUpgradeFree = false;
	var avaUpgCost = 1;
	var avaMatAmt = [0,0,0,0,0,0];
	var avaGroAmt = [0,0,0,0,0,0,0,0];
	var avaWelAmt = [0,0,0,0,0,0];
	var moanaScale = 1;
	function summonAvatar(){
		if(avaMatComplete && avaGroComplete && avaWelComplete){
			if($('#avatarUpgrades').is(":hidden")){
				$('#avatarUpgrades').toggle();
			}
			else{
				$('#avatarUpgrades').toggle();
			}
			disco();
		}
		else{
			if(!avatarUpgPurchase){
				moanaDump = 0;
				calcMoanaPercent(0);
				avatarUpgPurchase = true;
				pickAvatar();
			}

			if($('#avatarUpgrades').is(":hidden")){
				$('#avatarUpgrades').toggle();
			}
			else{
				$('#avatarUpgrades').toggle();
			}
		}
	}
	function pickAvatar(){
		if(totalAvaUpg() == 0){
			$('#avatarPlace').css("background-image", "url(art/avaGro.png)");
			pickAvaUpg(2, -1);
		}
		else{
			if(avaMatComplete && avaGroComplete && avaWelComplete){
				disco();
				//	alert("You win. I was going to put another phase here but got tired and didn't wanna program. //Reminder to put more stuff here when I feel like it");
			}
			else{
				switch(Math.floor(Math.random()*3)+1){
					case 1: if(avaMatComplete){
								pickAvatar()
							}
							else{
								$('#avatarPlace').css("background-image", "url(art/avaMat.png)");
								pickAvaUpg(1, -1);
							}
					break;
					case 2:	if(avaGroComplete){
								pickAvatar()
							}
							else{
								$('#avatarPlace').css("background-image", "url(art/avaGro.png)");
								pickAvaUpg(2, -1);
							}
					break;
					case 3: if(avaWelComplete){
								pickAvatar()
							}
							else{
								$('#avatarPlace').css("background-image", "url(art/avaWel.png)");
								pickAvaUpg(3, -1);
							}
					break;
				}
			}
		}
	}
	function pickAvaUpg(x, z){
		selectedAvatarSave = x;
		switch(x){
			case 1: {
				var isEmpty;
				for(var y=0; y< 6; y++){
					if(avaMatAmt[y] == 0){
						isEmpty = y;
						y = 7;
					}
				}
				selectedUpgradeSave = isEmpty;
				switch(isEmpty){
					case 0: $('#avaUpgID').text("1"); 
					$('#avaUpgSlot').css('background-image', 'url(art/avaUpg/1.png)'); 
					var cache = $('#avaUpgDesc').children();
					$('#avaUpgDesc').text("Math 'n Snacks").append(cache); 
					$('#avaUpgTT').text("Unlocks Pi. This never ending food can produce ∞"); 
					$('#avaUpgPrice').text(avaUpgCost);  
					break;
					case 1:$('#avaUpgID').text("2"); 
					$('#avaUpgSlot').css('background-image', 'url(art/avaUpg/2.png)'); 
					var cache = $('#avaUpgDesc').children();
					$('#avaUpgDesc').text("Giant Pillows").append(cache); 
					$('#avaUpgTT').text("Awaken the sleeping giant! He's angry when he's awake"); 
					$('#avaUpgPrice').text(avaUpgCost);  
					break;
					case 2:$('#avaUpgID').text("3"); 
					$('#avaUpgSlot').css('background-image', 'url(art/avaUpg/3.png)'); 
					var cache = $('#avaUpgDesc').children();
					$('#avaUpgDesc').text("Trade Contract").append(cache); 
					$('#avaUpgTT').text("Discover the Red Paper Clip and it's hidden potential"); 
					$('#avaUpgPrice').text(avaUpgCost);  
					break;
					case 3:
					$('#avaUpgID').text("4"); 
					$('#avaUpgSlot').css('background-image', 'url(art/avaUpg/4.png)'); 
					var cache = $('#avaUpgDesc').children();
					$('#avaUpgDesc').text("Better Ingredients").append(cache); 
					$('#avaUpgTT').text("The smell of Pie becomes so strong it now has a 25% chance to condense into matter. Each tick Pi produces up to 628% bonus money"); 
					$('#avaUpgPrice').text(avaUpgCost);  
					break;
					case 4:
					$('#avaUpgID').text("5"); 
					$('#avaUpgSlot').css('background-image', 'url(art/avaUpg/5.png)'); 
					var cache = $('#avaUpgDesc').children();
					$('#avaUpgDesc').text("Daylight Savings").append(cache); 
					$('#avaUpgTT').text("Sleeping giants have changed up their sleeping habits. They now sleep for 225 ticks but will stay awake for 75"); 
					$('#avaUpgPrice').text(avaUpgCost);  
					break;
					case 5:$('#avaUpgID').text("6"); 
					$('#avaUpgSlot').css('background-image', 'url(art/avaUpg/6.png)'); 
					var cache = $('#avaUpgDesc').children();
					$('#avaUpgDesc').text("Bad Businessmen").append(cache); 
					$('#avaUpgTT').text("Red Paper Clips have a 5% chance a tick to be traded for another building for 50 ticks. While trading, a chosen building will have a bigger impact on Red Paper Clips gain"); 
					$('#avaUpgPrice').text(avaUpgCost);  
					break;
				}
			}; break;
			
			case 2: {
				var isEmpty = 10;
				var countdown = 10;
				while(isEmpty == 10){
					var selection = (Math.floor(Math.random()*8)+1);
					if(avaGroAmt[(selection-1)] == 0){
						isEmpty = selection;
					}	
					countdown -= 1;
					if(countdown <= 0){
						isEmpty = avaGroAmt.indexOf(0);
						isEmpty += 1;
					}
				}
				if(z != -1)
					isEmpty = z;
				selectedUpgradeSave = isEmpty;
				switch(isEmpty){
					case 1: $('#avaUpgID').text("7"); 
					$('#avaUpgSlot').css('background-image', 'url(art/avaUpg/7.png)'); 
					var cache = $('#avaUpgDesc').children();
					$('#avaUpgDesc').text("Rocket Shoes").append(cache); 
					$('#avaUpgTT').text("The value of Shoes Multistep is increased by 1,000%. Run chance is increased to 30"); 
					$('#avaUpgPrice').text(avaUpgCost);  
					break;
					case 2:$('#avaUpgID').text("8"); 
					$('#avaUpgSlot').css('background-image', 'url(art/avaUpg/8.png)'); 
					var cache = $('#avaUpgDesc').children();
					$('#avaUpgDesc').text("DYNOMITE").append(cache); 
					$('#avaUpgTT').text("Spades gain 5% crit chance. The bonus from digging frenzy is increased by 30%"); 
					$('#avaUpgPrice').text(avaUpgCost);  
					break;
					case 3:$('#avaUpgID').text("9"); 
					$('#avaUpgSlot').css('background-image', 'url(art/avaUpg/9.png)'); 
					var cache = $('#avaUpgDesc').children();
					$('#avaUpgDesc').text("Cheater").append(cache); 
					$('#avaUpgTT').text("5 Bingo balls are called out. Bingo balls are called out every 4 ticks"); 
					$('#avaUpgPrice').text(avaUpgCost);  
					break;
					case 4:
					$('#avaUpgID').text("10"); 
					$('#avaUpgSlot').css('background-image', 'url(art/avaUpg/10.png)'); 
					var cache = $('#avaUpgDesc').children();
					$('#avaUpgDesc').text("Infinite Fuel").append(cache); 
					$('#avaUpgTT').text("Lift-Off Time is cut in half. Spaceship gain during overdrive is increased by 500%"); 
					$('#avaUpgPrice').text(avaUpgCost);  
					break;
					case 5:
					$('#avaUpgID').text("11"); 
					$('#avaUpgSlot').css('background-image', 'url(art/avaUpg/11.png)'); 
					var cache = $('#avaUpgDesc').children();
					$('#avaUpgDesc').text("Magic Trick").append(cache); 
					$('#avaUpgTT').text("The chance for tridents to give extra tridents is doubled. Hidden Value's bonus is increased by 400%"); 
					$('#avaUpgPrice').text(avaUpgCost);  
					break;
					case 6:$('#avaUpgID').text("12"); 
					$('#avaUpgSlot').css('background-image', 'url(art/avaUpg/12.png)'); 
					var cache = $('#avaUpgDesc').children();
					$('#avaUpgDesc').text("Golder Bats").append(cache); 
					$('#avaUpgTT').text("Gold Bat 9000 only lose 25% of Baterest when a batsplosion occurs. Baterest Gain is increased by 400%"); 
					$('#avaUpgPrice').text(avaUpgCost);  
					break;
					case 7:$('#avaUpgID').text("13"); 
					$('#avaUpgSlot').css('background-image', 'url(art/avaUpg/13.png)'); 
					var cache = $('#avaUpgDesc').children();
					$('#avaUpgDesc').text("Holy Ice").append(cache); 
					$('#avaUpgTT').text("Ice Cube melt bonus is increased by 400%"); 
					$('#avaUpgPrice').text(avaUpgCost);  
					break;
					case 8:$('#avaUpgID').text("14"); 
					$('#avaUpgSlot').css('background-image', 'url(art/avaUpg/14.png)'); 
					var cache = $('#avaUpgDesc').children();
					$('#avaUpgDesc').text("Pennsylvania").append(cache); 
					$('#avaUpgTT').text("Garbage now gets all benefits no matter how many you own. Rotten Fruit increases all $ earned by 50%"); 
					$('#avaUpgPrice').text(avaUpgCost);  
					break;
				}
			}; 
			break;
			
			case 3: {
				var isEmpty = 10;
				var countdown = 10;
				while(isEmpty == 10){
					var selection = (Math.floor(Math.random()*6));
					if(avaWelAmt[selection] == 0){
						isEmpty = selection;
					}
					countdown -= 1;
					if(countdown <= 0){
						isEmpty = avaWelAmt.indexOf(0);
					}
				}
				if(z != -1)
					isEmpty = z;
				selectedUpgradeSave = isEmpty;
				switch(isEmpty){
					case 0: $('#avaUpgID').text("15"); 
					$('#avaUpgSlot').css('background-image', 'url(art/avaUpg/15.png)'); 
					var cache = $('#avaUpgDesc').children();
					$('#avaUpgDesc').text("Better Clocks").append(cache); 
					$('#avaUpgTT').text("Increases time between ticks by 2 second. Normal ticks are replaced with 7 Ticks"); 
					$('#avaUpgPrice').text(avaUpgCost);  
					break;
					case 1:$('#avaUpgID').text("16"); 
					$('#avaUpgSlot').css('background-image', 'url(art/avaUpg/16.png)'); 
					var cache = $('#avaUpgDesc').children();
					$('#avaUpgDesc').text("Double Money").append(cache); 
					$('#avaUpgTT').text("Increases all $ gain by 200%"); 
					$('#avaUpgPrice').text(avaUpgCost);  
					break;
					case 2:$('#avaUpgID').text("17"); 
					$('#avaUpgSlot').css('background-image', 'url(art/avaUpg/17.png)'); 
					var cache = $('#avaUpgDesc').children();
					$('#avaUpgDesc').text("Magic Money").append(cache); 
					$('#avaUpgTT').text("Increases all φ gain by 100%"); 
					$('#avaUpgPrice').text(avaUpgCost);  
					break;
					case 3:
					$('#avaUpgID').text("18"); 
					$('#avaUpgSlot').css('background-image', 'url(art/avaUpg/18.png)'); 
					var cache = $('#avaUpgDesc').children();
					$('#avaUpgDesc').text("Smile!").append(cache); 
					$('#avaUpgTT').text("Increases all ☺ gain by 200%"); 
					$('#avaUpgPrice').text(avaUpgCost);  
					break;
					case 4:
					$('#avaUpgID').text("19"); 
					$('#avaUpgSlot').css('background-image', 'url(art/avaUpg/19.png)'); 
					var cache = $('#avaUpgDesc').children();
					$('#avaUpgDesc').text("Join the 'Club'").append(cache); 
					$('#avaUpgTT').text("Increases all ♠ gain by 400%"); 
					$('#avaUpgPrice').text(avaUpgCost);  
					break;
					case 5:$('#avaUpgID').text("20"); 
					$('#avaUpgSlot').css('background-image', 'url(art/avaUpg/20.png)'); 
					var cache = $('#avaUpgDesc').children();
					$('#avaUpgDesc').text("§uper Moneie§").append(cache); 
					$('#avaUpgTT').text("Increases all § gain by 100%"); 
					$('#avaUpgPrice').text(avaUpgCost);  
					break;
				}
			}; break;
		}
	}
	function convertMonies(){
		 addMoney_5(calcConvertMonies());
		player.money = player.money_2 = player.money_3 = player.money_4 = 0;
	}
	function calcConvertMonies(){
		return Math.floor(((player.money * .000000000000000035) + (player.money_2 * .00000015) + (player.money_3 * .000025) + (player.money_4 * .00000002)));
	}
	function buyAvaUpgrade(){
		if(player.money_5 >= avaUpgCost || avaUpgradeFree){
			if(!avaUpgradeFree)
				player.money_5 -= avaUpgCost;
			var avaUpg = Number($('#avaUpgID').text());
			switch(avaUpg){
				case 1: avaMatAmt[0] = 1; $('#building8').fadeIn(); break;
				case 2: avaMatAmt[1] = 1; $('#building9').fadeIn(); break;
				case 3: avaMatAmt[2] = 1; $('#building10').fadeIn(); break;
				case 4: avaMatAmt[3] = 1; $('#bgBuilding9').css("background-color", "#942EF3"); $('#pieRanVal:hidden').toggle(); player.pieChnc = 25; player.pieGainEnable = true; break;
				case 5: avaMatAmt[4] = 1; $('#bgBuilding10').css("background-color", "#942EF3"); player.giantSleep = 225; player.giantAwake = 75; break;
				case 6: avaMatAmt[5] = 1; $('#bgBuilding11').css("background-color", "#942EF3"); $('#tradeHolder:hidden').toggle(); $('#tradeDuration:hidden').toggle(); player.rpcTradeEnable = true; break;
				case 7: avaGroAmt[0] = 1; $('#bgBuilding1').css("background-color", "#942EF3"); multiStepVal = 10; player.runChnc = 30; break;
				case 8: avaGroAmt[1] = 1; $('#bgBuilding2').css("background-color", "#942EF3"); player.digChnc += 5; player.multCritValue = (player.multCritValue * 1.3); break;
				case 9: avaGroAmt[2] = 1; $('#bgBuilding3').css("background-color", "#942EF3"); player.ballsCalled = 5; player.bingoWait = 4; break;
				case 10: avaGroAmt[3] = 1; $('#bgBuilding4').css("background-color", "#942EF3"); avaShipUpgradeEnable = true; player.overdriveWait = 20; break;
				case 11: avaGroAmt[4] = 1; $('#bgBuilding5').css("background-color", "#942EF3"); doubleMagicChnc = 50; hiddenValueVal *= 5; break;
				case 12: avaGroAmt[5] = 1; $('#bgBuilding6').css("background-color", "#942EF3"); baterestLoss = .75; baterestGain = 125; break;
				case 13: avaGroAmt[6] = 1; $('#bgBuilding7').css("background-color", "#942EF3"); player.meltWorth *= 5; break;
				case 14: avaGroAmt[7] = 1; $('#bgBuilding8').css("background-color", "#942EF3"); avaGarboUpgrade = true; garbageGlobalMultBonus += .5; break;
				case 15: avaWelAmt[0] = 1; tripleTickEnable = true; player.updTime += 2000; checkGarbage(buildings[7].amount); break;
				case 16: avaWelAmt[1] = 1; avaMon1Mult = 3; break;
				case 17: avaWelAmt[2] = 1; avaMon2Mult = 2; break;
				case 18: avaWelAmt[3] = 1; avaMon3Mult = 3; break;
				case 19: avaWelAmt[4] = 1; avaMon4Mult = 3; break;
				case 20: avaWelAmt[5] = 1; avaMon5Mult = 2; break;
			}
			finishAvaUpg();
		}
	}
	function finishAvaUpg(){
		if(avaWelAmt.reduce(sumBucket,0) == 6)
			avaWelComplete = true;
		if(avaGroAmt.reduce(sumBucket,0) == 8)
			avaGroComplete = true;
		if(avaMatAmt.reduce(sumBucket,0) == 6)
			avaMatComplete = true;
		
		moanaScale = (moanaScale + 0.5);
		selectedAvatarSave = -1;
		selectedUpgradeSave = -1;
		showSummonBTN = false;
		avaUpgCost = Math.round(2.5 * totalAvaUpg());
		$('#summonButton:visible').toggle();
		$('#avatarUpgrades:visible').toggle();
		calcMoanaPercent(0);
	}
	function totalAvaUpg(){
		return (avaMatAmt.reduce(sumBucket,0) + avaGroAmt.reduce(sumBucket,0) + avaWelAmt.reduce(sumBucket, 0));
	}
	function loadAvaUpg(x){
		for(var i = 0; i<20; i++){
			if(x[i]==1){
				avaUpgradeFree = true;
				$('#avaUpgID').text(i+1);
				buyAvaUpgrade();
				avaUpgradeFree = false;
			}
		}
	}
	function loadAvaDisplay(){
		if(showSummonBTN)
				$('#summonButton:hidden').toggle();
		if(selectedAvatarSave != -1 && selectedUpgradeSave != -1){
			pickAvaUpg(selectedAvatarSave, selectedUpgradeSave);
			switch(selectedAvatarSave){
				case 1: $('#avatarPlace').css("background-image", "url(art/avaMat.png)");break;
				case 2: $('#avatarPlace').css("background-image", "url(art/avaGro.png)");break;
				case 3: $('#avatarPlace').css("background-image", "url(art/avaWel.png)");break;
			}
		}
	}
