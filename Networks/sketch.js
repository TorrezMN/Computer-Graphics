function random_rgba() {
	var o = Math.round, r = Math.random, s = 255;
	return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}
class Node {
	constructor(pos) {
		this.pos = pos;
		this.color = random_rgba();
		this.acc = createVector(
			Math.random() * 10 > 5 ? 1 : -1,
			Math.random() * 10 > 5 ? 1 : -1
		);
		this.icon = Math.random() * 10 % 2 == 0 ? '\uf183' : '\uf182';
	}
	update() {
		if (Math.random() * 100 % 5 == 0) {
			this.color = random_rgba();
		}
		if (this.pos.x < 5 || this.pos.x > windowWidth - 5) {
			this.acc.x *= -1;
		}
		if (this.pos.y < 5 || this.pos.y > windowHeight - 5) {
			this.acc.y *= -1;
		}
		this.pos.x += this.acc.x;
		this.pos.y += this.acc.y;
		this.draw();
	}
	draw() {
		push();
		fill(this.color);
		stroke(this.color);
		textSize(20);
		textAlign(CENTER, CENTER);
		text(this.icon, this.pos.x, this.pos.y);
		pop();
	}
}
function draw_connection(node1, node2) {
	push();
	fill('#FFFFFF');
	stroke('#FFFFFF');
	line(
		node1.pos.x,
		node1.pos.y,
		node2.pos.x,
		node2.pos.y
	);
	pop();
}
var ns = [];
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	textFont("FontAwesome");
	for (let i of [...Array(50).keys()]) {
		ns.push(new Node(createVector(random(windowWidth), random(windowHeight))));
	}
}
function draw() {
	background(0);
	for (let i of ns) {
		i.update();
	};
	draw_connection(
		ns[Math.floor(Math.random() * ns.length)],
		ns[Math.floor(Math.random() * ns.length)]
	);
}