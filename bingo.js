	function buyBingo(x){
		for(var i=0; i<x; i++){
			addBingoCard();
		}
	}
	function playBingo(){
		var bingoNum = Math.floor(Math.random()*75+1);
		player.bingoHolder.forEach(function(bingo){
			bingo.playNum(bingoNum);
			if(bingo.checkWin()){
				var givePlayerMoney = calcBingoBucks();
				addMoney_1(givePlayerMoney);
				gainer7 += givePlayerMoney;
				gainer8 += givePlayerMoney;
				if(Math.round(Math.random()*100)+1 <= player.extraBingo){
					addMoney_1(givePlayerMoney);
					gainer7 += givePlayerMoney;
					gainer8 += givePlayerMoney;
					bingoPicture = 2;
					if(fireBingo){
						if(Math.random()*100 <= player.fireBingoChnc){
							reduceAllIceTime(1);
						}
					}	
					if(bingoChain)
						bingoChainValue = Math.round((bingoChainValue + 0.05)*100)/100;
				}
				if(fireBingo){
					if(Math.random()*100 <= player.fireBingoChnc){
						reduceAllIceTime(1);
					}
				}
				if(bingoChain)
					bingoChainValue = Math.round((bingoChainValue + 0.05)*100)/100;
				bingo.newCard();
				var bingoBorder = document.getElementById("buy3");	
				bingoBorder.style.borderColor='FFD700';
				bingoBorder.style.backgroundImage="url('art/build3."+bingoPicture+".png')";
			}
		});
		document.getElementById("bingoChain").innerHTML = bingoChainValue;
	}
	function calcBingoBucks(){
	
		return Math.round((7*buildings[2].currGain * ((Math.pow(buildings[2].amount, player.bingoBuckScale) / 4)+2))*bingoChainValue);
	}
	function addBingoCard(){
		player.bingoHolder.push(new bingoCard);
	}
	function bingoCard(){
		var valueSlots = new Array(25);
		var usedSlots = new Array(76);
		this.usedSlots = usedSlots;
		this.valueSlots = valueSlots;
		this.playNum = playNum;
		this.checkWin = checkWin;
		this.newCard = newCard;
		this.setCard = setCard;
		
		for(var i=0;i<25;i++){
			fillCard(i);	
		}
		
		function setCard(a1, a2){
			valueSlots = a1;
			usedSlots = a2;
			this.valueSlots = valueSlots;
			this.usedSlots = usedSlots;
		}
		
		function newCard(){
			valueSlots = new Array(25);
			usedSlots = new Array(76);
			for(var i=0;i<25;i++){
				fillCard(i);	
			}
			this.usedSlots = usedSlots;
			this.valueSlots = valueSlots;
		}
		function fillCard(i){
			var number = ((i%5)*15) + (Math.floor(Math.random()*15)+1);
			if(usedSlots[number]!=true){
				if(i==12 && bingoFree){
					valueSlots[i] = "x";
					usedSlots[number]= false;
				}
				else{
					valueSlots[i] = number;
					usedSlots[number]= true;
				}
			}
			else{
				fillCard(i);
			}
		}
		function playNum(x){
			if(usedSlots[x]==true){
				var index = valueSlots.indexOf(x);
				valueSlots[index] = "x";
				usedSlots[x] = false;
			}
		}
		function checkWin(){
			var win = false;
			var chain = true;
			if(valueSlots[0] == "x"){
				for(var i=1; i<5; i++){
					if(valueSlots[i]!="x")
						chain = false;	
				}
				if(chain)
					win=true;
				chain = true;
				for(var i=1; i<5; i++){
					if(valueSlots[i*5]!="x")
						chain = false;
				}
				if(chain)
					win=true;
				chain=true;
				for(var i=1; i<5; i++){
					if(valueSlots[i*5+i]!="x")
						chain=false;
				}
			}
			for(var j=1; j<5; j++){
				if(valueSlots[j] == "x" && !win){
					chain = true;
					for(var i=1; i<5; i++){
						if(valueSlots[(i*5)+j]!="x")
							chain = false;
					}
					if(chain)
						win=true;
					
					if(j==4){
						chain=true;
						for(var i=2; i<6; i++){
							if(valueSlots[(i*5-i)]!="x")
								chain=false;
						}
						if(chain)
							win=true;
					}	
				}
				
			}
			for(var j=0; j<4; j++){
				if(valueSlots[(j*5)+5] == "x" && !win){
					chain = true;
					for(var i=1; i<5; i++){
						if(valueSlots[((j*5)+5)+i] !="x")
							chain = false;
					}
					if(chain)
						win=true;
				}
			}
			if(win){
				return true;
			}
			return false;
		}
	}
