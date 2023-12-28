var r = 50;
var x = r/2;
var y = r/2;

function setup() {
    // put setup code here
    createCanvas(400, 400);
    rectMode(CENTER);
    colorMode(HSB, 360, 100, 100, 1);
}
function draw() {
    // put drawing code here
     background(255);

    if (mouseIsPressed==true) {
        x = mouseX; // 取得目前耍對應的座標
        y = mouseY;
    }

    translate(x, y);
    fill(0, 100, 100, 0.8);
    square(0, 0, r);
}