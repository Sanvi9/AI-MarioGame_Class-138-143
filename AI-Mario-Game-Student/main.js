function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	marioCoin = loadSound("coin.wav");
	marioGameover = loadSound("gameover.wav");
	marioDie = loadSound("mariodie.wav");
	kick = loadSound("kick.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');

	instializeInSetup(mario);

	video = createCapture(VIDEO);
    video.size(600,300);
	
	video.parent('gameConsole');
	posenet = ml5.poseNet(video,modelLoaded);
	posenet.on('pose',gotPoses);
  }


function modelLoaded(){
	console.log('Model Loaded');
  }
  
  function gotPoses(results){
	if(results.length>0){
	  noseX = results[0].pose.nose.x;
	  noseY = results[0].pose.nose.y;
	  console.log(results)
	}
  }
  

function draw() {
	game()
}






