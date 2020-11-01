/*
███████╗██████╗  █████╗  ██████╗███████╗    ██╗███╗   ██╗██╗   ██╗ █████╗ ██████╗ ███████╗██████╗ ███████╗
██╔════╝██╔══██╗██╔══██╗██╔════╝██╔════╝    ██║████╗  ██║██║   ██║██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔════╝
███████╗██████╔╝███████║██║     █████╗      ██║██╔██╗ ██║██║   ██║███████║██║  ██║█████╗  ██████╔╝███████╗
╚════██║██╔═══╝ ██╔══██║██║     ██╔══╝      ██║██║╚██╗██║╚██╗ ██╔╝██╔══██║██║  ██║██╔══╝  ██╔══██╗╚════██║
███████║██║     ██║  ██║╚██████╗███████╗    ██║██║ ╚████║ ╚████╔╝ ██║  ██║██████╔╝███████╗██║  ██║███████║
╚══════╝╚═╝     ╚═╝  ╚═╝ ╚═════╝╚══════╝    ╚═╝╚═╝  ╚═══╝  ╚═══╝  ╚═╝  ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝╚══════╝
  - Space Invaders game made on p5.js ...
*/
class Invader {
  constructor(pos) {
    this.rule = {
      cell_width: 10,
      body_width: 8,
    };
    this.pos = pos;
    this.scale = 0.6;
  }
  update_pos(pos) {
    this.pos = pos;
  }
}
/*
  ..#######...######..########..#######..########..##.....##..######.
  .##.....##.##....##....##....##.....##.##.....##.##.....##.##....##
  .##.....##.##..........##....##.....##.##.....##.##.....##.##......
  .##.....##.##..........##....##.....##.########..##.....##..######.
  .##.....##.##..........##....##.....##.##........##.....##.......##
  .##.....##.##....##....##....##.....##.##........##.....##.##....##
  ..#######...######.....##.....#######..##.........#######...######.
  */
class Octopus extends Invader {
  constructor(pos) {
    super(pos);
    var self = this;
  }
  draw() {
    push();
    scale(this.scale);
    beginShape();
    // Body
    push();
    rectMode(CENTER);
    fill("#00bcd5");
    stroke("#00bcd5");
    rect(
      this.pos.x,
      this.pos.y - this.rule.cell_width * 3,
      this.rule.cell_width * 2,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y - this.rule.cell_width * 2,
      this.rule.cell_width * 6,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y - this.rule.cell_width,
      this.rule.body_width * this.rule.cell_width,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y,
      this.rule.body_width * this.rule.cell_width,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width,
      this.rule.body_width * this.rule.cell_width,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width * 2,
      this.rule.cell_width * 4,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width * 3,
      this.rule.cell_width * 6,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width * 4,
      this.rule.cell_width * this.rule.body_width,
      this.rule.cell_width
    );
    pop();
    push();
    rectMode(CENTER);
    fill(0);
    stroke(0);
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width * 4,
      this.rule.cell_width * 6,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width * 3,
      this.rule.cell_width * 4,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width * 2,
      this.rule.cell_width * 2,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y,
      this.rule.cell_width * 6,
      this.rule.cell_width
    );
    pop();
    push();
    rectMode(CENTER);
    fill("#00bcd5");
    stroke("#00bcd5");
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width * 3,
      this.rule.cell_width * 2,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y,
      this.rule.cell_width * 2,
      this.rule.cell_width + 2
    );
    pop();
    endShape();
    pop();
  } // Ends Draw
}
/*
  ..######..##....##.##.....##.##.......##......
  .##....##.##...##..##.....##.##.......##......
  .##.......##..##...##.....##.##.......##......
  ..######..#####....##.....##.##.......##......
  .......##.##..##...##.....##.##.......##......
  .##....##.##...##..##.....##.##.......##......
  ..######..##....##..#######..########.########
  */
