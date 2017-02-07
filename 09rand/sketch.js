var pos = {
  x: 50,
  y: 50
};

var col = {
  r: 255,
  g: 0,
  b: 0
};

function setup() {
  createCanvas(600, 600);
  background(0);
}

function draw() {
  noStroke();
  pos.x = random(0, width);
  pos.y = random(0, height);
  col.r = random(100,255);
  col.g = 0;
  col.b = random(100, 175);
  fill(col.r, col.g, col.b, 200);
  ellipse(pos.x, pos.y, 30, 30);
}
