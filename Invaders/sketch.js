class Invader {
  constructor(pos, range) {
    this.rule = {
      cell_width: 10,
      body_width: 8,
    };
    this.pos = pos;
    this.range = range;
    this.identify = true;
  }
  draw_invader() {
    switch (this.range) {
      case "octopus":
        this.draw_octopus();
        break;

      case "skull":
        this.draw_skull();
        break;
      case "crab":
        this.draw_crab();
        break;
    }
  }
  update_pos(pos) {
    this.pos = pos;
  }

  draw_octopus() {
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
      this.rule.cell_width
    );
    pop();
    if (this.identify) {
      push();
      textAlign(CENTER, CENTER);
      fill("orange");
      stroke("orange");
      text(
        "Octopus",
        this.pos.x,
        this.pos.y + this.rule.cell_width * 10
         );
      pop();
    }
  }
  draw_skull() {
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
      this.pos.y + this.rule.cell_width * 2,
      this.rule.cell_width * 2,
      this.rule.cell_width
    );
    pop();
    pop();
  }

  draw_crab() {
    push();

    pop();
  }
}

var i;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  // Possible types of invaders => [ octopus, skull, crab]
  i = new Invader(createVector(windowWidth / 2, windowHeight / 2), "skull");
  i.draw_invader();
}

function draw() {
  // background(0);
  // i.draw_invader();
  // i.update_pos(createVector(mouseX, mouseY));
}