class Skull extends Invader {
  constructor(pos) {
    super(pos);
    var self = this;
  }
  draw() {
    push();
    scale(this.scale);
    beginShape();
    //   Body
    push();
    rectMode(CENTER);
    fill("green");
    stroke("green");
    rect(
      this.pos.x,
      this.pos.y - this.rule.cell_width * 3,
      this.rule.cell_width * 2,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y - this.rule.cell_width * 2,
      this.rule.cell_width * 6,
      this.rule.cell_width
    );
    pop();
    push();
    rectMode(CENTER);
    fill("green");
    stroke("green");
    rect(
      this.pos.x,
      this.pos.y - this.rule.cell_width,
      this.rule.cell_width * this.rule.body_width,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y,
      this.rule.cell_width * this.rule.body_width,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width,
      this.rule.cell_width * this.rule.body_width,
      this.rule.cell_width
    );
    pop();
    push();
    rectMode(CENTER);
    fill("green");
    stroke("green");
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width * 2,
      this.rule.cell_width * 6,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width * 3,
      this.rule.cell_width * 6,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width * 4,
      this.rule.cell_width * 4,
      this.rule.cell_width
    );
    pop();
    // Eyes and Lips
    push();
    rectMode(CENTER);
    fill(0);
    stroke(0);
    // Eyes
    rect(
      this.pos.x - this.rule.cell_width * 2,
      this.pos.y,
      this.rule.cell_width * 2,
      this.rule.cell_width
    );
    rect(
      this.pos.x + this.rule.cell_width * 2,
      this.pos.y,
      this.rule.cell_width * 2,
      this.rule.cell_width
    );
    // Lips
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width * 3,
      this.rule.cell_width * 4,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width * 2,
      this.rule.cell_width * 4,
      this.rule.cell_width
    );
    push();
    fill("green");
    stroke("green");
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width * 2 - 1,
      this.rule.cell_width * 2,
      this.rule.cell_width
    );
    pop();
    pop();
    endShape();
    pop();
  } // Ends Draw
}

/*
.########.####..######..##....##
....##.....##..##....##.##...##.
....##.....##..##.......##..##..
....##.....##..##.......#####...
....##.....##..##.......##..##..
....##.....##..##....##.##...##.
....##....####..######..##....##
*/
class Tick extends Invader {
  constructor(pos) {
    super(pos);
    var self = this;
    this.rule.body_width = 10;
    this.color = {
      r: 252,
      g: 184,
      b: 25,
    };
  }
  draw() {
    push();
    scale(this.scale);
    beginShape();
    // Body
    push();
    rectMode(CENTER);
    fill(this.color.r, this.color.g, this.color.b);
    stroke(this.color.r, this.color.g, this.color.b);
    rect(
      this.pos.x,
      this.pos.y - this.rule.cell_width * 4,
      this.rule.cell_width * 6,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y - this.rule.cell_width * 3,
      this.rule.cell_width * 4,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y - this.rule.cell_width * 2,
      this.rule.cell_width * 6,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y - this.rule.cell_width,
      this.rule.cell_width * 8,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y,
      this.rule.cell_width * this.rule.body_width,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width,
      this.rule.cell_width * this.rule.body_width,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width * 2,
      this.rule.cell_width * 4,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width * 3,
      this.rule.cell_width * 6,
      this.rule.cell_width
    );
    pop();
    push();
    rectMode(CENTER);
    fill(0);
    stroke(0);
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width * 3,
      this.rule.cell_width * 4,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width * 2,
      this.rule.cell_width * 2,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width,
      this.rule.cell_width * 8,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y - this.rule.cell_width,
      this.rule.cell_width * 4,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y - this.rule.cell_width * 3,
      this.rule.cell_width * 2,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y - this.rule.cell_width * 4,
      this.rule.cell_width * 4,
      this.rule.cell_width
    );
    pop();
    push();
    rectMode(CENTER);
    fill(this.color.r, this.color.g, this.color.b);
    stroke(this.color.r, this.color.g, this.color.b);
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width,
      this.rule.cell_width * 6,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y - this.rule.cell_width,
      this.rule.cell_width * 2,
      this.rule.cell_width
    );
    pop();
    endShape();
    pop();
  }
}

/*
....###....##....##.########
...##.##...###...##....##...
..##...##..####..##....##...
.##.....##.##.##.##....##...
.#########.##..####....##...
.##.....##.##...###....##...
.##.....##.##....##....##...
*/

