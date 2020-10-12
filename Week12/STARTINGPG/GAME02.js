var mode; 
let input;
let button; //

//let font;
//let pg;

//let tX,tY,sp,dspx,dspy,fct;

function setup() {
mode = 0; // creates different modes for text menu
createCanvas(windowWidth,windowHeight);
  //createSliders();
  //pg = createGraphics(windowWidth, windowHeight);
}

function draw() {
clear(); // to clear the screen after each mode = keypress
if (mode==0){ // first page keypress enter
  background(0);
  //textSize(60);
  textAlign(CENTER);
  textFont('texgyrecursor-regular',60);
  fill(255);
  text('CLICK ANYWHERE TO START',windowWidth/2,windowHeight/2);
}

if(mode==1){ // second page 
  background(0);
  textFont('texgyrecursor-regular',60);
  fill(255,0,0);
  text('GOT A SECRET TO TELL?', windowWidth/2,windowHeight/2);
  textFont('texgyrecursor-regular',30);
  fill(255);
  text('PRESS ENTER ONCE FINISHED', windowWidth/2,700);
 
  input = createInput();
  input.size(300,50);
  input.position(windowWidth/2,400);

  button.hide();
  button = createButton('share');
  button.size(100,20);
  button.position(700,700);
  button.mousePressed(letters);

}

if(mode==2){ // third page
  background(0);
  fill(0,255,0);
  textSize(21);
  text('hello', width/2,height/2);

}
}

function keyPressed(){ // when a key is pressed it will change the page
 //if (keyCode===ENTER){
 //  mode=1;
 //}
 if (keyCode===ENTER){
   mode=2;
   input.hide();
   button.hide();
 }
}

function mousePressed() {
  if (mousePressed){
  mode=1;
  }
}

//function letters(){
//  mode = 2;
//  input.hide();
//  button.hide();
  


 
  
