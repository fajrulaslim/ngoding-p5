function setup() {
  createCanvas(600, 400);
  background(200);
}

function draw() {
  // background(200);
  
  // ellipse
  fill(10, 150, 200, 80);
  noStroke();
  ellipse(mouseX, mouseY, 20, 20);
}

function mousePressed(){
  background(200);
}