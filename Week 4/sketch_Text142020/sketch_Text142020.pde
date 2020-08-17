// Text sketch 14 August 
PFont avenir, baskerville;
float spin=0;

void setup(){
 size (500,500);
background (255);
smooth(4); // smoothness of text 
avenir= loadFont ("Avenir-Medium-48.vlw"); // loads fonts
baskerville= loadFont ("Baskerville-Italic-28.vlw"); // loads fonts
textAlign (CENTER,CENTER); // alignment 
frameRate (10); // sets animation speed

}

void draw(){
  fill(0,255,0);
  translate(width/2,height/2);
  spin+=.1; // spins the text rotaion value 
  rotate(spin); // PI/2 = 90 degree angle
  
  textFont(avenir); 
  textSize(30);
  text("MY INTERNET IS NOT WORKING", 0,0); // text (font, x,y)
  fill(0,20);
  //noStroke();
  rect(-width/2, -height/2,width,height); // rotates the background square as well -width/2 = left -height/2= up 
}

void keyPressed(){
 //background (0); // changes the background 
  }
  //textFont(baskerville); 
  //textSize(28);
  //text("My internet is not working", width/2,height/2);
