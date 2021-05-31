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
		push();
		fill('#FFFFFF');
		stroke('#FFFFFF');
		textAlign(CENTER, CENTER);
		text(this.val, this.pos.x,this.pos.y);
		pop();
	}

}


var c;
var grid = [];
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	let x = windowWidth * 0.05;
	let y = windowHeight * 0.10;
	for (let i of [...Array(20).keys()]) {
		for (let i of [...Array(10).keys()]) {
			grid.push(new Cell(createVector(x, y)))
			x += 13;
		}
		x = windowWidth * 0.05;
		y += 13;
	}

}
function draw() {
	background(0);
	for (let i of grid) {
		i.update();
	}

}