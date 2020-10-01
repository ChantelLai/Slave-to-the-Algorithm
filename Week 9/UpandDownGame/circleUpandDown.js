const letters= 'I ate ice cream for breakfast';
var rand,listLength;
var x = 200;
var y = 200;

 var d = random(0, 255);
 var e = random(0, 255);
 var f = random(0, 255);
  
function setup() {
createCanvas (windowWidth, windowHeight);

background(255);
 textSize(24);
 noStroke();
 textFont("PressStart2P-Regular");
frameRate(2);
listLength=letters.length;
}


function draw() {
  background(220);
  fill(0);
  ellipse(x,y,50,50);

   if (x >= 400){
   x = 0; 
  }
  
rand = int(random(0, listLength-1));
fill(d,e,f);
textSize(random(20,60));
text(letters[rand], random(width), random(height));
background(255,1);

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    y = y - 20;
  } else if (keyCode === DOWN_ARROW) {
   y = y + 20;
  }
  if (keyCode === LEFT_ARROW) {
    x = x - 15;
  } else if (keyCode === RIGHT_ARROW) {
    x = x + 15;
  }
  
}
