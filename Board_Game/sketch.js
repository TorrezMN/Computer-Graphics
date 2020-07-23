/*
██████╗  ██████╗  █████╗ ██████╗ ██████╗      ██████╗  █████╗ ███╗   ███╗███████╗
██╔══██╗██╔═══██╗██╔══██╗██╔══██╗██╔══██╗    ██╔════╝ ██╔══██╗████╗ ████║██╔════╝
██████╔╝██║   ██║███████║██████╔╝██║  ██║    ██║  ███╗███████║██╔████╔██║█████╗
██╔══██╗██║   ██║██╔══██║██╔══██╗██║  ██║    ██║   ██║██╔══██║██║╚██╔╝██║██╔══╝
██████╔╝╚██████╔╝██║  ██║██║  ██║██████╔╝    ╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗
╚═════╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝      ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝
*/

class Dice {
  constructor() {
    this.pos = createVector(100, 100);
    this.value = Math.floor(random(1, 7));
  }
  trow_dice() {
    this.value = Math.floor(random(1, 7));
  }
  draw_dice() {
    /*
		Draw dice borders.
		*/
    push();
    rectMode(CENTER);
    stroke(255);
    strokeWeight(4);
    noFill();
    rect(this.pos.x, this.pos.y, 70, 70);
    pop();
    /*
		Draw 1
		*/
    if (this.value == 1) {
      push();
      fill(255);
      ellipseMode(CENTER);
      ellipse(this.pos.x, this.pos.y, 10, 10);
      pop();
    } else if (this.value == 2) {
      /*
		Draw 2
		*/
      push();
      fill(255);
      ellipseMode(CENTER);
      ellipse(this.pos.x - 20, this.pos.y - 20, 10, 10);
      ellipse(this.pos.x + 20, this.pos.y + 20, 10, 10);
      pop();
    } else if (this.value == 3) {
      /*
		Draw 3
		*/
      push();
      fill(255);
      ellipseMode(CENTER);
      ellipse(this.pos.x - 20, this.pos.y - 20, 10, 10);
      ellipse(this.pos.x, this.pos.y, 10, 10);
      ellipse(this.pos.x + 20, this.pos.y + 20, 10, 10);
      pop();
    } else if (this.value == 4) {
      /*
		Draw 4
		*/
      push();
      fill(255);
      ellipseMode(CENTER);
      ellipse(this.pos.x - 20, this.pos.y - 20, 10, 10);
      ellipse(this.pos.x + 20, this.pos.y - 20, 10, 10);
      ellipse(this.pos.x + 20, this.pos.y + 20, 10, 10);
      ellipse(this.pos.x - 20, this.pos.y + 20, 10, 10);
      pop();
    } else if (this.value == 5) {
      /*
		Draw 5
		*/
      push();
      fill(255);
      ellipseMode(CENTER);
      ellipse(this.pos.x - 20, this.pos.y - 20, 10, 10);
      ellipse(this.pos.x + 20, this.pos.y - 20, 10, 10);
      ellipse(this.pos.x, this.pos.y, 10, 10);
      ellipse(this.pos.x + 20, this.pos.y + 20, 10, 10);
      ellipse(this.pos.x - 20, this.pos.y + 20, 10, 10);
      pop();
    } else if (this.value == 6) {
      /*
		Draw 6
		*/
      push();
      fill(255);
      ellipseMode(CENTER);
      ellipse(this.pos.x - 20, this.pos.y - 20, 10, 10);
      ellipse(this.pos.x + 20, this.pos.y - 20, 10, 10);
      ellipse(this.pos.x - 20, this.pos.y, 10, 10);
      ellipse(this.pos.x + 20, this.pos.y, 10, 10);
      ellipse(this.pos.x + 20, this.pos.y + 20, 10, 10);
      ellipse(this.pos.x - 20, this.pos.y + 20, 10, 10);
      pop();
    }
  }
}

class Card{
  constructor(_pos, val){
    this.pos = _pos;
    this.reward = {
      'value':Math.floor(random(100,3000)),
      'kind': Math.floor(random())>1?1:-1,
    };
    this.value = val;
  }
  draw(){
    push();
    rectMode(CENTER);
    stroke(255);
    strokeWeight(4);
    noFill();
    rect(this.pos.x,this.pos.y, 50,100);
    pop();
  }
}

class Deck{
  constructor(){
    this.cards = [];
    this.build_deck();
  }
  build_deck(){
    for (var i=0; i<=32;i++){
      this.cards.push(
        new Card(createVector(width/2, height/2), i)
      );
    }
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(33);
  d = new Deck();
  console.log(d);
  
}
function draw() {}
