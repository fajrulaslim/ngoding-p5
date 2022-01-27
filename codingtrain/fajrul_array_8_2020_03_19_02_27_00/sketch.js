let bubbles = [];
let flower;
let kittens = [];

function preload(){
  flower = loadImage('flower.jpeg');
  for(let i=0; i<5; i++){
    kittens[i] = loadImage('kat'+ i +'.jpg');
  }
}

function setup() {
  createCanvas(600, 400);
  for(let i=0; i<10; i++){
    let x = random(width);
    let y = random(height);
    let r = random (20, 60);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function draw() {
  background(0);
  
  for(let b of bubbles){
    b.show();
    b.move();
    let overlapping = false;
    
    for(let other of bubbles){
      if(b !== other && b.intersects(other)){
        overlapping = true;
      }
    }
    if(overlapping){
      b.colorChange(255);
    } else {
      b.colorChange(0);
    }
  }
}

class Bubble {
  constructor(x, y, r, img){
    this.x = x;
    this.y = y;
    this.kitten = img
  }
  
  intersects(other){
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r + other.r);
  }
  
  colorChange(bright){
    this.brightness = bright;
  }
  
  contains(px, py){
    let d = dist(px, py, this.x, this.y);
    if(d < r){
      return true;
    } else {
      return false;
    }
  }
  
  move(){
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }
  
  show(){
    image(kittens[0], this.x, this.y, this.r, this.r);
    // stroke(255);
    // strokeWeight(4);
    // fill(this.brightness, 125);
    // ellipse(this.x, this.y, this.r*2);
  }
}