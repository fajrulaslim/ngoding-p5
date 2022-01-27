let nums = [100, 25, 46, 72];
let num = 23;

let words = ['yellow', 'blue', 'red', 'green'];
let index = 0;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  ellipse(100, 50, num, num);
  ellipse(200, 50, nums[2], nums[2]);
  
  fill(255);
  textSize(30);
  text(words[index], 15, 200);
}

function mousePressed(){
  index += 1;
  
  if(index == words.length){
    index = 0;
  }
}