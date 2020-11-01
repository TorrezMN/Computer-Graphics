const s = ( p ) => {

	let x = 100; 
	let y = 100;
  
	p.setup = function() {
	  p.createCanvas(700, 410);
	};
  
	p.draw = function() {
	  p.background('#ff9800');
	  p.fill(255);
	  p.rect(x,y,50,50);
	};
  };
const d = ( p ) => {

	let x = 100; 
	let y = 100;
  
	p.setup = function() {
	  p.createCanvas(700, 410);
	};
  
	p.draw = function() {
	  p.background('#4caf50');
	  p.fill(255);
	  p.rect(x,y,50,50);
	};
  };
  
  let myp5 = new p5(s);
  let myp3 = new p5(d);



//   var myp5 = new p5(t, 'c2'); el segundo argumento le da la ubicacion dentro de la pagina....