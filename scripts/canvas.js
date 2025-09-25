// @ts-check

/** @type {HTMLCanvasElement } */
//@ts-ignore this is an html canvas
const CANVAS = document.getElementById("game-canvas");

/** @type {CanvasRenderingContext2D} */
//@ts-ignore
const CTX = CANVAS.getContext("2d");

const HEIGHT = 600;
const WIDTH = 800;

CANVAS.height = HEIGHT;
CANVAS.width = WIDTH;

CTX.fillStyle = "black";
CTX.fillRect(0, 0, 50, 50);

CTX.fillStyle = "red";
CTX.fillRect(400, 400, 50, 50);

CTX.fillStyle = "purple";
CTX.arc(WIDTH / 2, HEIGHT / 2, 100, 0, 2 * Math.PI);
CTX.fill();
