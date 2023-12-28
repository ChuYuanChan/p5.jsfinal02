function setup() {
    // put setup code here
    createCanvas(480, 120);
    angleMode(DEGREES);
    background('#0000A5'); // Earth Blue
}
function draw() {
    // put drawing code here
    noFill(); 
    stroke('#FFE87C'); // Sun Yellow
    arc(90, 60, 80, 80, 0, 90);
    
    arc(190, 60, 80, 80, 0, 270);
    arc(190, 60, 60, 60, 0, 270);
    arc(190, 60, 40, 40, 0, 270);
    arc(190, 60, 20, 20, 0, 270);

    arc(390, 60, 80, 80, 45, 225);

    arc(290, 60, 80, 80, 180, 450);
    arc(290, 70, 60, 60, 180, 450);
    arc(290, 80, 40, 40, 180, 450);
    arc(290, 90, 20, 20, 180, 450);
}