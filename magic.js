	function doMagic(){
		if(alterTimeOn){
			alterTimeDuration -= 1;
		}
		var coinChance = Math.random();
		var magicCounter = 0;
		for(var i=0; i < buildings[4].amount; i++){
			if(Math.random()*1000 <= (coinChance*15*player.magicBonus)){
				gainTrident();
			}
		}
		if(alterTimeDuration == 0 && alterTimeOn){
			alterTimeOn = false;
			player.updTime = player.updTime + 700;
			checkGarbage(buildings[7].amount);
		}
		$('#alterTimeDuration').text(alterTimeDuration);
		if(alterTimeOn){
			document.getElementById("buy5").style.backgroundImage="url('art/build5.1.png')"
		}
	}
	function gainTrident(){
		tridentsPerTick += 1;
		if(magicDuplicateEnable){
			if(Math.random()*100 <= doubleMagicChnc)
				gainTrident();
		}
		if(magicTridentGivesGainEnable){
			addMoney_1(Math.round((buildings[4].currGain* hiddenValueVal)));
			gainer5+= Math.round((buildings[4].currGain* hiddenValueVal));
			gainer8+= Math.round((buildings[4].currGain* hiddenValueVal));
		}
		if(magicAlterTimeEnable){
			if(tridentsPerTick >= 10 && !alterTimeOn){
				if(Math.random()*100 <= 30){
					alterTimeOn = true;
					alterTimeDuration = 20;
					player.updTime = player.updTime - 700;
					checkGarbage(buildings[7].amount);
				}
			}
		}
		if(magicReduceIceTickEnable){
			if(Math.random()*100 <= 10)
				reduceAllIceTime(1);
		}
		addMoney_2(1);
	}
	function magicIceMelted(){
		var tridentGain = Math.round(buildings[4].amount*((Math.random()*30)/100));
		for(var x=0; x<tridentGain; x++){
			gainTrident();
		}
	}