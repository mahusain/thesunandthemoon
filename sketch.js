function setup() {
  createCanvas(720, 400); 
  noStroke();
  imageMode(CENTER);
  img1 = loadImage("moon.png");
  img2 = loadImage("sun.png");
}

function draw() {
  background(000);
  ellipse(360, 200, 80, 80);
  fill(0, 0, 255);
  image(img1, mouseX, height/1.5, mouseY/2+5, mouseY/2+5);
  var inverseX = width-mouseX;
  var inverseY = height-mouseY;
  image(img2, inverseX, height/3, (inverseY/2)+5, (inverseY/2)+5);
}