	var giantSleepTimer = 0;
	var giantAwakeFlag = false;
	function doGiant(){
		if(giantSleepTimer >= player.giantSleep){
			giantAwakeFlag = true;
			giantSleepTimer = player.giantAwake;
		}
		else{
			if(!giantAwakeFlag){
				giantSleepTimer += 1;
			}
		}
		if(giantAwakeFlag){
			if(Math.random()*100 <= 50){
				addMoney_6(buildings[9].amount);
			}
			addMoney_1(buildings[9].currGain);
			giantSleepTimer -= 1;
			if(giantSleepTimer <= 0){
				giantAwakeFlag = false;
			}
			$('#sleepDuration').text("AWAKE");
			$('#sleepingAwakeDuration').text(giantSleepTimer+1);
			$('#buy10').css('background-image','url(art/build10.1.png)');
		}
		else{
			$('#sleepDuration').text(player.giantSleep - (giantSleepTimer-1));
			$('#sleepingAwakeDuration').text("CAN'T WAKE UP");
		}
	}
