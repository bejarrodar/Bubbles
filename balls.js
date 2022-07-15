function Circle(x,y,xVol,yVol,rad,clr){
	this.x = x;
	this.y = y;
	this.xVol = xVol;
	this.yVol = yVol;
	this.rad = rad;
	this.clr = clr;
	this.origRad = rad;
	this.newXVol = xVol;
	this.newYVol = yVol;
	
	this.draw = function(){
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.rad,0,Math.PI*2);
		ctx.fillStyle = this.clr;
		ctx.fill();
	}
	
	this.update = function(){
		if(option.useGravity === false){
			if(this.x+this.rad > window.innerWidth || this.x-this.rad < 0){
				this.xVol = -this.xVol;
			}
			if(this.y+this.rad > window.innerHeight || this.y-this.rad < 0){
				this.yVol = -this.yVol;
			}
			
			this.x += this.xVol;
			this.y += this.yVol;
		} else if(option.useGravity === true){
			if(this.y+this.rad+this.yVol > window.innerHeight || this.y-this.rad < 0){
				this.yVol = -this.yVol * friction;
				this.xVol = this.xVol * friction;
			}else{
				this.yVol += gravity;
			}
			if(this.x+this.rad+xVol > window.innerWidth || this.x-this.rad < 0){
				this.xVol = -this.xVol;
			}
			this.y += this.yVol;
			this.x += this.xVol;
		}
		if(option.usePop === true){
			if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50 && this.rad < maxRad && this.rad !== 0){
				this.rad += growInc;
				if(this.rad > maxRad - 1){
					this.rad = 0;
					this.origRad = 0;
				}
			}else{
				if(this.rad > this.origRad){
					this.rad -= shrinkInc;
				}
			}
		}
		this.draw();
	}
}