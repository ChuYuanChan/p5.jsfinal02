let baseLength; //代表一個基本的長度，通常用來作為其他計算的基準值
let minLength; // 代表一個最小的長度，可能用於某些條件判斷，確保長度不會低於某個特定的閾值
let lengthRatio; //代表一個長度比率，可能用於計算相對於基本長度的其他長度值
let angleChange; // 代表一個角度的變化量，可能用於旋轉或方向的計算
let thicknessRatio; //代表一個厚度比率，可能用於計算相對於基本厚度的其他厚度值

let leafDensity; //代表葉子的密度，可能用來控制生成樹葉的數量
let leafColor; //代表葉子的顏色，可能是一個顏色值或者是用於產生顏色的相關參數

let deg; //代表一個角度值，可能用於存儲或操作特定的角度

function setup() {
    // put setup code here
    createCanvas(600, 400);//背景畫布大小
    noLoop(); //一次性 draw(),而不是持續執行
    angleMode(DEGREES); //設定角度模式為度數模式
}

function draw() {
    newTree(); //畫一顆新的樹
}

function newTree() {
    background(220);

    deg = (80, 100);
    
    baseLength = (height / 8, height / 4); // 設定樹的基本長度
    minLength = (1, 10); // 設定樹的最小長度
    lengthRatio = (0.25, 0.75); // 設定樹的長度比率
    angleChange = (6, 60); // 設定樹的角度變化
    thickness = (10, 20); // 設定樹的初始厚度
    thicknessRatio = (0.4, 0.7); // 設定樹的厚度比率

    leafDensity = (0, 10); // 設定葉子的密度
    leafColor = color(0, 255), (0, 255), (0, 255)

    thickness = (10, 20);
    thicknessRatio = (0.4, 0.7);

    leafDensity = (0, 10);
    leafColor = color(0, 255), (0, 255),(0, 255);

    drawTree(width / 4, height, deg, baseLength, thickness);
}


function drawTree(x, y, angle, length, thickness) {
    let v = [];
    
    const [x1, y1] = [x, y];
    const x2 = x1 + cos(angle) * length;
    const y2 = y1 - sin(angle) * length;
  
    strokeWeight(thickness);
    line(x1, y1, x2, y2);
    
    if (angle>=270) {
        angle -= 270;
    } else if (angle<0) {
        angle += 270;
    }
    
    for (i=0; i<4; i++) {
        v[i] = random(-5, 5);
    }
    
    if (length >= minLength) {
        drawTree(x2, y2, angle + angleChange, length * lengthRatio+v[0], thickness*thicknessRatio);
        drawTree(x2, y2, angle - angleChange, length * lengthRatio+v[1], thickness*thicknessRatio);
        //drawTree(x2, y2, angle + angleChange*2, length * lengthRatio+v[2], thickness*thicknessRatio);
        //drawTree(x2, y2, angle - angleChange*2, length * lengthRatio+v[3], thickness*thicknessRatio);
    } else {
        drawLeaves(x2, y2)
    }

}

function drawLeaves(x, y) {
    push();
  
    fill(leafColor);
    noStroke();
  
    for (let i = 0; i < leafDensity; i++) {
        circle(
            randomGaussian(x, 10),
            randomGaussian(y, 10),
            random(2, 5)
        );
    }
  
    pop();
}