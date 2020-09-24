var type;
let lang = navigator.language || 'en-US';
let speechRec = new p5.SpeechRec(lang, gotSpeech);
let continuous = true;
let interim = true;

let button; 

//let graphics;
//let say anything;
//let runningText; 


function preload(){
  type = loadFont('MADEMirageRegularPERSONALUSE.otf'); 
}

function setup() {
 createCanvas(windowWidth,windowHeight);
 //speechRec.onResult = showResult; 
 speechRec.start(continuous,interim);

//button = createButton('Create');
//button.postition(500,500);
//button.mousePressed(changeBG);
}


function draw() {
 background(135,91,67);
// fill(135,91,67);
 //rect(800,500, 100,100); 
stroke(255);
strokeWeight(2);
line(300,400,300,-400);
line(-100,100,300,100);

strokeWeight(1);
fill(255);
textFont('MADEMirageRegularPERSONALUSE',50);
textAlign(CENTER);
text("Say anything",500,500);

textFont('Montserrat-LightItalic',30);
textAlign(CENTER);
text(speechRec.resultString,50,200,windowWidth-10); //height/2); // position of text
 


//function changeBG(){
 // background(0);
}

function showResult(){
   //if(speechRec.resultValue === true){
      //textSize(72);
     // fill(255); 
     // background(135,91,67);
      
     // createP(speechRec.resultString);
   // }
  //  fill(255);
 // text(speechRec,width/2,height/2);
  }
  
function gotSpeech(){
 if(speechRec.resultValue){
   createP(speechRec.resultString);
   //runningText=speechRec.resultString;
  }
 // fill(255);
}
