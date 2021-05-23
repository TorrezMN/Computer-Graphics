var config;
var _pop = [];

class Individual {
  constructor(_pos, _acc) {
    this.pos = _pos;
    this.acc = _acc;
    this.infected = false;
    this.live = Math.random() * 1000;
    this.movement = Math.random() * 10 > 5 ? 'lineal' : Math.random() * 10 < 5 ? 'random' : 'fixed';
  }
  update() {
    if (this.infected) {
      this.live -= Math.random() * 10 > 5 ? 1:-1;
    } else {
      this.live -= Math.random() * 10 > 5 ? 0.5:-0.5;

    }



    if (this.live <= 0) {
      this.movement = 'fixed';

    }


    if (this.pos.x <= config.field_limits.x_start + 4) {
      this.acc.x *= -1;
    } else if (this.pos.x >= config.field_limits.field_width + 15) {
      this.acc.x *= -1;
    } else if (this.pos.y <= config.field_limits.y_start + 4) {
      this.acc.y *= -1;
    } else if (this.pos.y >= config.field_limits.field_height + 15) {
      this.acc.y *= -1;
    }

    if (this.movement != 'fixed') {


      if (this.movement == 'lineal') {
        this.pos.add(this.acc);

      }
      if (this.movement == 'random') {

        if (this.pos.x < config.field_limits.x_start + 4) {
          this.pos.x = config.field_limits.x_start + 4;
        } else if (this.pos.x > config.field_limits.field_width + 15) {
          this.pos.x = config.field_limits.field_width + 15;
        } else if (this.pos.y < config.field_limits.y_start + 4) {
          this.pos.y = config.field_limits.y_start + 4;
        } else if (this.pos.y > config.field_limits.field_height + 15) {
          this.pos.y = config.field_limits.field_height + 15;
        }


        this.pos.add(createVector(
          random(-3, 3),
          random(-3, 3)
        ));

      }
    }


  }

  draw() {
    push();
    ellipseMode(CENTER);

    if(this.infected){
      fill('#d32f2f');
    }else{
      fill('#2E7D32');
    }
    if(this.live<=0){
      fill('#455A64');
    }
    
    ellipse(this.pos.x, this.pos.y, 4, 4);
    pop();
  }
}
class Population {
  constructor(n_i) {
    this.individuals = [];
    this.n_individuals = n_i;
    this.infected_individuals = 0;
  }
  check_infections() {
    let infection = 0;
    for (let i of this.individuals) {
      if (i.infected) {
        infection += 1;
      }
    }
    this.infected_individuals = infection;

  }

  check_deaths() {
    for (let i of this.individuals) {
      if (i.live <= 0) {
        let ind = this.individuals.indexOf(i);
        this.individuals.splice(ind, 1);
      }
    }
  }
  get_stats() {

    return ({
      total_pop: this.individuals,
      infected: this.infected_individuals,
    })
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
    this.check_infections();
    this.check_deaths();
    // Check for infections.
    for (let i of this.individuals) {
      if (i.infected) {
        for (let j of this.individuals) {
          if (!j.infected) {
            if (dist(i.pos.x, i.pos.y, j.pos.x, j.pos.y) <= 10) {
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



function drawTitle(config, stats) {

  push();
  fill('#2E7D32');
  stroke('#2E7D32');
  textAlign(CENTER, CENTER);
  textSize(20);
  text('Sir Model Simulation', config.width * 0.88, config.height * 0.05);
  pop();

  push();
  fill('#FFFFFF');
  stroke('#FFFFFF');
  textAlign(LEFT);
  textSize(10);
  text("Total:", config.width * 0.80, config.height * 0.11);
  text(_pop.n_individuals, config.width * 0.84, config.height * 0.11);
  text("Total Infectados: ", config.width * 0.80, config.height * 0.15);
  fill('#c62828');
  stroke('#c62828');
  text(_pop.infected_individuals, config.width * 0.88, config.height * 0.15);
  pop();
}
var _pop = new Population(100);

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
  drawTitle(config, _pop.get_stats());
  drawField();
  _pop.updatePopulation();
  _pop.drawPopulation();
}
