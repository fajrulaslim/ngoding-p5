function setup() {
  createCanvas(400, 400);
}

function draw() {
  let bg = '#ecf0f1';
  let green1 = '#009432';
  let green2 = '#A3CB38';
  let green3 = '#C4E538';
  let yell1 = '#d35400';
  let yell2 = '#e58e26';
  let yell3 = '#f6b93b';
  let x_awal = 120;
  let y_awal = 70;
  let ukuran = 20;
  
  let baris1 = [green1, green1, green1, bg, bg, bg, bg, bg, bg];
  let baris2 = [green1, green2, green3, green1, bg, bg, bg, bg, bg];
  let baris3 = [bg, green1, green2, green3, green1, bg, bg, bg, bg];
  let baris4 = [bg, bg, green1, green1, green1, bg, bg, bg, bg];
  let baris5 = [bg, bg, bg, bg, green1, bg, bg, bg, bg];
  let baris6 = [bg, bg, yell1, yell1, yell1, yell1, yell1, bg, bg];
  let baris7 = [bg, yell1, yell3, yell3, yell3, yell3, yell3, yell1, bg];
  let baris8 = [yell1, yell3, yell3, yell3, yell3, yell3, yell3, yell3, yell1];
  let baris9 = [yell1, yell3, yell2, yell3, yell3, yell3, yell3, yell3, yell1];
  let baris10 = [yell1, yell3, yell2, yell3, yell3, yell3, yell3, yell3, yell1];
  let baris11 = [yell1, yell3, yell2, yell3, yell3, yell3, yell3, yell3, yell1];
  let baris12 = [yell1, yell3, yell3, yell2, yell3, yell3, yell3, yell3, yell1];
  let baris13 = [bg, yell1, yell3, yell3, yell3, yell3, yell3, yell1, bg];
  let baris14 = [bg, bg, yell1, yell1, yell1, yell1, yell1, bg, bg];
  
 let baris = [baris1, baris2, baris3, baris4, baris5, baris6, baris7, baris8, baris9, baris10, baris11, baris12, baris13, baris14];
  
  background(bg);
  rectMode(CENTER);
  noStroke();
  
  for(let b=0; b<=13; b++){
    for(let i=0; i<= 8; i++){
      fill(baris[b][i]);
      rect(x_awal+(20*i), y_awal+(20*(b)), ukuran, ukuran);
    }
  }
}