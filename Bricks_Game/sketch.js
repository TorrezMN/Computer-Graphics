/*
██████╗ ██████╗ ██╗ ██████╗██╗  ██╗███████╗     ██████╗  █████╗ ███╗   ███╗███████╗
██╔══██╗██╔══██╗██║██╔════╝██║ ██╔╝██╔════╝    ██╔════╝ ██╔══██╗████╗ ████║██╔════╝
██████╔╝██████╔╝██║██║     █████╔╝ ███████╗    ██║  ███╗███████║██╔████╔██║█████╗
██╔══██╗██╔══██╗██║██║     ██╔═██╗ ╚════██║    ██║   ██║██╔══██║██║╚██╔╝██║██╔══╝
██████╔╝██║  ██║██║╚██████╗██║  ██╗███████║    ╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗
╚═════╝ ╚═╝  ╚═╝╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝     ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝

	- Bricks game implemented using p5js.

====================================
Brick Size
====================================
width : 30
height : 10

====================================
Wall Size
====================================
width: 42
height: 10

====================================
Pad Size
====================================
width: 50
height:10

====================================
Ball Size
====================================
diameter:10

*/

/*
██╗  ██╗███████╗██╗     ██████╗ ███████╗██████╗      ██████╗██╗      █████╗ ███████╗███████╗███████╗███████╗
██║  ██║██╔════╝██║     ██╔══██╗██╔════╝██╔══██╗    ██╔════╝██║     ██╔══██╗██╔════╝██╔════╝██╔════╝██╔════╝
███████║█████╗  ██║     ██████╔╝█████╗  ██████╔╝    ██║     ██║     ███████║███████╗███████╗█████╗  ███████╗
██╔══██║██╔══╝  ██║     ██╔═══╝ ██╔══╝  ██╔══██╗    ██║     ██║     ██╔══██║╚════██║╚════██║██╔══╝  ╚════██║
██║  ██║███████╗███████╗██║     ███████╗██║  ██║    ╚██████╗███████╗██║  ██║███████║███████║███████╗███████║
╚═╝  ╚═╝╚══════╝╚══════╝╚═╝     ╚══════╝╚═╝  ╚═╝     ╚═════╝╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚══════╝

*/

