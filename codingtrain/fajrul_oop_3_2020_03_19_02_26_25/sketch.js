let bubble1, bubble2;

function setup() {
    createCanvas(600, 400);
    bubble1 = new Bubble(100, 200, 40);
    bubble2 = new Bubble(400, 200, 20);
}

function draw() {
    background(0);
    bubble1.show();
    bubble1.move();
    bubble2.show();
    bubble2.move();
}