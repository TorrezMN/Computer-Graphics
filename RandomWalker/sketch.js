function setup() {
	createCanvas(windowWidth, windowHeight);

	const direction = ["arriba", "abajo", "izquierda", "derecha"];

	const random = Math.floor(Math.random() * direction.length);
	console.log(random, direction[random]);


}

function draw() {

}