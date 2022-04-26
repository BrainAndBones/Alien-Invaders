var c, x, y, ys = -20, xs = -20, addY, addX, leftA = 0, rightA, width, height,alienTotal = 60, ya = [], xalien = [], alienShotC = 0, alienShotX = [], alienShotY = [], alienCount =[20,20,10,10];
	var alienLevel = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3];
	var loopN = 0, moveX = 0, phaseA = 0, speed = 0, Alienspeed = .8, speedAdd = .4, shot = "false", shotx = [], shoty = [], time = 0, score = 0, topScores = [0,0,0,0,0], names = ["unused","unused","unused","unused","unused"], scoreNum;
	setScores(); 
	var lives = 3, j1centerX, j1centerY, j2centerX, j2centerY, j1radius = 100, j2radius = 50, controls = "joy", exCount, exX = [], exY = [], exAddX = [], exAddY = [], exR = [], exColor = [], exColor1 = [], exAngle, exA = [], exGravity = .0002, explode = false, audio;
	
function initAudio(){
		audio = new Audio("https://www.dropbox.com/s/4y70hfh1ir6j2l2/alienShotSound.m4a?raw=1");
		audio.load();
		audio.loop = false;
}
initAudio();
	var isTouchingJoystick = false, barrierC, barrierN, barrierX = [], barrierY = [];
	var str1;
	var str2 = "Start Instructions Settings";
	var str3 = "\nWelcome to Alien Invaders' instructions\n\nThe object of the game is to get as many points as possible by shooting aliens\n\nPurple aliens are worth 10 points\n\nPink aliens are worth 20 points\n\nBlue aliens are worth 30 points\n\nGreen aliens are worth 40 points\n\n\ntap the screen to continue";
	var str4 = "\nYou can control your tank in three different ways. You can use joystick mode or button mode. With button mode, there are three invisible buttons. You can see the placements of the buttons and switch between modes in the settings. If on pc, you can you the space button to shoot and the left and right keys to move regardless of which mode you are in.\nYou have three lives; when you lose one, the game will pause for a moment.\n\n Enjoy ;)\ntap the screen to return to main menu";
	var str5 = "\n\nWelcome to settings, here you can switch between joystick and button mode."
	var str6;
	var backWord = "Return to Main Menu";
	var pauseButtons = "Play Main Menu";
	var pauseWords = "\n\nPaused";
	var wordCount = 0, interval, loseInterval, word,word1,word2, words2, words3, words4, words5;
	if (window.PointerEvent) {
	// determine if Pointer Events are supported and use them
	downEvent = "pointerdown";
	moveEvent = "pointermove";
	endEvent = "pointerup";
	} else if (window.TouchEvent) {
	// Provide fallback to Touch Events for Apple user agents that do not support Pointer Events
	downEvent = "touchstart";
	moveEvent = "touchmove";
	endEvent = "touchend";
	} else {
	// Provide fallback for user agents that support Mouse Events
	downEvent = "mousedown";
	moveEvent = "mousemove";
	endEvent = "mouseup";
	conrols ="screen";
	}
