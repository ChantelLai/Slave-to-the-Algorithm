//Speech to text 
let lang = navigator.language || 'en-US';
let speechRec = new p5.SpeechRec(lang, gotSpeech);
let continuous = true;
let interim = true;
let runningText; 

function setup(){
  background(0);
  createCanvas(windowWidth, windowHeight);
  speechRec.onResult = showResult; 
  speechRec.start(continuous,interim);
}
  
function draw(){
  //gotSpeech();
  //text(runnningText,width/2,height/2);
}
  
function showResult(){
    if(speechRec.resultValue === true){
      background(0);
      textSize(72);
      fill(255);
      text(speechRec.resultString,50,50,windowWidth-100,windowHeight); //height/2); // position of text 
     // createP(speechRec.resultString);
    }
  //  fill(255);
 // text(speechRec,width/2,height/2);
  }
  
function gotSpeech(){
  if(speechRec.resultValue){
    
    createP(speechRec.resultString);
    runningText=speechRec.resultString;
  }
  fill(255);
}
