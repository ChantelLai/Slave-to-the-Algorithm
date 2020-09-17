//Sketch 11 september Wiggly letters 

var letter,size,rand,speed,colour;
var wigglets = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  textSize(32);
  textFont("Times");
  start = 0;
}

function draw() {
  fill(0,255,0);
  background(0); //refreshes page back to black 
  for(var i=0; i<wigglets.length; i++){ //each of the wigglets that we have 
    wigglets[i].wiggle(); // for it to wiggle
    wigglets[i].display(); // for the text to diplay 
  }
}

function mousePressed() {
  rand = int(random(65-160)); // 
  letter = char(rand); // random letters and characters
  size = random(2,96); //random sizes 
  //speed = random(1,4);
  speed = int(100-size)/4; 
  //colour = int(random(100,255)); 
  wigglets.push(new Wiggle(mouseX,mouseY,size,letter,speed)); // everyframe to push a new letter been put into wiggle with mouse
}
function keyTyped(){
 wigglets.push(new Wiggle(start,height/2,36,key,2)); // type with keyboard 
 start+=32
}

function keyPressed(){
 if (keyCode === LEFT_ARROW){ // restart 
  wigglets = []; 
  xposition = 0;
  if (keyCode === RIGHT_ARROW){
  background(random(100,255));
  }
  }
}

class Wiggle { // wiggle our letters 
  constructor(x,y,size,letter,speed,colour){ // where, what size, what letter, how much wiggle 
    this.x=x; // x and y position 
    this.y=y;
    this.textSize=size;
    this.letter=letter;
    this.speed=speed;
   // this.color=colour;
 }
 wiggle (){ //random walker up or down or left or right
 this.x += random(-this.speed,this.speed); // backwards and forwards 1+= turns 1 into 2 adds one to the value
 this.y += random(-this.speed,this.speed);
 }
 display(){
   textSize(this.textSize);
   text(this.letter,this.x,this.y); 
 }
}