function play(){
	alienShotX = [];
	alienShotY = [];
	alienCount =[20,20,10,10];
	barrierC = 177;
	alienLevel = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3];
	barrierN = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
	barrierX = [20,20,30,40,50,60,70,10,20,30,40,50,60,70,80,0,10,20,30,40,50,60,70,80,90,0,10,20,30,60,70,80,90,0,10,20,70,80,90,0,10,20,70,80,90,20,30,40,50,60,70,10,20,30,40,50,60,70,80,0,10,20,30,40,50,60,70,80,90,0,10,20,30,60,70,80,90,0,10,20,70,80,90,0,10,20,70,80,90,20,30,40,50,60,70,10,20,30,40,50,60,70,80,0,10,20,30,40,50,60,70,80,90,0,10,20,30,60,70,80,90,0,10,20,70,80,90,0,10,20,70,80,90,20,30,40,50,60,70,10,20,30,40,50,60,70,80,0,10,20,30,40,50,60,70,80,90,0,10,20,30,60,70,80,90,0,10,20,70,80,90,0,10,20,70,80,90];
	barrierY = [0,0,0,0,0,0,0,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,30,30,30,30,30,30,30,30,40,40,40,40,40,40,50,50,50,50,50,50,0,0,0,0,0,0,0,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,30,30,30,30,30,30,30,30,40,40,40,40,40,40,50,50,50,50,50,50,0,0,0,0,0,0,0,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,30,30,30,30,30,30,30,30,40,40,40,40,40,40,50,50,50,50,50,50,0,0,0,0,0,0,0,10,10,10,10,10,10,10,10,20,20,20,20,20,20,20,20,20,20,30,30,30,30,30,30,30,30,40,40,40,40,40,40,50,50,50,50,50,50];
	shotx = [];
	shoty = [];
	Alienspeed = .8;
	speedAdd = .4;
	moveX = 0;
	alienTotal = 60;
	x = width / 2 - 32;
	y = height - 150; 
	addX = width/12;
	leftA = 0;
	rightA = addX * 2;
	j1centerX = width / 6;
	j1centerY = height - 100;
	j2centerX = width / 6;
	j2centerY = height - 100;
	explode = false;
	var i = 0;
	for(n=0;n<60;n++){
	  xalien[n] = addX*i;
	  if(i<9){
		  i++;
	  }
	  else{
		  i=0;
	  }
	}
	let add4A = 20;
	for(n=1;n<=60;n++){
	 	 ya[n-1] = add4A;
	 	 if(n % 10 == 0){
		  add4A+=80;
	 	 }
	  }
	 interval = setInterval(loop, 10);
}
function start() {
	width = innerWidth;
	height = innerHeight;
	c = canvas.getContext('2d');
	canvas.width = innerWidth;
	canvas.height = innerHeight;
	play();
	if(controls == "joy"){
	right.removeEventListener(downEvent, goright);
	left.removeEventListener(downEvent, goleft);
	right.removeEventListener(endEvent, stoptank);
	left.removeEventListener(endEvent, stoptank);
	shoot.removeEventListener(downEvent, shootem);
	shoot2.addEventListener(downEvent, shootem);	
	left.addEventListener("touchstart", joystickS);
	left.addEventListener("touchmove", joystickM);
	left.addEventListener("touchend", resetJoy);
	}
	else{
		right.addEventListener(downEvent, goright);
		left.addEventListener(downEvent, goleft);
		right.addEventListener(endEvent, stoptank);
		left.addEventListener(endEvent, stoptank);
	shoot.addEventListener(downEvent, shootem);
	shoot2.removeEventListener(downEvent, shootem);	
	left.removeEventListener("touchstart", joystickS);
	left.removeEventListener("touchmove", joystickM)
	left.removeEventListener("touchend", resetJoy)
	}
}
function drawTank(){
	c.fillStyle = "white";
	c.fillRect (x, y, 64, 44);
	c.beginPath();
	c.fillStyle = "white";
	c.fillRect(x+20, y-20, 24, 30);
	c.beginPath();
	c.arc(x+64,y+22,22,0,2*Math.PI)
	c.fillStyle="white";
	c.fill();
	c.beginPath();
	c.arc(x-2,y+22,22,0,2*Math.PI)
	c.fillStyle="white";
	c.fill();
}
function drawAliens(){
	var Num = 0;
	for(I=0;I < alienCount[0]; I++){
	xa = xalien[Num] + moveX;
	if(time%2==0){
		c.drawImage(alien1, 0, 0, alien1.width, alien1.height, xa, ya[Num], 60, 64);
	}
	else{
		c.drawImage(alien6, 0, 0, alien6.width, alien6.height, xa, ya[Num], 60, 64);
	}
	Num++;
	}
	for(I=0;I < alienCount[1]; I++){
	xa = xalien[Num] + moveX;
	if(time%2==0){
		c.drawImage(alien2, 0, 0, alien2.width, alien2.height, xa, ya[Num], 60, 64);
	}
	else{
		c.drawImage(alien5, 0, 0, alien5.width, alien5.height, xa, ya[Num], 60, 64);
	}
	Num++;
	}
	for(I=0;I < alienCount[2]; I++){
	xa = xalien[Num] + moveX;
	if(time%2==0){
		c.drawImage(alien7, 0, 0, alien7.width, alien7.height, xa, ya[Num], 60, 64);
	}
	else{
		c.drawImage(alien3, 0, 0, alien3.width, alien3.height, xa, ya[Num], 60, 64);
	}
	Num++;
	}
	for(I=0;I < alienCount[3]; I++){
	xa = xalien[Num] + moveX;
	if(time%2==0){
		c.drawImage(alien4, 0, 0, alien4.width, alien4.height, xa, ya[Num], 60, 64);
	}
	else{
		c.drawImage(alien8, 0, 0, alien8.width, alien8.height, xa, ya[Num], 60, 64);
	}
	Num++;
	}
	if(phaseA == 0){
	   moveX+=Alienspeed; 
	}
	if(phaseA == 1){
		moveX-=Alienspeed;
	}
	for(n=0; n<alienTotal; n++){
		if(xalien[n] + moveX > width - 40&&phaseA==0){
			phaseA = 1;
			for(n=0; n<alienTotal; n++){
				ya[n] +=20;
			}
			break;
		}
		if(xalien[n] + moveX < 10&&phaseA==1){
			phaseA = 0;
		   for(n=0; n<alienTotal; n++){
				ya[n] +=20;
			}
			break;
		}
	}
}
function ifstatements(){
	if(alienTotal == 0){
	uWin();
	}
	for(n=1;n<=60;n++){
		if(ya[n-1] >= y - 60){
			uLose();	
		break
		}
	}
	for(int = 0; int < alienShotC; int++){
			if(alienShotY[int] <= y + 20 && alienShotY[int] >= y - 20){
				if(alienShotX[int]+3<= x + 80 && alienShotX[int]+3 >= x - 20){
					if(lives > 1){
						lives--;
						setExplosion(300);
						explode = true;
						alienShotX.splice(int,1);
						alienShotY.splice(int,1);
						alienShotC--;
						break;
					}
					else{
						lives--;
						setExplosion(1000);
						alienShotX.splice(int,1);
						alienShotY.splice(int,1);
						alienShotC--;
						explode = true;
						loseInterval = setInterval(uLose, 1200);
					}
				}
			}
	}
	//shootings
	nm=1;
	for(Num = 0; Num < barrierC; Num++){
		for(num = 0; num < alienShotC; num++){
			if(alienShotY[num]<= barrierY[Num]+y -120 && alienShotY[num] >= barrierY[Num]+y-130){
				if(alienShotX[num]+3<=barrierX[Num]+addX*barrierN[Num] + 10 && alienShotX[num]+3>=barrierX[Num]+addX*barrierN[Num]){
					alienShotX.splice(num,1);
					alienShotY.splice(num,1);
					alienShotC--;
					barrierX.splice(Num,1);
  					barrierY.splice(Num,1);
  					barrierN.splice(Num,1);
  					barrierC--;
  					break;
				}
			}
		}
	}
	//barrier being destroyed by aliens
	for(Num = 0; Num < barrierC; Num++){
		for(num = 0; num < 60; num++){
			if(ya[num]+32 <= barrierY[Num]+y-130 && ya[num]+56 >= barrierY[Num]+y-130){
				if(xalien[num]+moveX<=barrierX[Num]+addX*barrierN[Num] + 5 && xalien[num]+moveX+40>=barrierX[Num]+addX*barrierN[Num]){
					barrierX.splice(Num,1);
  					barrierY.splice(Num,1);
  					barrierN.splice(Num,1);
  					barrierC--;
					break;
				}
			}
		}
	}
	
	if(shot == "true"){
		for(int = 0; int < barrierC; int++){
			if(ys <= barrierY[int]+y-120 && ys >= barrierY[int]+y-130){
				if(xs+3<=barrierX[int]+addX*barrierN[int] + 10 && xs+3>=barrierX[int]+addX*barrierN[int]){
					shot = "false";
					barrierX.splice(int,1);
  					barrierY.splice(int,1);
  					barrierN.splice(int,1);
  					barrierC--;
					break;
				}
			}
		}
	}
}

