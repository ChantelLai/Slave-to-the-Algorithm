//Audio sketch 28 August P5JS
var song;
var analyzer;

function preload(){
song = loadSound('data/Untitled2.mp3'); //load the song
}

function setup(){
//song = loadSound('Untitled2.mp3'); //loading the song
createCanvas(windowWidth,windowHeight);// full window canvas
fill(0,255,0);
song.loop();
analyzer=new p5.Amplitude();//set analyzer to check amplitude 
analyzer.setInput(song);
stroke(255);
}

function draw(){
background(0);
var volume = analyzer.getLevel(); // this will extract the volume of the song we have sent to the analyzer
volume=(volume*windowWidth)+60;
ellipse(windowWidth/2,windowHeight/2,volume,volume);

}


function mousePressed(){
if (song.isPlaying()){ // checks if the song is playing
  song.stop(); // if it is, then stop the song
  fill(0,255,0);
  } 
  else { fill(255,0,0); // changes the fill to red
  song.play(); // if it isnt then play the song 
  stop.loop();
  }
}
