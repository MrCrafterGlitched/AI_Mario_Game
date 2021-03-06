function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	mario_jump= loadSound("jump.wav")
	mario_coin=loadSound("coin.wav")
	mario_gameOver=loadSound("gameover.wav")
    mario_kick=loadSound("kick.wav")
    mario_die=loadSound("mariodie.wav")
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas")
	instializeInSetup(mario);
	video=createCapture(VIDEO)
	video.size(800,400)
    video.parent("game_console")
	poseNet=ml5.poseNet(video,model_loaded)
	poseNet.on("pose",getPoses)
}
function model_loaded() {
	console.log("Model is loaded")
}
function draw() {
	game()
}
function getPoses(Results) {
	if (Results.length>0) {
		console.log(Results)
	    noseX=Results[0].pose.nose.x
		noseY=Results[0].pose.nose.y
	}
}