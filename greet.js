function greet(){
	var date = new Date();
	var current_hour = date.getHours();
	
	if(current_hour <= 11){
		return 'Good Morning';
	}else if(current_hour >= 11 && current_hour <= 13){
		return 'Good Afternoon';
	}else if(current_hour >= 13 && current_hour <= 23){
		return 'Good Evening';
	}
}

function Greeting(x, y, yVol, greet, color) {
	this.x = x;
	this.y = y;
	this.yVol = yVol;
	this.greet = greet;
	this.color = color;
	this.width = ctx.measureText(this.greet).width;
	this.height = 30;

	this.update = function() {
		if(this.y <= window.innerHeight/2){
			this.y += this.yVol;
		}
		if(click.x >= this.x && click.x <= this.x + this.width && click.y <=this.y && click.y >= this.y - this.height){
			this.greet = "";
		}
		
		this.draw();
	};

	this.draw = function() {
		ctx.beginPath();
		ctx.font = "40px Arial";
		ctx.fillStyle = this.color;
		ctx.fillText(this.greet,this.x - (ctx.measureText(this.greet).width/2),this.y);
		ctx.fill();
		ctx.closePath();
	};
}