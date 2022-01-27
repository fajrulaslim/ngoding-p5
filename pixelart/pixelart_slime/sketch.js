function setup() {
  createCanvas(400, 400);
}

function draw() {
  let clouds = '#ecf0f1';
  let orchid = '#2d3436';
  let chi = '#d63031';
  let pink = '#ff7675';
  let first = '#fab1a0';
  let x_awal = 50;
  let y_awal = 100;
  let ukuran = 20;
  
  let baris1 = [clouds, clouds, clouds, clouds, clouds, orchid ,orchid, orchid, orchid, orchid, orchid, clouds, clouds, clouds, clouds, clouds];
  let baris2 = [clouds, clouds, clouds, orchid, orchid, pink ,pink, pink, pink, pink, pink, orchid, orchid, clouds, clouds, clouds];
  let baris3 = [clouds, clouds, orchid, chi, pink, pink ,pink, pink, pink, pink, pink, pink, pink, orchid, clouds, clouds];
  let baris4 = [clouds, orchid, chi, pink, pink, pink ,pink, pink, pink, pink, first, first, pink, pink, orchid, clouds];
  let baris5 = [clouds, orchid, chi, pink, pink, pink ,pink, pink, pink, pink, first, first, first, pink, orchid, clouds];
  let baris6 = [orchid, chi, chi, pink, pink, orchid ,pink, pink, pink, pink, orchid, first, first, pink, orchid, orchid];
  let baris7 = [orchid, chi, chi, pink, pink, orchid ,pink, pink, pink, pink, orchid, pink, pink, pink, pink, orchid];
  let baris8 = [orchid, chi, chi, pink, pink, pink ,pink, pink, pink, pink, pink, pink, pink, pink, pink, orchid];
  let baris9 = [orchid, chi, chi, chi, chi, pink ,pink, pink, pink, pink, pink, pink, pink, chi, chi, orchid];
  let baris10 = [clouds, orchid, chi, chi, chi, chi ,chi, chi, chi, chi, chi, chi, chi, chi, orchid, clouds];
  let baris11 = [clouds, clouds, orchid, orchid, orchid, orchid ,orchid, orchid, orchid, orchid, orchid, orchid, orchid, orchid, clouds, clouds];
  
 let baris = [baris1, baris2, baris3, baris4, baris5, baris6, baris7, baris8, baris9, baris10, baris11];
  
  background(clouds);
  rectMode(CENTER);
  noStroke();
  
  for(let b=0; b<=10; b++){
    for(let i=0; i<= 15; i++){
      fill(baris[b][i]);
      rect(x_awal+(20*i), y_awal+(20*(b)), ukuran, ukuran);
    }
  }
}