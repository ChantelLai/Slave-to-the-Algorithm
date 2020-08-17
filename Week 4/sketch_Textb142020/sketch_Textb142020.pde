//Textb 14 August
// this sketch is painting with type 

//variables 
PFont myFont; // the font
int randchar, randSize; // character and size 
char letter; // 
 color randColorR,randColorG,randColorB; 

void setup(){
size (500,500);
background (0);
myFont = loadFont ("Aemstel-LineOutside-28.vlw"); // loading the font
}

void draw(){
  fill(0,255,0);
  textFont(myFont);
  randchar=int(random(150)+1); //random character 0-255
  randSize=int(random(75)+.1);
  letter=char(randchar); // random letter from ^
  textSize(int(randSize)+1); 
  if (mousePressed){ // the characters will show when mouse is pressed 
  text(letter,mouseX,mouseY); // where ever the mouse is pressed will show text
  }
}

void keyPressed(){
  color randColorR=int(map(mouseX,0,width,0,255));
  color randColorG=int(map(mouseY,0,height,0,255));
  color randColorB=int(map(mouseX+mouseY,0,width+height,0,255));
  background(randColorR,randColorG,randColorB);

}
