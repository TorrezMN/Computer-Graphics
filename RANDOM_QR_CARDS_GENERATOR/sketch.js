class Cell {
	constructor(pos) {
		this.pos = pos;
		this.value = Math.random() * 10 > 5 ? 1 : 0;
	}
	draw_cell() {
		if (this.value == 1) {

			push();
			fill(255);
			stroke(255);
			rect(this.pos.x, this.pos.y, 20, 20);
			pop();

		}
		if (this.value == 0) {

			push();
			fill(0);
			stroke(0);
			rect(this.pos.x, this.pos.y, 20, 20);
			pop();
		}


	}
}


var body = []
function setup() {
	createCanvas(windowWidth, windowHeight);
	
	for (let i of Array(10).keys()) {
		body.push(new Cell(createVector(random(windowWidth * 0.5), random(windowHeight * 0.5))));
	}
	for (let j of body) {
		console.log(j.value);
		j.draw_cell();
	}
}

function draw() {

}