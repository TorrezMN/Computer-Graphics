class Letter{
	constructor(pos){
		this.pos = pos;
		this.acc = createVector(0,random(0,5));
		this._string = ['p','u','t','o','e','l','q','u','e','l','e','a','e','s','t','o']

	}
	update(){
		this.pos.add(this.acc);
		this.draw_letter();
		if(this.pos.y>=windowHeight){
			this.pos.y=-10;
		}
	}
	draw_letter(){
		var item = this._string[Math.floor(Math.random() * this._string.length)];
			push();
			fill('red');
			stroke('red');
			text(item,this.pos.x,this.pos.y)
			pop();
		
	}
}


var rain = []
function setup() {
	
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('z-index', '-1')
	

	for(let i of Array(100).keys()){
		rain.push(
	new Letter(createVector(random(width), -10))

			);
	}


}

function draw() {

	background(220);
	for(let i of rain){
		i.update();
	}
}