function loop(){
	clear();
	if(explode == false||lives > 0){
		drawTank();
	}
	drawLifes();
	if(controls =="joy"){
		drawJoy();
	}
	if(explode == true){
		explosion();
	}
	else{
		drawshots();
		drawAliens();
		gotOne();
		drawBarrier();
		for(a = 0; a < alienShotC; a++){
	   		alienShotY[a]+=4; 
	}
	if(loopN == 100){
		alienShoot();
		loopN = 0;
		time++;
	}
	else{
		loopN++;
	}
	if(loopN == 50){
		time++;
	}
	drawAlienShots();
	ifstatements();
	if(x + speed + 100 < width && x + speed > 0){
		x+=speed;
	}
	xa++;
	if(ys >= 0){
	   ys-=8; 
	}
	else{
		shot="false";
	}
	}
	scorebox.innerText = score;
	document.onkeydown = function(e) {
	switch (e.keyCode) {
		case 37:
			goleft();
			break;
		case 32:
			shootem();
			break;
		case 39:
			goright();
			break;
	}
};
}
function goright(){
	if(speed<2){
		speed+=2;
	}
}
function goleft(){
	if(speed>-2){
		speed-=2;
	}
}
function stoptank(){
	speed = 0;
}
function shootem(){
	if(shot == "false"){
		audio.play();
		xs = x + 28;
		ys = y - 40;
		shot = "true";  
	}
}
function gotOne(){
	if(shot == "true"){
		for(int = 0; int < alienTotal; int++){
			if(ys <= ya[int]+90 && ys >= ya[int]){
				if(xs+3<=xalien[int]+moveX+80&&xs+3>=xalien[int]+moveX){
					ya.splice(int,1);
					xalien.splice(int,1);
					shot = "false";
					if(alienTotal < 10){
						Alienspeed+=.04;
					}
					else if(alienTotal < 20){
						Alienspeed+=.016;
					}
					else{
						Alienspeed+=.004;
					}
					alienTotal--;
					alienCount[alienLevel[int]]-=1;
		switch (alienLevel[int]){
			case 0:
			score+=40;
			break;
			case 1:
			score+=30;
			break;
			case 2:
			score+=20;
			break;
			case 3:
			score+=10;
			break;
		}
		alienLevel.splice(int,1);
				}
			}
		}
	}
}
function drawshots(){
	if(shot == "true"){
		c.fillStyle = "white";
		c.fillRect (xs, ys, 6, 20);
		c.beginPath();
	}
}
function alienShoot(){
	var pick = getRandom();
	alienShotY[alienShotC] = ya[pick] + 80;
	alienShotX[alienShotC] = xalien[pick] + moveX;
	alienShotC++;
}
function drawAlienShots(){
	for(N=0;N < alienShotC; N++){
		c.fillStyle = "white";
		c.fillRect(alienShotX[N], alienShotY[N], 6, 20);
		c.beginPath();
	}
}
function setExplosion(number){
	exCount = number;
	for(a = 0; a < exCount; a++){
	   	exX[a] = alienShotX[int];
		exY[a] = y-20;
		exR[a] = (getRandom()+3)/20;
		exA[a] = 1;
		exColor1[a] = `${getColor()}`;
		exAngle = getRandom2();
		if(number < 900){
			exAddX[a] = Math.cos(exAngle)*getRandom2()/3;
		exAddY[a] = Math.sin(exAngle)*getRandom2()/3;
		}
		else{
			exAddX[a] = Math.cos(exAngle)*getRandom2()/2;
		exAddY[a] = Math.sin(exAngle)*getRandom2()/2;
		}
		exGravity = .0004;
	}
}
function explosion(){
		for(a = 0; a < exCount; a++){
			exColor[a] = `${exColor1[a]}${exA[a]})`
			c.beginPath();
			c.fillStyle=exColor[a];
			c.fillRect(exX[a], exY[a], exR[a], exR[a]);
		}
		for(a = 0; a < exCount; a++){
	   		exX[a]+=exAddX[a];
			exY[a]+=exAddY[a]+exGravity;
			exA[a]-=.006;
			if(exR[a]-.006 > 0){
				exR[a]-=.006;
			}
			exGravity+=.00002;
		}
		for(a = 0; a < exY.length; a++){
 			if(exY[a] > innerHeight || exA[a] < .1){
  				exX.splice(a,1);
  				exY.splice(a,1);
  				exAddX.splice(a,1);
				exAddY.splice(a,1);
				exColor.splice(a,1);
				exColor1.splice(a,1);
				exR.splice(a,1);
				exA.splice(a,1);
 				exCount--;
 			}
		}
		if(exCount == 0){
			explode = false;
		}
	}
	
	function getRandom2(){
		var r = Math.random() * 6 - 3;
		return(r);
	}
	function getColor(){
		var red = Math.floor(Math.random()*56+200);
		var green = Math.floor(Math.random()*254);
		var blue = Math.floor(Math.random());
		return(`rgba(${red},${green},${0},`);
	}

