var config;
var _pop = [];

class Individual {
  constructor(_pos, _acc) {
    this.pos = _pos;
	this.acc = _acc;
	this.infected = false;
  this.movement = Math.random()*10>5? 'lineal':Math.random()*10<5? 'random':'fixed';
  }
  update() {

    if (this.pos.x <= config.field_limits.x_start + 4) {
      this.acc.x *= -1;
    } else if (this.pos.x >= config.field_limits.field_width + 15) {
      this.acc.x *= -1;
    } else if (this.pos.y <= config.field_limits.y_start + 4) {
      this.acc.y *= -1;
    } else if (this.pos.y >= config.field_limits.field_height + 15) {
      this.acc.y *= -1;
    }

    if(this.movement!='fixed'){
    

    if(this.movement=='lineal'){
    this.pos.add(this.acc);
      
    }
    if(this.movement=='random'){

  if (this.pos.x < config.field_limits.x_start + 4) {
      this.pos.x =config.field_limits.x_start+4;
    } else if (this.pos.x > config.field_limits.field_width + 15) {
      this.pos.x =config.field_limits.field_width + 15;
    } else if (this.pos.y < config.field_limits.y_start + 4) {
      this.pos.y =config.field_limits.y_start + 4;
    } else if (this.pos.y > config.field_limits.field_height + 15) {
      this.pos.y =config.field_limits.field_height + 15;
    }


    this.pos.add(createVector(
      random(-3,3),
      random(-3,3)
      ));
      
    }
    }


  }
  
  draw() {
	push();
	ellipseMode(CENTER);
	if(!this.infected){
		fill(255);
	}else if(this.infected){
		fill(255,0,0);

	}
    ellipse(this.pos.x, this.pos.y, 4, 4);
    pop();
  }
}
class Population {
  constructor(n_i) {
    this.individuals = [];
    this.n_individuals = n_i;
  }
  makePopulation() {
    for (var i = 0; i <= this.n_individuals; i++) {
      this.individuals.push(
        new Individual(
          createVector(
            random(
              config.field_limits.x_start,
              config.field_limits.field_width
            ),
            random(
              config.field_limits.y_start,
              config.field_limits.field_height
            )
          ),
          createVector(
            Math.floor(random(1, 100)) >= 50 ? 1 : -1,
            Math.floor(random(1, 100)) <= 50 ? 1 : -1
          )
        )
      );
    }
  }
  updatePopulation() {

    // Check for infections.
	 for(let i of this.individuals){
    if(i.infected){
      for(let j of this.individuals){
        if(!j.infected){
          if(dist(i.pos.x,i.pos.y,j.pos.x,j.pos.y)<=10){
            j.infected = true;
          };

        }
      }
    }
   }
 
	
    for (var i = 0; i <= this.individuals.length - 1; i++) {
      this.individuals[i].update();
    }
  }
  drawPopulation() {
    for (var i = 0; i <= this.individuals.length - 1; i++) {
      this.individuals[i].draw();
    }
  }
}

function drawField() {
  push();
  noFill();
  stroke(255);
  rect(
    config.field_limits.x_start,
    config.field_limits.y_start,
    config.field_limits.field_width,
    config.field_limits.field_height
  );
  pop();
}

var _pop = new Population(50);

function setup() {
  config = {
    width: windowWidth,
    height: windowHeight,
    background: 0,
    field_limits: {
      x_start: 20,
      y_start: 20,
      field_width: null,
      field_height: null,
    },
  };
  config.field_limits.field_width = config.width * 0.75;
  config.field_limits.field_height = config.height * 0.93;

  createCanvas(config.width, config.height);
  background(config.background);

  drawField();
  _pop.makePopulation();
  _pop.drawPopulation();
  _pop.individuals[4].infected = true;
}

function draw() {
  background(0);
  drawField();
  _pop.updatePopulation();
  _pop.drawPopulation();
}
