function Options(useGravity,customColors,usePop,useCol){
	this.useGravity = useGravity;
	this.customColors = customColors;
	this.usePop = usePop;
	this.useCol = useCol
	
	this.draw = function(){
		ctx.fillStyle = 'black';
		ctx.strokeStyle = 'black';
		ctx.font = "10px Arial";
		ctx.fillText("Use Custom Colors",10,50);
		ctx.fillText("Use Gravity",10,70);
		ctx.fillText("Use Pop",10,90);
		ctx.fillText("Use Collision[WIP]",10,110);
	}
	
	this.update = function(){
		
		ctx.fillStyle = 'black';
		ctx.strokeStyle = 'black';
		
		if(this.useGravity === true){
			ctx.fillRect(110,60,10,10);
		} else if(this.useGravity === false){
			ctx.clearRect(110,60,10,10);
			ctx.strokeRect(110,60,10,10);
		}
		if(this.useCol === true){
			ctx.fillRect(110,100,10,10);
		} else if(this.useCol === false){
			ctx.clearRect(110,100,10,10);
			ctx.strokeRect(110,100,10,10);
		}
		if(this.customColors === true){
			ctx.fillRect(110,40,10,10);
			
		} else if(this.customColors === false){
			ctx.clearRect(110,40,10,10);
			ctx.strokeRect(110,40,10,10);
		}
		if(this.usePop === true){
			ctx.fillRect(110,80,10,10);
		} else if(this.usePop === false){
			ctx.clearRect(110,80,10,10);
			ctx.strokeRect(110,80,10,10);
		}
		if(click.x <= 120 && click.x >= 110 && click.y <= 70 &&click.y >= 60){
			if(this.useGravity === true){
				this.useGravity = false;
			} else if(this.useGravity === false){
				this.useGravity = true;
			}
		}
		if(click.x <= 120 && click.x >= 110 && click.y <= 110 &&click.y >= 100){
			if(this.useCol === true){
				this.useCol = false;
			} else if(this.useCol === false){
				this.useCol = true;
			}
		}
		if(click.x <= 120 && click.x >= 110 && click.y <= 50 &&click.y >= 40){
			if(this.customColors === true){
				this.customColors = false;
			} else if(this.customColors === false) {
				this.customColors = true;
			}
			for(var i = 0; i<bubbles.length;i++){
				bubbles[i].clr = getRandomColor();
				greeter.color = getRandomColor();
			}
		}
		if(click.x <= 120 && click.x >= 110 && click.y <= 90 &&click.y >= 80){
			if(this.usePop === true){
				this.usePop = false;
			} else if(this.usePop === false){
				this.usePop = true;
			}
		}
		this.draw();
	}
}