function drawBarrier(){
	for(N = 0; N < barrierC; N++){
		c.fillStyle = "red";
		c.fillRect(barrierX[N] + addX * barrierN[N], barrierY[N] + y - 130, 10, 10);
		c.beginPath(); 
	}
}
function drawLifes(){
	for(l = 60; l <= lives * 60; l+=60){
		let xl = width-20;
		let yl = height-60;
		c.fillStyle = "white";
		c.fillRect (xl, yl, 32, 22);
		c.beginPath();
		c.fillStyle = "white";
		c.fillRect(xl+10, yl-10, 12, 15);
		c.beginPath();
		c.arc(xl+34,yl+11,11,0,2*Math.PI)
		c.fillStyle="white";
		c.fill();
		c.beginPath();
		c.arc(xl-1,yl+11,11,0,2*Math.PI)
		c.fillStyle="white";
		c.fill();
	}
}
function getRandom(){
	var number = Math.floor((Math.random() * alienTotal));
	return(number);
}
function uWin(){
	interval = clearInterval(interval);	
   	play();
}
function uLose(){
	interval = clearInterval(interval);
	loseInterval = clearInterval(loseInterval);
	clear();
	exX = [];
	exY = [];
	exAddX = [];
	exAddY = [];
	exR = [];
	exColor = [];
	exColor1 = [];
	exAngle;
	exA = [];
	intro.style.display = "block";
	blocker.style.display = "block";
	str6 = `\n\nYou Lose\n\n\n Your score ${score}\n\n\n\n\n\n\n\nTap the screen`;
	shoot2.style.display = "none";
	pause.style.display = "none";
	scorebox.style.display = "none";
	wordCount = 0;
	word1 = setInterval(uLoseTyping, 50);
	intro.value = "";
	lives = 3;
	scoreNum = getScoreNum(score);
}
function uLoseTyping(){
	intro.value += str6[wordCount];
  	wordCount++;
  	if(wordCount >= str6.length){
  		word1 = clearInterval(word1);
  		blocker.addEventListener(downEvent, onload);
		if(scoreNum < 5){
			enterName.style.display = "block";
		}
  	}
}
function getScoreNum(score){
	var returnNum;
	for(let n = 5; n >= 0; n--){
		if(score > topScores[n]){
			returnNum = n;
		}
	}
	return(returnNum);
}
function clear() { 
		c.clearRect(0, 0, canvas.width, canvas.height); 
}
onload = function Loaded(){
	blocker.removeEventListener(downEvent, onload);
	blocker.style.display = "block";
	if(score != 0&&enterName.value != ''){
		topScores.splice(scoreNum , 0 , score);
		names.splice(scoreNum , 0 , enterName.value);
		enterName.value = "";
		setLocalS();
		setScores();
	}
	score = 0;
	lives = 3;
	shot="false";
	enterName.style.display = "none";
	str1 = `\nWelcome to Alien Invaders\n\nYour top scores: \n1. ${names[0]} - ${topScores[0]}\n2. ${names[1]} - ${topScores[1]}\n3. ${names[2]} - ${topScores[2]}\n4. ${names[3]} - ${topScores[3]}\n5. ${names[4]} - ${topScores[4]}`;
	button1.addEventListener(downEvent, begin);
	button2.addEventListener(downEvent, sInstruct);
	button3.addEventListener(downEvent, settingS);
	word1 = setInterval(welcome, 50);
	intro.value = " ";
	wordCount = 0;
	button1.value = " ";
	button2.value = " ";
	button3.value = " ";
	button4.style.display = "none";
	pic1.style.display = "none";
	pic2.style.display = "none";
}
function begin(){
	word1 = clearInterval(word1);
	intro.style.display = "none";
	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "none";
	blocker.style.display = "none";
	pause.style.display = "block";
	scorebox.style.display = "block";
	pause.addEventListener(downEvent, modalOn);
	if(controls == "joy"){
		shoot2.style.display = "block";
	}
	start();
}

