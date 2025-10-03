// @ts-check

// /** @type {HTMLCanvasElement } */
// //@ts-ignore this is an html canvas
// const CANVAS = document.getElementById("game-canvas");
// const Cube = document.getElementById("");

// /** @type {CanvasRenderingContext2D} */
// //@ts-ignore
// const CTX = CANVAS.getContext("2d");

// const HEIGHT = 700;
// const WIDTH = 800;

// class Box {
// 	constructor(x, y, color) {
// 		this.x = x;
// 		this.y = y;
// 		this.color = color;

//         this.width = 10;
//         this.height = this.width;
// 	}

// 	draw() {
// 		CTX.fillStyle = "purple";
// 		CTX.fillRect(this.x, this.y, this.width, this.height);
// 	}

// 	update() {
// 		let top = this.y;
// 		let bottem = this.y + this.width;
// 		let left = this.x;
// 		let right = this.x + this.height;

// 		if (top < 0) {
// 			//colliding with top
// 			speed = speed + 0.5;
// 			this.yDirection = speed;
// 		} else if (bottem > HEIGHT) {
// 			//colliding with bottem
// 			speed = speed + 0.5;
// 			this.yDirection = -speed;
// 		}

// 		if (left < 0) {
// 			//colliding with top
// 			speed = speed + 0.5;
// 			this.xDirection = speed;
// 		} else if (right > WIDTH) {
// 			//colliding with bottem
// 			speed = speed + 0.5;
// 			this.xDirection = -speed;
// 		}

// 		this.x += this.xDirection;
// 		this.y += this.yDirection;
// 	}
// }

// CANVAS.height = HEIGHT;
// CANVAS.width = WIDTH;

// let currentTimestamp = 0;
// let speed = 1;

// let speed2 = 1;

// let box = {
// 	x: 0,
// 	y: 0,
// 	xDirection: speed,
// 	yDirection: speed,
// 	width: 100,
// 	draw: function () {
// 		CTX.fillRect(this.x, this.y, this.width, this.width);
// 		CTX.fillStyle = "red";
// 	},

// 	update: function () {
//		let top = this.y;
// 		let bottem = this.y + this.width;
// 		let left = this.x;
// 		let right = this.x + this.width;
// 		if (speed > 50) {
// 			speed = 50;
// 			console.log("Max Speed");
// 		}

// 		if (top < 0) {
// 			//colliding with top
// 			speed = speed + 0.5;
// 			this.yDirection = speed;
// 		} else if (bottem > HEIGHT) {
// 			//colliding with bottem
// 			speed = speed + 0.5;
// 			this.yDirection = -speed;
// 		}

// 		if (left < 0) {
// 			//colliding with top
// 			speed = speed + 0.5;
// 			this.xDirection = speed;
// 		} else if (right > WIDTH) {
// 			//colliding with bottem
// 			speed = speed + 0.5;
// 			this.xDirection = -speed;
// 		}

// 		this.x += this.xDirection;
// 		this.y += this.yDirection;
// 	},
// };

// let box2 = {
// 	x: 100,
// 	y: 100,
// 	xDirection: speed2,
// 	yDirection: speed2,
// 	width: 100,
// 	draw: function () {
// 		CTX.fillRect(this.x, this.y, this.width, this.width);
// 		CTX.fillStyle = "purple";
// 		console.log(speed);
// 	},

// 	update: function () {
// 		let top = this.y;
// 		let bottem = this.y + this.width;
// 		let left = this.x;
// 		let right = this.x + this.width;
// 		if (speed2 > 50) {
// 			speed2 = 50;
// 			console.log("Max Speed2");
// 		}

// 		if (top < 0) {
// 			//colliding with top
// 			speed = speed + 0.5;
// 			this.yDirection = speed;
// 		} else if (bottem > HEIGHT) {
// 			//colliding with bottem
// 			speed = speed + 0.5;
// 			this.yDirection = -speed;
// 		}

// 		if (left < 0) {
// 			//colliding with top
// 			speed = speed + 0.5;
// 			this.xDirection = speed;
// 		} else if (right > WIDTH) {
// 			//colliding with bottem
// 			speed = speed + 0.5;
// 			this.xDirection = -speed;
// 		}

// 		this.x += this.xDirection;
// 		this.y += this.yDirection;
// 	},
// };

// const intveralId = setInterval(erase, 10000)

// function erase() {
//     	CTX.clearRect(0, 0, WIDTH, HEIGHT);
// }

// function drawLoop(timestamp) {
// 	// CTX.clearRect(0, 0, WIDTH, HEIGHT);

// 	let elapesedTime = timestamp - currentTimestamp;
// 	currentTimestamp = timestamp;

// 	box.draw();
// 	box.update();

// 	box2.draw();
// 	box2.update();

// 	// console.log(elapesedTime);
// 	requestAnimationFrame(drawLoop);
// }

// requestAnimationFrame(drawLoop);

// //why did you go down here
