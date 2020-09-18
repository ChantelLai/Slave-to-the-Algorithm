int x = 100;
int lineDistance=0;
void setup() {
  size(640, 360);
}

void draw () {
  translate(-frameCount%28,0);
  background(0);

  stroke(255,0,0);
  strokeWeight(5);
line (5,lineDistance,300,200-lineDistance);
stroke (215, 180, 250); //or noStroke()


  x=7;
  while (x<width+28) { //+28 as you need to draw an extra line
    line(x, 0, x, height);
    x=x+28;
  }
}
