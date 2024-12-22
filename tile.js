const canvas = document.getElementById("canvas");

const height = window.innerHeight;
const width = window.innerWidth;

const ctx = canvas.getContext("2d");
ctx.canvas.width = width;
ctx.canvas.height = height;
	
const theta = 36 * (Math.PI / 180);
const xoffset = height/Math.tan(theta);
const colors = ["#F9C3C8","#FED1C0","#F9DDD1","#FBFAF3","#E8DDCA","#AD9980"];
const tilewindow = [500, 500, 1000, 1000];

var vert = [[[-xoffset, 0],[2*xoffset+width, 0],[width/2 + xoffset, (height+(width/2)*Math.tan(theta))]]];
var type = [0];
var inside = [1];
var offsetangle = [0];

function draw(tile_num) {
	// set tile color
	ctx.fillStyle = colors[Math.round(Math.random()*5)];

	// transform into the tile coordinate frame
	ctx.save()
	ctx.translate(...vert[tile_num][0]);
	ctx.rotate((-1)	*offsetangle[tile_num])
	console.log(Math.random())

	// draw tile
	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(...vert[tile_num][1]);
	ctx.lineTo(...vert[tile_num][2]);
	ctx.closePath();
	ctx.fill();

	// restore default coordinate frame
	ctx.restore();

}

function substitute(tile_num) {
	
	// calculate new tile points in the new rotated tile frame
	const dx = vert[tile_num][1][0] - vert[tile_num][0][0];

	vert.push([[vert[tile_num][2][0]+vert[tile_num][0][0],vert[tile_num][2][1]+vert[tile_num][0][1]],[dx/(2*Math.cos(theta)),0],[dx/(4*Math.cos(theta)),dx/(2*Math.cos(theta))*Math.tan(theta)]]);
	offsetangle.push(offsetangle[tile_num]+(Math.PI-theta));

	vert.push([[vert[tile_num][0][0]+dx/(2*Math.cos(theta)^2),vert[tile_num][0][1]],[vert[tile_num][1][0]-dx/(2*Math.cos(theta)^2),0],[(vert[tile_num][1][0]-dx/(2*Math.cos(theta)^2))/2,Math.tan(theta)*(vert[tile_num][1][0]-dx/(2*Math.cos(theta)^2))/2]])
	offsetangle.push(offsetangle[tile_num])
	
}

draw(0);
substitute(0);

draw(1);
draw(2);