class Ant extends Invader {
  constructor(pos) {
    super(pos);
    var self = this;
    this.rule.body_width = 10;
    this.color = {
      r: 187,
      g: 150,
      b: 95,
    };
  }
  draw() {
    push();
    scale(this.scale);
    beginShape();
    push();
    rectMode(CENTER);
    fill(this.color.r, this.color.g, this.color.b);
    stroke(this.color.r, this.color.g, this.color.b);
    rect(
      this.pos.x,
      this.pos.y - this.rule.cell_width * 4,
      this.rule.cell_width * 4,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y - this.rule.cell_width * 3,
      this.rule.cell_width * 2,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y - this.rule.cell_width * 2,
      this.rule.cell_width * this.rule.body_width,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y - this.rule.cell_width,
      this.rule.cell_width * this.rule.body_width,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y,
      this.rule.cell_width * this.rule.body_width,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width,
      this.rule.cell_width * this.rule.body_width,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width * 2,
      this.rule.cell_width * this.rule.body_width,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width * 3,
      this.rule.cell_width * this.rule.body_width,
      this.rule.cell_width
    );
    pop();
    push();
    rectMode(CENTER);
    fill(0);
    stroke(0);
    rect(
      this.pos.x,
      this.pos.y - this.rule.cell_width * 2,
      this.rule.cell_width * 8,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y - this.rule.cell_width,
      this.rule.cell_width * 6,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width * 3,
      this.rule.cell_width * 6,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width * 2,
      this.rule.cell_width * 8,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width,
      this.rule.cell_width * 8,
      this.rule.cell_width
    );
    pop();
    push();
    rectMode(CENTER);
    fill(this.color.r, this.color.g, this.color.b);
    stroke(this.color.r, this.color.g, this.color.b);
    rect(
      this.pos.x,
      this.pos.y - this.rule.cell_width * 2,
      this.rule.cell_width * 4,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y - this.rule.cell_width,
      this.rule.cell_width * 2,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width * 2,
      this.rule.cell_width * 2,
      this.rule.cell_width
    );
    rect(
      this.pos.x,
      this.pos.y + this.rule.cell_width,
      this.rule.cell_width * 4,
      this.rule.cell_width
    );
    pop();
    push();
    rectMode(CENTER);
    fill(0);
    stroke(0);
    rect(
      this.pos.x,
      this.pos.y - this.rule.cell_width * 4,
      this.rule.cell_width * 2,
      this.rule.cell_width
    );
    pop();
    endShape();
    pop();
  }
}


/*
.########.########...#######...######..
.##.......##.....##.##.....##.##....##.
.##.......##.....##.##.....##.##.......
.######...########..##.....##.##...####
.##.......##...##...##.....##.##....##.
.##.......##....##..##.....##.##....##.
.##.......##.....##..#######...######..
*/


class Frog extends Invader {
  constructor(pos) {
    super(pos);
    var self = this;
    this.rule.body_width = 10;
    this.color = {
      r: 125,
      g: 203,
      b: 153,
    };
  }
  draw() {
    push();
    // scale(this.scale);
    beginShape();
    push();
    rectMode(CENTER);
    fill(this.color.r, this.color.g, this.color.b);
    stroke(this.color.r, this.color.g, this.color.b);
    rect(this.pos.x,this.pos.y, this.rule.cell_width*this.rule.body_width,this.rule.cell_width);
    rect(this.pos.x,this.pos.y+this.rule.cell_width, this.rule.cell_width*8,this.rule.cell_width);
    rect(this.pos.x,this.pos.y+this.rule.cell_width*2, this.rule.cell_width*8,this.rule.cell_width);
    rect(this.pos.x,this.pos.y+this.rule.cell_width*3, this.rule.cell_width*8,this.rule.cell_width);
    rect(this.pos.x,this.pos.y+this.rule.cell_width*4, this.rule.cell_width*this.rule.body_width,this.rule.cell_width);
    
    pop();
    
    endShape();
    pop();
  }
}







var i, j;
var army = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  // Possible types of invaders => [ Octopus, Skull, Tick, Ant, Frog]

  j = new Frog(createVector(width / 2, height / 2));
  j.draw();
}
function draw() {
  // background(0);
  // j.update_pos(createVector(
  //   random(width),
  //   random(height)
  // ))
  // j.draw();
}
