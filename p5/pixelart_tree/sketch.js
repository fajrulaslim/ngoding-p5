function setup() {
  createCanvas(400, 400);
}

function draw() {
  let clouds = '#ecf0f1';
  let silver = '#bdc3c7';
  let midnight_blue = '#2c3e50';
  let greensea = '#16a085';
  let emerald = '#b8e994';
  let pomegranate = '#b33939';
  let carrot = '#e17055'
  let x_awal = 120;
  let y_awal = 40;
  let ukuran = 20;
  
  let baris1 = [clouds, clouds, midnight_blue, midnight_blue, midnight_blue, midnight_blue, clouds, clouds];
  let baris2 = [clouds, midnight_blue, greensea, emerald, emerald, emerald, midnight_blue, clouds];
  let baris3 = [midnight_blue, greensea, greensea, greensea, emerald, emerald, emerald,  midnight_blue]; 
  let baris4 = [midnight_blue, greensea, greensea, greensea, emerald, emerald, emerald,  midnight_blue]; 
  let baris5 = [midnight_blue, greensea, greensea, emerald, emerald, emerald, emerald,  midnight_blue]; 
  let baris6 = [midnight_blue, greensea, greensea, greensea, emerald, emerald, emerald, midnight_blue];
  let baris7 = [midnight_blue, greensea, greensea, greensea, emerald, emerald, emerald, midnight_blue];
  let baris8 = [midnight_blue, greensea, greensea, greensea, greensea, emerald, emerald, midnight_blue];
  let baris9 = [midnight_blue, greensea, greensea, greensea, emerald, emerald, emerald, midnight_blue];
  let baris10 = [midnight_blue, greensea, greensea, emerald, emerald, emerald, emerald, midnight_blue];
  let baris11 = [midnight_blue, greensea, greensea, greensea, emerald, emerald, greensea, midnight_blue];
  let baris12 = [clouds, midnight_blue, greensea, greensea, greensea, greensea, midnight_blue, clouds];
  let baris13 = [clouds, clouds, midnight_blue, greensea, carrot, midnight_blue, clouds, clouds];
  let baris14 = [clouds, clouds, midnight_blue, pomegranate, carrot, midnight_blue, clouds, clouds];
  let baris15 = [clouds, silver, midnight_blue, pomegranate, pomegranate, carrot, midnight_blue, clouds];
  let baris16 = [silver, midnight_blue, pomegranate, carrot, carrot, pomegranate, midnight_blue, silver];
  let baris17 = [clouds, silver, silver, silver, silver, silver, silver, clouds];
  
  let baris = [baris1, baris2, baris3, baris4, baris5, baris6, baris7, baris8, baris9, baris10, baris11, baris12, baris13, baris14, baris15, baris16, baris17];
  
  background(clouds);
  rectMode(CENTER);
  noStroke();
  
  // Gambar
  for(let b=0; b<=16; b++){
    for(let i=0; i<= 7; i++){
      fill(baris[b][i]);
      rect(x_awal+(20*i), y_awal+(20*(b)), ukuran, ukuran);
    }
  }
}