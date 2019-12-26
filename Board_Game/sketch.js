/*
                                            __ ,
_-_ _,,                      |\           ,-| ~
   -/  )          _           \\         ('||/__,   _
  ~||_<    /'\\  < \, ,._-_  / \\       (( |||  |  < \, \\/\\/\\  _-_
   || \\  || ||  /-||  ||   || ||       (( |||==|  /-|| || || || || \\
   ,/--|| || || (( ||  ||   || ||        ( / |  , (( || || || || ||/
  _--_-'  \\,/   \/\\  \\,   \\/          -____/   \/\\ \\ \\ \\ \\,/
 (

*/







class Player{
	constructor(){
		tihs.coins = 10000;
		this.alias = "Nononio";

	}
}

class Cell{
	constructor(_vect){
		this.pos = _vect;
		
	}

	__draw_cell(){
		push();
		fill(49);
		stroke(49);
		rect(this.pos.x,this.pos.y,50,50);
		pop();
	}
}

class Board{
	constructor(){
		this.cells = [];
	}

}


function setup() {
	createCanvas(windowWidth, windowHeight);
	background(33);
	var c = new Cell(createVector(width/2, height/2));
	c.__draw_cell();
}

function draw() {

}