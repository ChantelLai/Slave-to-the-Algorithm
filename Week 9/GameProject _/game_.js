
let img;
let button; 
let col = color(200,255,200);

let lang = navigator.language || 'en-US';
let speechRec = new p5.SpeechRec(lang, gotSpeech);
let continuous = true;
let interim = true;

function setup() {
createCanvas(windowWidth,windowHeight);

}

function draw() {
background(0);
//image(img,730,500);
fill(255,0,0);
textSize(36);
textAlign(CENTER);
textFont('PressStart2P-Regular',36);
text('CLICK START TO START',730,500);

  button = createButton("START");
  button.mouseClicked(resetSketch);
  button.size(100,50);
  button.position(650,600);
  button.style("font-family", "PressStart2P-Regular");
  button.style('font-size', "15px"); 
  button.style('background-color',col); 
 
}

function resetSketch() {
  background(0);
  button.position(1000,1000);
  
fill(247,148,29);
textSize(36);
textAlign(CENTER);
textFont('PressStart2P-Regular',25);
text('SHHHHH',250,200);
fill(249,237,50);
textFont('PressStart2P-Regular',36);
text('GOT A SECRET?',300,600);

fill(0);
stroke(255);
strokeWeight(2);
rect(800,100,500,550);

noStroke();
fill(247,148,29);
textAlign(CENTER);
textFont('PressStart2P-Regular',10);
text('START CONFESSING...',920,190);

  button = createButton("CONFESS");
  button.mouseClicked(startSketch);
  button.size(150,50);
  button.position(800,680);
  button.style("font-family", "PressStart2P-Regular");
  button.style('font-size', "15px"); 
  button.style('background-color',col);
  
textFont('PressStart2P-Regular',10);
speechRec.start(continuous,interim);
text(speechRec.resultString,50,200,windowWidth-10);

}

function startSketch(){
 background(0);
 button.position(1000,1000);
}

function gotSpeech(){
 if(speechRec.resultValue){
   createP(speechRec.resultString);
 }
}
