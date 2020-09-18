int xPos = 350; // outside the sketch window for this size graphic
void setup(){
size(300, 300);
}
 
void draw(){
  background(0);
  fill(255,0,0);
  rect(xPos, 150, 150, 10);
   rect(xPos, 50, 150, 10);
   fill(0,255,0);
   rect(xPos, 200, 150, 10);
   rect(20-xPos, 100, 150, 10);
   rect(20-xPos, 250, 150, 10);
   fill(0,0,255);
   rect(20-xPos, 250, 150, 10);
   
  xPos -=2;
  // here's the test and reset
  if(xPos < -20){
    xPos = 350;
  }
}
