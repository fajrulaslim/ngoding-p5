let bubble = [];

function setup() {
    createCanvas(600, 400);
    for(let i=0; i<2; i++){
      let x = random(width);
      let y = random(height);
      let r = random(10, 40)
      bubble[i] = new Bubble(x, y, r);
    }
}

function mousePressed(){
  let r = random(10, 50);
  let b = new Bubble(mouseX, mouseY, r);
  bubble.push(b);
}

function draw() {
    background(0);
    for(let elt of bubble){
      elt.move();
      elt.show();
    }
    // for(let i=0; i<bubble.length; i++){
    //   bubble[i].show();
    //   bubble[i].move();
    // }
}