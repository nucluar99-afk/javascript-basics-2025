// @ts-check

/** @type {HTMLCanvasElement } */
//@ts-ignore this is an html canvas
const CANVAS = document.getElementById("game-canvas");
const Cube = document.getElementById("");

/** @type {CanvasRenderingContext2D} */
//@ts-ignore
const CTX = CANVAS.getContext("2d");

const HEIGHT = 700;
const WIDTH = 800;

CANVAS.height = HEIGHT;
CANVAS.width = WIDTH;

let currentTimestamp = 0;
let speed = 5;



let box = {
	x: 0,
	y: 0,
    xDirection: speed,
    yDirection: speed,
	width: 100,
	draw: function () {
		CTX.fillRect(this.x, this.y, this.width, this.width);
	},

    
    update: function() {
        let top = this.y;
        let bottem = this.y + this.width;
        let left = this.x;
        let right = this.x + this.width;
        if (speed > 250) {
            speed = 250;
            console.log("Max Speed");
        };

        if (top < 0) {
            //colliding with top
            speed = speed + 1
            this.yDirection = speed;
        } else if (bottem > HEIGHT) {
            //colliding with bottem
             speed = speed + 1
            this.yDirection= -speed;
        }

        if (left < 0) {
            //colliding with top
             speed = speed + 1
            this.xDirection = speed;
        } else if (right > WIDTH) {
            //colliding with bottem
             speed = speed + 1
            this.xDirection= -speed;
        }

        this.x += this.xDirection;
        this.y += this.yDirection;
    },
};

function drawLoop(timestamp) {
	CTX.clearRect(0, 0, WIDTH, HEIGHT);

	let elapesedTime = timestamp - currentTimestamp;
	currentTimestamp = timestamp;

    box.draw();
    box.update();

	// console.log(elapesedTime);
	requestAnimationFrame(drawLoop);
}

requestAnimationFrame(drawLoop);























































































































































































































































































































































































































































































































//why did you go down here