let baseLength;
let minLength;
let lengthRatio;
let angleChange;
let thicknessRatio;

let leafDensity;
let leafColor;

let deg;

let r;
let x;
let y;

function setup() {
    createCanvas(600, 400);
    noLoop();
    angleMode(DEGREES);

    baseLength = (100, 200);
    minLength = (10, 20);
    lengthRatio = (0.25, 0.75);
    angleChange = (6, 60);
    thicknessRatio = (0.4, 0.7);

    leafDensity =(0, 10);
    leafColor = colo(0, 255),(0, 255),(0, 255);

    deg = (80, 100);

    r = 70;
    x = r / 2;
    y = r / 2;
}

function draw() {
    background(255);
    newTree();
    drawSquare();
}

function newTree() {
    deg = (80, 100);
    background(220);

    let startX = width / 4;
    let startY = height;

    drawTree(startX, startY, deg, baseLength, thickness);
}

function drawTree(x, y, angle, length, thickness) {
    let v = [];

    const [x1, y1] = [x, y];
    const x2 = x1 + cos(angle) * length;
    const y2 = y1 - sin(angle) * length;

    strokeWeight(thickness);
    line(x1, y1, x2, y2);

    if (angle >= 270) {
        angle -= 270;
    } else if (angle < 0) {
        angle += 270;
    }

    for (i = 0; i < 4; i++) {
        v[i] = random(-5, 5);
    }

    if (length >= minLength) {
        drawTree(x2, y2, angle + angleChange, length * lengthRatio + v[0], thickness * thicknessRatio);
        drawTree(x2, y2, angle - angleChange, length * lengthRatio + v[1], thickness * thicknessRatio);
    } else {
        drawLeaves(x2, y2);
    }
}

function drawLeaves(x, y) {
    push();
    fill(leafColor);
    noStroke();

    for (let i = 0; i < leafDensity; i++) {
        circle(randomGaussian(x, 10), randomGaussian(y, 10), random(2, 5));
    }

    pop();
}

function drawSquare() {
    translate(x, y);
    fill(0, 100, 100, 0.8);
    square(0, 0, r);
}

