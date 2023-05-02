function setup() {
	createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {

  background(0);
  translate(width*0.5,height*0.5);
  stroke(255);
  noFill();

  beginShape();
  for (let a = 0; a<=360; a++){
    let r = 150;
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x,y);
  }
  endShape(CLOSE);
}
