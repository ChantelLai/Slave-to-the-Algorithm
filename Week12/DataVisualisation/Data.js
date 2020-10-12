var data;
var screentime,messenger,instagram,tictok,screentimeCol,messengerCol,instagramCol,tictokCol;
var whatDay=0;
var sizeMultiplier = 2; 
var size;

function preload(){
  data=loadJSON("days.json");
}

function setup() {
createCanvas(windowWidth,windowHeight);
background(0);
  
screentimeCol = color(255,0,0);
messengerCol = color(0,255,0,80);
instagramCol = color(0,0,255,100);
tictokCol = color(255);
frameRate = (1);

}

function draw() {
for (whatDay=0;whatDay<data.days.length;whatDay++){
  
  noStroke();
  fill(screentimeCol);
  size = data.days[whatDay].screentime*sizeMultiplier;
  rect(random(500,400),random(200,700),size,size);
  
  noStroke();
  fill(messengerCol);
  size = data.days[whatDay].messenger*sizeMultiplier;
  ellipse(random(400,600),random(200,300),size,size);
  
  noStroke();
  fill(instagramCol);
  size = data.days[whatDay].instagram*sizeMultiplier;
  ellipse(random(300,600),random(200,500),size,size);
  
  noStroke();
  fill(tictokCol);
  size = data.days[whatDay].tictok*sizeMultiplier;
  ellipse(random(200,500),random(200,500),size,size);
  
}
}