function welcome() {
	
   intro.value += str1[wordCount];
   wordCount++;
   if(wordCount >= str1.length){
   		clearInterval(word1);
   	button1.style.display = "block";
	button2.style.display = "block";
	button3.style.display = "block";
   		word2 = setInterval(welcomeButtons, 60);
	}
	word = "";
	words2 = "";
	words3 = "";
	number = 0;
}
number = 0;
function welcomeButtons(){
	if(number < 5){
		word+=str2[number];
		number++;
		button1.value = word;	
	}
	else if(number < 18 && 28 > number){
		words2+=str2[number];
		number++;
		button2.value = words2;	
	}
	else if(number < 27){
		words3+=str2[number];
		number++;
		button3.value = words3;	
	}
	else{
		word2 = clearInterval(word2);
	}
}
	phase = 0;
function sInstruct(){
	word1 = clearInterval(word1);	
	word2 = clearInterval(word2);
   	wordCount2 = 0;
   	intro.value = " ";
   	if(phase == 0){
   		button1.style.display = "none";
		button2.style.display = "none";
		button3.style.display = "none";
		word1 = setInterval(instructions, 
50);
		phase++;
   	}
   	else if(phase == 1){
   	blocker.removeEventListener(downEvent, sInstruct);
	word1 = setInterval(instructions2, 50);
	wordCount2 = 0;
	phase = 0;
   	}
}
function instructions(){ 
	intro.value += str3[wordCount2];
  	wordCount2++;
  	if(wordCount2 >= str3.length){
  		word1 = clearInterval(word1);
  		blocker.addEventListener(downEvent, sInstruct);
  	}
}
function instructions2(){ 
	intro.value += str4[wordCount2];
  	wordCount2++;
  	if(wordCount2 >= str4.length){
  		word1 = clearInterval(word1);
  		blocker.addEventListener(downEvent, onload);
  	}
}

