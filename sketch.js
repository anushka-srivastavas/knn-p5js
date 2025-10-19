let points = [];
let numPoints = 20; 
let k = 3;          

class Point {
  constructor() {
    this.x = Math.random() * width;
    this.y = Math.random() * height;
    this.class = floor(Math.random() * 2); 
  }

  display() {
    stroke(0);
    strokeWeight(2);
    if (this.class == 1) {
      fill(255, 0, 0); 
    } else {
      fill(0, 255, 0); 
    }
    ellipse(this.x, this.y, 20, 20);
  }
}

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < numPoints; i++) {
    points.push(new Point());
  }
}

function draw() {
  background(255);
  for (let p of points) {
    p.display();
  }
  classifyMouse();
}

function classifyMouse() {
  if (points.length < k) return;

  let distances = [];
  for (let i = 0; i < points.length; i++) {
    let d = dist(mouseX, mouseY, points[i].x, points[i].y);
    distances.push([d, points[i].class]);
  }

  distances.sort((a, b) => a[0] - b[0]);

  let numZero = 0;
  let numOne = 0;
  for (let i = 0; i < k; i++) {
    if (distances[i][1] == 1) numOne++;
    else numZero++;
  }

  noStroke();
  if (numOne > numZero) fill(255, 0, 0);
  else fill(0, 255, 0);

  ellipse(mouseX, mouseY, 10, 10);
}
