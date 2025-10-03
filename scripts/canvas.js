//@ts-check

/** @type { HTMLCanvasElement } */
//@ts-ignore This is an HTML Canvas
const CANVAS = document.getElementById("game-canvas");

/** @type { CanvasRenderingContext2D } */
//@ts-ignore is not null
const CTX = CANVAS.getContext("2d");

 const HEIGHT = 810;
 const WIDTH = 1526;;

CANVAS.height = HEIGHT;
CANVAS.width = WIDTH;

class Box {
	constructor(x, y, color) {
		this.x = x;
		this.y = y;
		this.color = color;

		this.speed = 10;
		this.width = 50;
		this.height = this.width;

		this.xDirection = 1;
		this.yDirection = 1;

        this.alpha = 1;
	}

	draw() {
		CTX.fillStyle = this.color;
		CTX.fillRect(this.x, this.y, this.width, this.height);
	}

	update() {
		let top = this.y;
		let bottom = this.y + 10;
		let left = this.x;
		let right = this.x + 10;

		if (top < 0) {
			// colliding with top
			this.yDirection = 1;
		} else if (bottom > HEIGHT) {
			// colliding with bottom
			this.yDirection = -1;
		}

		if (left < 0) {
			// colliding with left
			this.xDirection = 1;
		} else if (right > WIDTH) {
			// colliding with right
			this.xDirection = -1;
		}

		this.x += this.xDirection * this.speed;
		this.y += this.yDirection * this.speed;
	}
}

/** @type {Box[] } */
let boxes = [];

let colors = ["neon blue", "light blue", "cyan", "blue", "royal blue", "dark blue", "cyan", "neon blue"];
CTX.globalAlpha = 0.5;

for (let i = 0; i <= 10000; i++) {
    let color = colors[Math.floor(Math.random() * colors.length)];
    let box = new Box(WIDTH / 2, HEIGHT / 2, color);
	box.width = 50;
	box.height = 25;
    box.alpha = Math.random() * 0.9;
	box.x = Math.random() * (WIDTH - 100);
	box.y = Math.random() * (HEIGHT - 100);
	box.speed = Math.random() * 1 + 2;
	boxes.push(box);
}

let currentTimestamp = 0;

// let box = {
// 	x: 0,
// 	y: 0,
// 	speed: 5,
// 	xDirection: 1,
// 	yDirection: 1,
// 	width: 50,
// 	draw: function () {
// 		CTX.fillStyle = "red";
// 		CTX.fillRect(this.x, this.y, this.width, this.width);
// 	},
// 	update: function () {
// 		let top = this.y;
// 		let bottom = this.y + this.width;
// 		let left = this.x;
// 		let right = this.x + this.width;

// 		if (top < 0) {
// 			// colliding with top
// 			this.yDirection = 1;
// 		} else if (bottom > HEIGHT) {
// 			// colliding with bottom
// 			this.yDirection = -1;
// 		}

// 		if (left < 0) {
// 			// colliding with left
// 			this.xDirection = 1;
// 		} else if (right > WIDTH) {
// 			// colliding with right
// 			this.xDirection = -1;
// 		}

// 		this.x += this.xDirection * this.speed;
// 		this.y += this.yDirection * this.speed;
// 	},
// };

// let box2 = {
// 	x: 50,
// 	y: 50,
// 	speed: 5,
// 	xDirection: -1,
// 	yDirection: 1,
// 	width: 50,
// 	draw: function () {
// 		CTX.fillStyle = "purple";
// 		CTX.fillRect(this.x, this.y, this.width, this.width);
// 	},
// 	update: function () {
// 		let top = this.y;
// 		let bottom = this.y + this.width;
// 		let left = this.x;
// 		let right = this.x + this.width;

// 		if (top < 0) {
// 			// colliding with top
// 			this.yDirection = 1;
// 		} else if (bottom > HEIGHT) {
// 			// colliding with bottom
// 			this.yDirection = -1;
// 		}

// 		if (left < 0) {
// 			// colliding with left
// 			this.xDirection = 1;
// 		} else if (right > WIDTH) {
// 			// colliding with right
// 			this.xDirection = -1;
// 		}

// 		this.x += this.xDirection * this.speed;
// 		this.y += this.yDirection * this.speed;
// 	},
// };

function drawLoop(timestamp) {
	CTX.clearRect(0, 0, WIDTH, HEIGHT);

	boxes.forEach((b) => {
		b.draw();
		b.update();
	});

	// console.log(elapsedTime);
	requestAnimationFrame(drawLoop);
}

requestAnimationFrame(drawLoop);