function getRandomColor() {
  var letters = "0123456789ABCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/*
 ██████╗  █████╗ ███╗   ███╗███████╗     ██████╗██╗      █████╗ ███████╗███████╗███████╗
██╔════╝ ██╔══██╗████╗ ████║██╔════╝    ██╔════╝██║     ██╔══██╗██╔════╝██╔════╝██╔════╝
██║  ███╗███████║██╔████╔██║█████╗      ██║     ██║     ███████║███████╗█████╗  ███████╗
██║   ██║██╔══██║██║╚██╔╝██║██╔══╝      ██║     ██║     ██╔══██║╚════██║██╔══╝  ╚════██║
╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗    ╚██████╗███████╗██║  ██║███████║███████╗███████║
 ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝     ╚═════╝╚══════╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝

*/
class Brick {
  constructor(pos) {
    this.pos = pos;
    this.color = getRandomColor();
    this.hit = false;
  }
  draw_brick() {
    if (!this.hit) {
      push();
      fill(this.color);
      stroke(this.color);
      rectMode(CENTER);
      rect(this.pos.x, this.pos.y, 30, 10);
      pop();
    }
  }
}

class Pad {
  constructor(pos) {
    this.pos = pos;
    this.color = getRandomColor();
  }
  draw_pad() {
    push();
    fill(this.color);
    stroke(this.color);
    rectMode(CENTER);
    rect(this.pos.x, this.pos.y, 50, 10);
    ellipse(this.pos.x - 25, this.pos.y, 10, 10);
    ellipse(this.pos.x + 25, this.pos.y, 10, 10);
    pop();
  }
}

class Ball {
  constructor(pos) {
    this.pos = pos;
    this.color = getRandomColor();
    this.acc = createVector(
      Math.random() * 10 > 5 ? 5 : -5,
      Math.random() * 10 > 5 ? 5 : -5
    );
  }
  update_ball() {
    if (this.pos.x <= 5 || this.pos.x >= windowWidth - 5) {
      this.acc.x *= -1;
    }
    this.pos.add(this.acc);
    this.draw_ball();
  }
  draw_ball() {
    push();
    fill(this.color);
    stroke(this.color);
    ellipseMode(CENTER);
    ellipse(this.pos.x, this.pos.y, 10, 10);
    pop();
  }
}

/*
 ██████╗  █████╗ ███╗   ███╗███████╗    ███████╗███╗   ██╗ ██████╗ ██╗███╗   ██╗███████╗
██╔════╝ ██╔══██╗████╗ ████║██╔════╝    ██╔════╝████╗  ██║██╔════╝ ██║████╗  ██║██╔════╝
██║  ███╗███████║██╔████╔██║█████╗      █████╗  ██╔██╗ ██║██║  ███╗██║██╔██╗ ██║█████╗
██║   ██║██╔══██║██║╚██╔╝██║██╔══╝      ██╔══╝  ██║╚██╗██║██║   ██║██║██║╚██╗██║██╔══╝
╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗    ███████╗██║ ╚████║╚██████╔╝██║██║ ╚████║███████╗
 ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝    ╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝╚═╝  ╚═══╝╚══════╝

*/

var wall = [];
var wall_length = 0;
var pad;
var ball;
var game_started = false;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  // Building the brick wall.
  var x_start = 30;
  var y_start = 10;
  game_started = true;

  if (game_started) {
    for (let j of [...Array(10).keys()]) {
      for (let i of [...Array(42).keys()]) {
        wall.push(new Brick(createVector(x_start, y_start)));
        x_start += 32;
      }
      x_start = 30;
      y_start += 12;
    }

    wall_length = wall.length;
    console.log(wall_length);
    // Making and drawing the pad.
    pad = new Pad(createVector(width / 2, height - 8));
    pad.draw_pad();

    // // Making and drawing the ball.
    ball = new Ball(createVector(30, height / 2));
    ball.update_ball();

    // Drawing the wall.
    for (let i of wall) {
      i.draw_brick();
    }
  }
}

function draw() {
  // Draw black background.
  background(0);
  // Drawing the wall.
  for (let i of wall) {
    i.draw_brick();
  }
  // Drawing the pad.
  pad.draw_pad();

  // Drawing the ball.
  ball.update_ball();

  // Check if the ball touched the pad.
  if (ball.pos.x >= pad.pos.x - 30 && ball.pos.x <= pad.pos.x + 30) {
    if (ball.pos.y >= pad.pos.y - 15) {
      ball.acc.y *= -1;
    }
  }

  // Check if the ball hit the wall.
  for (let i of wall) {
    if (!i.hit) {
      let dist_ball_wall = dist(ball.pos.x, ball.pos.y, i.pos.x, i.pos.y);
      if (dist_ball_wall <= 20) {
        // let index = wall.indexOf(i);
        // wall.splice(index, 1);
        ball.acc.y *= -1;
        i.hit = true;
      }
    }
  }

  // Handle "key pressed" events for pad.
  if (keyIsDown(LEFT_ARROW)) {
    pad.pos.x -= 10;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    pad.pos.x += 10;
  }

  if (keyIsDown(32)) {
    ball.pos.x = width / 2;
    ball.pos.y = height / 2;
    for (let i of wall) {
      i.hit = false;
    }
  }

  if (ball.pos.y >= windowHeight) {
    push();
    fill("red");
    stroke("red");
    textAlign(CENTER, CENTER);
    textSize(40);
    text(
      "You have lost!\n Press the space bar to restart.",
      width / 2,
      height / 2
    );
    pop();
  }
}
