let nums = [100, 25, 46, 72];

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(0);
  
  stroke(255);
  noFill();
  for(let i=0; i<nums.length; i++){
    ellipse(i*100 + 100, 200, nums[i], nums[i]);
  }
}