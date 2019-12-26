/*
 ________  ________  ___  ________  ___  __    ________           ________  ________  _____ ______   _______
|\   __  \|\   __  \|\  \|\   ____\|\  \|\  \ |\   ____\         |\   ____\|\   __  \|\   _ \  _   \|\  ___ \
\ \  \|\ /\ \  \|\  \ \  \ \  \___|\ \  \/  /|\ \  \___|_        \ \  \___|\ \  \|\  \ \  \\\__\ \  \ \   __/|
 \ \   __  \ \   _  _\ \  \ \  \    \ \   ___  \ \_____  \        \ \  \  __\ \   __  \ \  \\|__| \  \ \  \_|/__
  \ \  \|\  \ \  \\  \\ \  \ \  \____\ \  \\ \  \|____|\  \        \ \  \|\  \ \  \ \  \ \  \    \ \  \ \  \_|\ \
   \ \_______\ \__\\ _\\ \__\ \_______\ \__\\ \__\____\_\  \        \ \_______\ \__\ \__\ \__\    \ \__\ \_______\
    \|_______|\|__|\|__|\|__|\|_______|\|__| \|__|\_________\        \|_______|\|__|\|__|\|__|     \|__|\|_______|
                                                 \|_________|
	- Classic "Bricks Game" writen in javascript.

*/

// Helper classes.
function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

class Brick {
	constructor(vect) {
		this.pos = vect;
		this.color = getRandomColor();
		
	}

	__draw_brick() {
		
			push();
			rectMode(CENTER);
			fill(this.color);
			stroke(this.color);
			rect(this.pos.x, this.pos.y, 50, 15);
			pop();
		
	}
}

class Wall {
	constructor() {
		this.bricks = [];
		this.__build_wall();
	}

	__build_wall() {
		var x = 0;
		var y = 15;
		for (var i = 0; i <= 10; i++) {
			for (var j = 0; j <= 27; j++) {
				this.bricks.push(new Brick(createVector(x, y)));
				x += 51;
			}
			x = 0;
			y += 16;
		}
	}

	__draw_wall() {
		for (var i in this.bricks) {
			this.bricks[i].__draw_brick();
		}
	}
}

class Pad {
	constructor() {
		this.pos = createVector(width / 2, height - 20);
		this.color = 150;
	}

	__update_pad(vect) {
		this.pos.add(vect);

	}
	__draw_pad() {
		push();
		rectMode(CENTER);
		fill(this.color);
		stroke(this.color);
		rect(this.pos.x, this.pos.y, 60, 10);
		pop();
	}


}

class Ball {
	constructor() {
		this.pos = createVector(width / 2, height - 30);
		this.color = 'red';
		this.acc = createVector(-1, -10);
	}

	__update_ball() {
		this.pos.add(this.acc);

	}
	__draw_ball() {
		push();
		fill(this.color);
		stroke(this.color);
		ellipse(this.pos.x, this.pos.y, 10, 10);
		pop();
	}
}



/*
 ######  #######    ######
 #     # #          #     #   ##   #####  #####
 #     # #          #     #  #  #  #    #   #
 ######  ######     ######  #    # #    #   #
 #             #    #       ###### #####    #
 #       #     #    #       #    # #   #    #
 #        #####     #       #    # #    #   #

*/

var game;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(43);

	game = {
		'started': false,
		'wall': new Wall(),
		'pad': new Pad(),
		'ball': new Ball(),
		'redraw': function () {
			background(43);
			this.wall.__draw_wall();
			this.pad.__draw_pad();
			this.ball.__draw_ball();
		},

	}

	game.redraw();

}

function draw() {
	if (game.started) {
		game.ball.__update_ball();
		game.redraw();


		// Key Events
		if (keyIsDown(LEFT_ARROW)) {
			game.pad.pos.add(createVector(-10, 0));
			game.redraw();
		} else if (keyIsDown(RIGHT_ARROW)) {
			game.pad.pos.add(createVector(10, 0));
			game.redraw();
		}



		// Check if ball hit the wall.
		for (var i in game.wall.bricks){
			if (dist(
				game.ball.pos.x, game.ball.pos.y,
				game.wall.bricks[i].pos.x, game.wall.bricks[i].pos.y
			)<=10){ 
				
				game.wall.bricks.splice(i, 1);
				game.ball.acc.mult(-1); 
			}
		}

		// Check if ball hit the pad.
		// pad 60x10
		if (
			game.ball.pos.x >= game.pad.pos.x-30 && 
			game.ball.pos.x <= game.pad.pos.x+30 && 
			game.ball.pos.y >= game.pad.pos.y-10 
			){
				game.ball.acc.mult(-1);
			}


		
	}
	
			if (keyIsDown(32)) {
				game.started = true;
			}
}


