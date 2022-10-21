var enabledUpgrades = [0,0,0,0,0,0,0,0];
var canBuyUpgrade = false;
	function handleUpgBuy(){
		if(player.money_3 >= smileCost && !canBuyUpgrade && enabledUpgrades.reduce(sumBucket,0) != 8){
			player.money_3 -= smileCost;
			canBuyUpgrade = true;
			$(".upgHolderD").addClass("upgHolderC");
			$(".upgHolderC").removeClass("upgHolderD");
			for(var x=0;x<8;x++){
				if(enabledUpgrades[x]==0){
					$('#upg'+(x+1)).css('background-image','url(art/build'+(x+1)+'.00.png)');
				}
			}
			$('#upgSel').css('background-image','url(art/upgBuy.0.png)');
			$('#upgradeSelector').addClass("upgHolderD");
			$('#upgradeSelector').removeClass("upgHolder");
		}
	}
	
	function buyUpg(x){
		if(enabledUpgrades[x-1]==1){
			doBuyUpg(x);
		}
		else{
			if(canBuyUpgrade){
				$('#upgSel').css('background-image','url(art/upgBuy.png)');
				$('#upgradeSelector').addClass("upgHolder");
				$('#upgradeSelector').removeClass("upgHolderD");
				enabledUpgrades[x-1]=1;
				canBuyUpgrade=false;
				$('#upgrade'+(x-1)).removeClass("upgHolderC");
				$('#upgrade'+(x-1)).addClass("upgHolderF");
				$(".upgHolderC").addClass("upgHolderD");
				$(".upgHolderD").removeClass("upgHolderC");
				for(var i=0;i<8;i++){
					if(enabledUpgrades[i]==0){
						$('#upg'+(i+1)).css('background-image','url(art/build'+(i+1)+'.0.png)');
					}
				}
				$('#upg'+x).css('background-image','url(art/build'+x+'.png)');
				doBuyUpg(x);
				
			}
		}
		var totalUpgs = enabledUpgrades.reduce(sumBucket,0);
		if(totalUpgs < 4){
			smileCost = Math.round(smileCostBase * (Math.pow(2.2 , totalUpgs)) + (1000*(Math.pow(totalUpgs,2.2)/10)));
		}
		else{
			smileCost = Math.round(smileCostBase * (Math.pow(2.2 , (totalUpgs+1))) + (1000*(Math.pow((totalUpgs+1),2.2)/10)));
		}
	}
	
	function doBuyUpg(x){
		if($('#buildingUpgrades').is(":hidden")){
			if(getShownUpgrade(x)){
				showUpgrade();
				showBUpgrade(x);
			}
			else{
				showUpgrade();
				showBUpgradeSlow(x);
				setShownUpgrade(x);
			}
		}
		else{
			if($('#b'+x+'Upgrades').is(":visible")){
				hideBUpgrade(x);
				hideUpgrade();
			}
			else{
				for(var j=1;j<9;j++){
					hideBUpgrade(j);
				}
				hideUpgrade();
				buyUpg(x);
			}
		}
	}
	function showBUpgrade(x){
		switch(x){
			case 1: showB1Upgrade(); break;
			case 2: showB2Upgrade(); break;
			case 3: showB3Upgrade(); break;
			case 4: showB4Upgrade(); break;
			case 5: showB5Upgrade(); break;
			case 6: showB6Upgrade(); break;
			case 7: showB7Upgrade(); break;
			case 8: showB8Upgrade(); break;
		}
	}
	function showBUpgradeSlow(x){
		switch(x){
			case 1: showB1UpgradeSlow(); break;
			case 2: showB2UpgradeSlow(); break;
			case 3: showB3UpgradeSlow(); break;
			case 4: showB4UpgradeSlow(); break;
			case 5: showB5UpgradeSlow(); break;
			case 6: showB6UpgradeSlow(); break;
			case 7: showB7UpgradeSlow(); break;
			case 8: showB8UpgradeSlow(); break;
		}
	}
	function hideBUpgrade(x){
		switch(x){
			case 1: hideB1Upgrade(); break;
			case 2: hideB2Upgrade(); break;
			case 3: hideB3Upgrade(); break;
			case 4: hideB4Upgrade(); break;
			case 5: hideB5Upgrade(); break;
			case 6: hideB6Upgrade(); break;
			case 7: hideB7Upgrade(); break;
			case 8: hideB8Upgrade(); break;
		}
	}
	function showUpgrade(){
		$('#buildingUpgrades:hidden').toggle();
		for(var j=1;j<9;j++){
			$('#b'+j+'Upgrades:visible').toggle();
		}
	}
	function hideUpgrade(){
		$('#buildingUpgrades:visible').toggle();
	}
	function getShownUpgrade(x){
		switch(x){
			case 1: return shownUpg1Before; break;
			case 2: return shownUpg2Before; break;
			case 3: return shownUpg3Before; break;
			case 4: return shownUpg4Before; break;
			case 5: return shownUpg5Before; break;
			case 6: return shownUpg6Before; break;
			case 7: return shownUpg7Before; break;
			case 8: return shownUpg8Before; break;
		}
	}
	function setShownUpgrade(x){
		switch(x){
			case 1: shownUpg1Before = true; break;
			case 2: shownUpg2Before = true; break;
			case 3: shownUpg3Before = true; break;
			case 4: shownUpg4Before = true; break;
			case 5: shownUpg5Before = true; break;
			case 6: shownUpg6Before = true; break;
			case 7: shownUpg7Before = true; break;
			case 8: shownUpg8Before = true; break;
		}
	}
	function newUpgBought(){
		upgBought += 1;
		upgCost = Math.round((.0008*(Math.pow(upgBought, 4)))+ (1.5 * upgBought) + 1475);
	}
	function checkMaxUpgrade(x){
		var tt = window['upg'+x+'Manage'];
		var xx = tt.reduce(sumBucket,0);
		if(xx==31){
			tt = window['upg'+x+'Complete'];
			tt();
		}
	}
	
