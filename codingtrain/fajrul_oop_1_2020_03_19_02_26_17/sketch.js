let bubble1, bubble2;

function setup() {
  createCanvas(600, 400);
  bubble1 = new Bubble();
  bubble2 = new Bubble();
}

function draw() {
  background(0);
  bubble1.show();
  bubble1.move();
  bubble2.show();
  bubble2.move();
}

class Bubble {
  constructor() {
    this.x = 200;
    this.y = 150;
  }
  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 24, 24);
  }
  move() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }
}

// function show() {
//   stroke(255);
//   strokeWeight(4);
//   noFill();
//   ellipse(bubble.x, bubble.y, 24, 24);
// }

// function move() {
//   bubble.x += random(-5, 5);
//   bubble.y += random(-5, 5);
// }