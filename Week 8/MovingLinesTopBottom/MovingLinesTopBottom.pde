// Sketch lines pattern 
int lineDistance=0;
void setup () {
size (500, 500);
background (0); 
frameRate(15);
}

void draw () {
stroke (215, 180, 250); //or noStroke()
line (0,lineDistance,500,lineDistance);
lineDistance+=10;
stroke (200, 0, 0);
line (2,lineDistance,400,100-lineDistance/100);
lineDistance+=4;
stroke (0, 200, 0);
line (1,lineDistance,300,lineDistance);
lineDistance+=7;

strokeWeight (1);
fill (255, 175, 175);
if (lineDistance>=500){
  lineDistance=0;
  background (0); 
}
}
