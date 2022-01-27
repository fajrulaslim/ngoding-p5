function setup() {
  createCanvas(600, 400);
  
  var m = kmToMeter(2.5);
  print(m);
  
  // let angle = degrees(PI/2);
}

function kmToMeter(km){
  let m = km * 1000;
  return m;
}

function draw() {
  background(220);
}