class Segment{
	constructor(pos,val){
		this.pos= pos;
		this.value = null;
		this.seg_vals = null;
		this.dict = {
			1:[true,true,true,true,true,true,false],
			2:[true,true,true,false,true,true,false],
			3:[true,true,true,false,true,true,false],
			4:[true,true,true,false,true,true,false],
			5:[true,true,true,false,true,true,false],
			6:[true,true,true,false,true,true,false],
			7:[true,true,true,false,true,true,false],
			8:[true,true,true,false,true,true,false],
			9:[true,true,true,false,true,true,false],
		}

		this.set_value(val);
	}
	set_value(val){
		this.seg_vals = this.dict[val]
	}
	update(){
		this.draw();
	}
	draw(){
		if(this.seg_vals[0]){
			push();
			fill('red');
			stroke('red');
			rectMode(CENTER,CENTER);
			rect(this.pos.x,this.pos.y-50,50,5);
			pop();
		}
		if(this.seg_vals[1]){
		
			push();
		fill('red');
		stroke('red');
		rectMode(CENTER,CENTER);
		rect(this.pos.x,this.pos.y,50,5);
		pop();
		}
		if(this.seg_vals[2]){
		push();
		fill('red');
		stroke('red');
		rectMode(CENTER,CENTER);
		rect(this.pos.x,this.pos.y+50,50,5);
		pop();
		// ================
		}
		if(this.seg_vals[3]){
		push();
		fill('red');
		stroke('red');
		rectMode(CENTER,CENTER);
		rect(this.pos.x-28,this.pos.y+25,5,40);
		pop();
		}
		if(this.seg_vals[4]){
		push();
		fill('red');
		stroke('red');
		rectMode(CENTER,CENTER);
		rect(this.pos.x+28,this.pos.y+25,5,40);
		pop();
		}
		if(this.seg_vals[5]){
		push();
		fill('red');
		stroke('red');
		rectMode(CENTER,CENTER);
		rect(this.pos.x+28,this.pos.y-25,5,40);
		pop();
		}
		if(this.seg_vals[6]){
		push();
		fill('red');
		stroke('red');
		rectMode(CENTER,CENTER);
		rect(this.pos.x-28,this.pos.y-25,5,40);
		pop();
		}
	}
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	seg = new Segment(createVector(windowWidth/2,windowHeight/2),1);
}



var seg;
function draw() {
	background(0);
	seg.update();
	// push();
	// fill(255);
	// textSize(34);
	// text(new Date().getHours(), windowWidth/2-90,windowHeight/2);
	// text(new Date().getMinutes(), windowWidth/2-45,windowHeight/2);
	// text(new Date().getSeconds(), windowWidth/2,windowHeight/2);
	// pop();
}