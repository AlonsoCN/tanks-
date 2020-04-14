let tank;

function setup() {
	createCanvas(800, 400);
	tank = new Tank(0, 0);
}

function draw() {
	background(51);
	tank.draw();
}

function keyTyped() {
	if (keyCode === SPACE_KEY) {
		tank.fire();
	}
}
