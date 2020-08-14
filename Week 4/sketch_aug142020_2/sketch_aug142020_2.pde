//sketch 14 August Chantel Lai 
PImage photo; // processing image variable 
int smallPoint, largePoint, x, y,t; // integers/ variable
color pix; // colour pixels at a point 

void setup(){
smallPoint = 4;
largePoint = 40;
frameRate(80); // how fast it occurs (default is 30) 
size(500,500);
background (255);
imageMode(CENTER); // start moving the image from the center 
photo = loadImage ("33b51639ccaa37fa97a49c954f50375a.jpg"); // load the image 

}

void draw(){
//image (photo,250,250); // centering the image and loads image to fill sketch 
x=int (random(photo.width)); // finds random point across sketch (x) 
y=int (random(photo.height)); // finds random point across sketch (y) 
float pointillise = map(mouseX, 0, photo.width, smallPoint, largePoint); //creates small (x) and large dots (y) (left to right) 
int dotSize=int(pointillise); 
pix = photo.get(x,y); // use colour anywhere, find a colour where ever your mouse is (mouseX,mouseY) 
t=int(random(240)); // transparency (0 - 255) 
//fill (pix,t); // filling the circle of the colour pixel from where the mouse is 
//noStroke();
//ellipse (x,y,dotSize,dotSize); 
stroke (pix,t);
strokeWeight (10);
line (x,y,x+dotSize,y+dotSize);

}
