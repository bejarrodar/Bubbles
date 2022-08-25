var canvasHeight = 800;
var canvasWidth = 800;
var startingX = 235;
var startingY = 30;
var gap = 5;
var numBalls = 237;
var musicSound = true;
var ballHeight = 40;
var colors = [ // array of custom colors
'#FF7100',
'#FFEF00',
'#FF00B6',
'#00FF44',
'#000CFF',
'#00F6FF',
'#FF1200'
];


var canvas = $("#mainCanvas");
canvas[0].width = canvasWidth;
canvas[0].height = canvasHeight;
canvas.css("border", "1px solid #000000");
var ctx = canvas[0].getContext("2d")
var audioImg = $('#audioImg')
var audioOn = 'assets/AudioOn.png';
var audioOff = 'assets/AudioOff.png';
var menuImg = $("#menuImg");
var song = new Music();
var balls = [];


var click = {
	x: undefined,
	y: undefined
};

$(window).mouseup(function(){
	click.x = event.offsetX;
	click.y = event.offsetY;
});
function audioControl(){
	if(click.x < 40 && click.x > 10 && click.y < 40 && click.y > 10){
		musicSound = !musicSound;
		if(song.isPlaying() === true){
			song.pause();
		}
		//console.log(click);
	}
}

function getRandomColor() {
	var color;
	color = colors[Math.floor(Math.random()*colors.length)];
	return color;
}

function drawIcons(){
	if(musicSound === true){
		audioImg[0].src = audioOn;
	}
	if(musicSound === false){
		audioImg[0].src = audioOff;
	}
	ctx.drawImage(audioImg[0],10,10,30,30);
	ctx.drawImage(menuImg[0],10,45,30,30);
}

function showMenu(){
	
}
function playMusic(){
	if(musicSound === true){
		var track = Math.floor(Math.random()*3);
		if(song.isPlaying() === false){
			song.playMusic(track);
		}
	}
}

function findX(ball){
	if(balls[ball].x < canvasWidth - balls[ball].rad){
		return balls[ball].x + (balls[ball].rad * 2) + gap;
	} else {
		return startingX;
	}
	
}

function findY(ball){
	if(balls[ball].y < canvasHeight - balls[ball].rad && balls[ball].x > canvasWidth - balls[ball].rad){
		return balls[ball].y + (balls[ball].rad * 2) + gap;
	} else {
		return balls[ball].y;
	}
	
}

function backgroundDraw(){
	ctx.strokeStyle="black";
	ctx.fillStyle = "black";
	ctx.beginPath();
	ctx.moveTo(canvasWidth/4,0);
	ctx.lineTo(canvasWidth/4,canvasHeight);
	ctx.stroke();
	ctx.font="20px Georgia";
	ctx.fillText("Score:",canvasWidth/15,(canvasHeight/8)+30);
	ctx.fillText("Level:",canvasWidth/15,(canvasHeight/8)+60);
	ctx.fillText("Time: ",canvasWidth/15,(canvasHeight/8)+90);
}

function animate(){
	requestAnimationFrame(animate);
	ctx.clearRect(0,0,canvasWidth,canvasHeight);
	backgroundDraw();
	audioControl();
	if(click.x !== undefined){
		console.log(click);
	}
	drawIcons();
	if(Math.floor(Math.random()*300) === 1){
		playMusic();
		console.log(musicSound);
	}
	for(var i=0; i<balls.length;i++){
		balls[i].update();
	}
	click.x = undefined;
	click.y = undefined;
}
function init(){
	balls.push(new Circle(startingX,startingY,getRandomColor()));
	
	for(var i=0;i<numBalls;i++){
		var x = findX(i)
		var y = findY(i);
		var clr = getRandomColor();
		
		balls.push(new Circle(x,y,clr));
		
	}
}

init();
animate();