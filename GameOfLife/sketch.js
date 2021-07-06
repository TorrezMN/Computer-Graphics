class Cell{
	constructor(pos,size){
		this.pos = pos;
		this.size = size;
		this.update();
	}
	update(){
		this.draw();
	}
	draw(){
		push();
		noFill();
		stroke(255);
		rect(this.pos.x, this.pos.y, this.size, this.size);
		pop();
	}
}


var c;
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	c = new Cell(createVector(windowWidth*0.5, windowHeight*0.5),10);
	c.update();
}
function draw() {
	
}