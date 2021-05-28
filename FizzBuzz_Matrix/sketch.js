/*
Write a short program that prints each number from 1 to 100 on a new line. 
For each multiple of 3, print "Fizz" instead of the number. 
For each multiple of 5, print "Buzz" instead of the number. 
For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
*/


class Cell {
	constructor(pos) {
		this.pos = pos;
		this.val = parseInt(Math.random() * 10, 10);
		this.colors = {
			red: '#ffcdd2',
			blue: '#CFD8DC',
			green: '#C8E6C9',
		}

	}
	update() {
		this.val = parseInt(Math.random() * 10, 10);
		this.draw_cell();
	}
	draw_cell() {
		if (this.val % 3 == 0) {
			push();
			fill(this.colors.red);
			stroke(this.colors.red);
			ellipse(this.pos.x, this.pos.y, 5, 5);
			pop();
		}
		if (this.val % 5 == 0) {
			push();
			fill(this.colors.blue);
			stroke(this.colors.blue);
			ellipse(this.pos.x, this.pos.y, 5, 5);
			pop();
		}
		if (this.val % 3 == 0 && this.val % 5 == 0) {
			push();
			fill(this.colors.blue);
			stroke(this.colors.blue);
			ellipse(this.pos.x, this.pos.y, 5, 5);
			pop();
		}
	}

}


var c;
var grid = [];
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	let x = windowWidth * 0.15;
	let y = windowHeight * 0.15;
	for (let i of [...Array(50).keys()]) {
		for (let i of [...Array(80).keys()]) {
			grid.push(new Cell(createVector(x, y)))
			x += 10;
		}
		x = windowWidth * 0.15;
		y += 10;
	}

}
function draw() {
	background(0);
	for (let i of grid) {
		i.update();
	}

}