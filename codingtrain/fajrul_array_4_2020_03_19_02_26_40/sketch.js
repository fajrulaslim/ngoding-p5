let bubbles = [];
// let bubble;

function setup() {
  createCanvas(600, 400);
  for(let i=0; i<5; i++){
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);
    // bubble = new Bubble(x, y, r);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function mousePressed(){
  // bubble.clicked();
  for(let i=0; i< bubbles.length; i++){
    bubbles[i].clicked(mouseX, mouseY);
  }
}

function draw() {
  background(0);
  // bubble.show();
  // bubble.move();
  for(let i=0; i< bubbles.length; i++){
    bubbles[i].show();
    bubbles[i].move();
  }
}

class Bubble {
  constructor(tempX, tempY, tempR) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
    this.brightness = 0; 
  }
  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
  move() {
      this.x += random(-5, 5);
      this.y += random(-5, 5);
  }
  clicked(px, py){
    let d = dist(px, py, this.x, this.y);
    if(d < this.r){
      this.brightness = 125;
    }  
  }
}