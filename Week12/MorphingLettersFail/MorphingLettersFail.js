let font;
let fontSize = 200;
let firstLetter = [];
let x,y;
let secondLetter;

function preload(){
font = loadFont('Aemstel-Regular.otf');
}

function setup() {
createCanvas(500,500);
textFont(font);
textSize(fontSize);

x = width/2-80;
y = height/2+65;


firstLetter = font.textToPoints('W',x,y,fontSize,{sampleFactor:0.1});

secondLetter = font.textToPoints('M',x,y,fontSize,{sampleFactor:0.094});

print(firstLetter.length,secondLetter.length);
  
}


function draw() {
background(200);

beginShape();
for(let i = 0; i<firstLetter.length; i++){
  vertex(firstLetter[i].x,firstLetter[i].y);
}

  if (firstLetter[i].x <= secondLetter[i].x){
    firstLetter[i].x++;
}
 if (firstLetter[i].x >= secondLetter[i].x){
    firstLetter[i].x--;
}
 if (firstLetter[i].y >= secondLetter[i].y){
    firstLetter[i].y--;
}
if (firstLetter[i].y <= secondLetter[i].y){
    firstLetter[i].y++;
}

endShape();

//beginShape();
//for(let i = 0; i<secondLetter.length; i++){
//  vertex(secondLetter[i].x,secondLetter[i].y);
//}
//endShape();

//text('W', x,y);

}
