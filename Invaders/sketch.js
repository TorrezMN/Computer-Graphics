class Invader {
  constructor(pos, range) {
    this.rule = {
      cell_width: 10,
      body_width: 8,
    };
    this.pos = pos;
    this.range = range;
  }
  draw_invader() {
    switch (this.range) {
      case "ufo":
        this.draw_ufo();
        break;

      case "skull":
        this.draw_skull();
        break;
    }
  }
  update_pos(pos) {
    this.pos = pos;
  }

  draw_ufo() {
    // Body
    push();
    rectMode(CENTER);
    fill("#00bcd5");
    stroke("#00bcd5");
    rect(
      this.pos.x,
      
    )
    pop();
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
}

var i;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  // Possible types of invaders => [ ufo, skull, ]
  i = new Invader(createVector(windowWidth / 2, windowHeight / 2), "ufo");
  i.draw_invader();
}

function draw() {
  //   background(0);
  //   i.draw_invader();
  //   i.update_pos(createVector(mouseX, mouseY));
}