function settingS(){
	word1 = clearInterval(word1);	
	word2 = clearInterval(word2);
	pic1.addEventListener(downEvent, setMode);
	pic2.addEventListener(downEvent, setMode);
	button4.removeEventListener(downEvent, onload);
	intro.style.display = "block";
	button1.style.display = "none";
	button2.style.display = "none";
	button3.style.display = "none";
	blocker.style.display = "block";
	button4.style.display = "block";
	intro.value = " ";
	wordCount = 0;
	word1 = setInterval(setting, 50);
	button4.value = "";
}
function setting(){
	if(wordCount < str5.length){
		intro.value += str5[wordCount];
		wordCount2 = -1;
	}
	else if(wordCount == str5.length){
	   pic1.style.display = "block";
	   pic2.style.display = "block";
	   wordCount2 = 0;
	   word = "";
	}
	else if(wordCount2 < backWord.length){
		word+=backWord[wordCount2];
		button4.value = word;
		wordCount2++;
	}
	else{
		word1 = clearInterval(word1);
		button4.addEventListener(downEvent, onload);
	}
  	wordCount++;
}
function setMode(){
	if(controls=="joy"){
		controls="button";
		pic1.style.borderColor = "red";
		pic2.style.borderColor = "transparent";
	}
	else{
		controls="joy";
		pic1.style.borderColor = "transparent";
		pic2.style.borderColor = "red";
	}
}
	
	function drawJoy() {
		/*
		I'm using center X and Y to draw the circles
		c.arc will take the x and y cordinates you give it as the center of the circle, not the
		top left corner of it..
		 */
		c.beginPath();
		c.arc(j1centerX, j1centerY, j1radius, 0, 2 * Math.PI)
		c.fillStyle = "rgba(256, 240, 240, .2)";
		c.fill();

		c.beginPath();
		c.arc(j2centerX, j2centerY, j2radius, 0, 2 * Math.PI)
		c.fillStyle = "rgba(256, 240, 240, .4)";
		c.fill();

// using the joystick knob position relative to the joystick body to move the player
		if (j2centerX + 40 < j1centerX && x > 0) {
			x-=2;
		}
		if (j2centerX - 40 > j1centerX && x < width - 80) {
			x+=2;
		}
	}

	function joystickS(event) {
		// making sure the joystick is active only if it is first touched before dragged by checking if the users start touching the screen around it
		if(event.touches){
		// using index 0 of the event touches array to get only the first touch event 
			let px = event.touches[0].pageX
			let py = event.touches[0].pageY
			if(pointIsInBox(px, py, j1centerX, j1centerY, j1radius * 2, j1radius * 2)){
				isTouchingJoystick = true
			}
		}
	}

	function joystickM(event) {
		let px = event.touches[0].pageX
		let py = event.touches[0].pageY
		 // using index 0 of the event touches array to get only the first touch event 
// called for as long as the sreen is being held
		if (isTouchingJoystick) {
			j2centerX = px
			j2centerY = py
		} 
		// stopping the joystick knob from going too far from the joystick

		j2centerX = clamp(j2centerX, j1centerX - j1radius, j1centerX + j1radius)
		j2centerY = clamp(j2centerY, j1centerY - j1radius, j1centerY + j1radius)
		
		// moves the inner ball(j2) to the posion being held as long as it is inside the boundaries
	}

	function resetJoy() {
		// resetJoy - reset joystick; called when the screen is no longer being held
		isTouchingJoystick = false;
		j2centerX = width / 6;
		j2centerY = height - 100;
	}

	function clamp(number = 5, minimum = 0, maximum = 20){
		 if(number < minimum){
			 number = minimum;
		 } else if(number > maximum){
			 number = maximum;
		 }
		 return number;
	}

	function pointIsInBox(pointX = 0, pointY = 0, boxX = 0, boxY = 0, boxWidth = 20, boxHeight = 20) {
		return pointX >= boxX - boxWidth / 2 &&
			pointX <= boxX + boxWidth / 2 &&
			pointY >= boxY - boxHeight / 2 &&
			pointY <= boxY + boxHeight / 2;
	}
