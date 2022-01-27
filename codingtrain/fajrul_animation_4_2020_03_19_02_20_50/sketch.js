// let col = 0;
let r = 0;
let b = 255;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  // background
  // col = map(mouseX, 0, 600, 0, 255);
  r = map(mouseX, 0, 600, 0, 255);
  b = map(mouseX, 0, 600, 255, 0);
  background(r, 0, b)
  
  // ellipse
  fill(250, 118, 222);
  ellipse(mouseX, 200, 64, 64);
}