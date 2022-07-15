function CollisionDetect(a,b){
	if (a != b){
		distance = Math.sqrt(((bubbles[a].x - bubbles[b].x) * (bubbles[a].x - bubbles[b].x)) + ((bubbles[a].y - bubbles[b].y) * (bubbles[a].y - bubbles[b].y)));
		if(distance < 0){
			distance = distance * -1;
		}
		if (distance < bubbles[a].rad + bubbles[b].rad){
			calculateVelocity(a,b);
		}
	}
}


function calculateVelocity(i,j){
	var newVelX1 = (bubbles[i].xVol * (bubbles[i].rad - bubbles[j].rad) + (2 * bubbles[j].rad * bubbles[j].xVol)) / (bubbles[i].rad + bubbles[j].rad);
	var newVelY1 = (bubbles[i].yVol * (bubbles[i].rad - bubbles[j].rad) + (2 * bubbles[j].rad * bubbles[j].yVol)) / (bubbles[i].rad + bubbles[j].rad);
	var newVelX2 = (bubbles[j].xVol * (bubbles[j].rad - bubbles[i].rad) + (2 * bubbles[i].rad * bubbles[i].xVol)) / (bubbles[i].rad + bubbles[j].rad);
	var newVelY2 = (bubbles[j].yVol * (bubbles[j].rad - bubbles[i].rad) + (2 * bubbles[i].rad * bubbles[i].yVol)) / (bubbles[i].rad + bubbles[j].rad);
	
	bubbles[i].xVol = newVelX1;
	bubbles[i].yVol = newVelY1;
	bubbles[j].xVol = newVelX2;
	bubbles[j].yVol = newVelY2;
	
	bubbles[i].x = bubbles[i].x + newVelX1;
	bubbles[i].y = bubbles[i].y + newVelY1;
	bubbles[j].x = bubbles[j].x + newVelX2;
	bubbles[j].y = bubbles[j].y + newVelY2;
}