function modalOn() {
	modal.style.height = '100%';
	modal.style.width = '100%';
	modal.style.visibility = 'visible';
	modalText.style.display = 'block';
	pause.style.display = 'none';
	unpause.addEventListener(downEvent, modalOff);
	main.addEventListener(downEvent, backToMain);
	interval = clearInterval(interval);
	wordCount = 0;
	pausedText.value = "";
	unpause.value = "";
	main.value = "";
	words5 = "";
	word1 = setInterval(pausedTyping, 50);
}

function modalOff() {
	modal.style.height = '0%';
	modal.style.width = '0%';
	modal.style.visibility = 'collapse';
	modalText.style.display = 'none';
	pause.style.display = 'block';
	interval = setInterval(loop, 10);
	word1 = clearInterval(word1);
}
function pausedTyping(){
	if(wordCount < pauseWords.length){
		pausedText.value += pauseWords[wordCount];
	}
	else if(wordCount < pauseWords.length + 4){		
		words5 += pauseButtons[wordCount-pauseWords.length];
		unpause.value = words5;
	}
	else if(wordCount == pauseWords.length + 4){		
		words5 = "";
	}
	else if(wordCount < pauseWords.length + pauseButtons.length){		
		words5 += pauseButtons[wordCount-pauseWords.length];
		main.value = words5;
	}
	wordCount++;
}
function backToMain(){
	modalOff();
	interval = clearInterval(interval);
	onload();
	clear();
	intro.style.display = "block";
	shoot2.style.display = "none";
	scorebox.style.display = "none";
	pause.style.display = 'none';
}
function setScores(){
	for(n = 0; n < 5; n++){
		try{
if(localStorage.getItem(`topAlienScore${n}`)!= 0&&localStorage.getItem(`topAlienScore${n}`)!= null){
	topScores[n] = localStorage.getItem(`topAlienScore${n}`);
	names[n] = localStorage.getItem(`topAlienNames${n}`);
		}
		}
		catch(err){}
} 
	
}
function setLocalS(){
	for(n = 0; n < 5; n++){
		if(topScores[n] != 0){
		try{
	localStorage.setItem(`topAlienScore${n}`, topScores[n]);
	localStorage.setItem(`topAlienNames${n}`, names[n]);
			}
			catch(err){}
		}
	}
}
