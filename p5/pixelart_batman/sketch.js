function setup() {
  createCanvas(400, 400);
}

function draw() {
  let clouds = '#ecf0f1';
  let white = '#ffffff';
  let black = '#000000';
  let midnight = '#2C3A47';
  let blue = '#3498db';
  let flesh = '#fad390';
  let x_awal = 130;
  let y_awal = 120;
  let ukuran = 20;
  
  let baris1 = [midnight, clouds, clouds, clouds, clouds, clouds, clouds, midnight];
  let baris2 = [midnight, midnight, blue, blue, blue, midnight, blue, midnight];
  let baris3 = [midnight, black, midnight, midnight, blue, blue, midnight, midnight];
  let baris4 = [midnight, black, black, midnight, midnight, midnight, black, midnight];
  let baris5 = [midnight, white, white, black, black, white, white, midnight];
  let baris6 = [midnight, black, black, black, black, black, black, midnight];
  let baris7 = [midnight, flesh, flesh, white, white, flesh, flesh, midnight];
  let baris8 = [clouds, midnight, flesh, flesh, flesh, flesh, midnight, clouds];
  
  
  let baris = [baris1, baris2, baris3, baris4, baris5, baris6, baris7, baris8];
  
  background(clouds);
  rectMode(CENTER);
  noStroke();
  
  for(let b=0; b<=7; b++){
    for(let i=0; i<= 7; i++){
      fill(baris[b][i]);
      rect(x_awal+(20*i), y_awal+(20*(b)), ukuran, ukuran);
    }
  }
}