var spr;
var anim;
var coins;
var score = 0; 
let button; 

function preload() {
  anim = loadAnimation("data/Ghost-01.png", "data/Ghost-02.png","data/Ghost-03.png");
}

function setup() {
createCanvas(windowWidth, windowHeight);
  spr = createSprite(width/5, height/5);
  spr.addAnimation("default", anim);
  
  coins = new Group();
  for (var i = 0; i < 10; i++) {
    var c = createSprite(
      random(100, width-100),
      random(100, height-100),
      50, 50);
    c.shapeColor = color(255, 255, 0);
    coins.add(c);
  }
}

function draw() {
background(0);
  spr.velocity.x = (mouseX - spr.position.x) * 0.1;
  spr.velocity.y = (mouseY - spr.position.y) * 0.1;
  spr.overlap(coins, getCoin);
  drawSprites();
  frameRate(25);
  fill(255);
  noStroke();
  textFont('PressStart2P-Regular',36);
  textAlign(CENTER,CENTER);
  if (coins.length > 0) {
    text(score,500,100);
    text("score:",300,100);
  }
  else {
    text("SECRET IS KEPT",300,100);
  }

  //button = createButton("RESTART");
  //button.mouseClicked(resetSketch);
  //button.size(100,50);
  //button.position(650,600);
  //button.style("font-family", "PressStart2P-Regular");
  //button.style('font-size', "15px"); 
  //button.style('background-color',col); 
}

function resetSketch() {
  background(0);
  button.position(1000,1000);
  
  coins = new Group();
  for (var i = 0; i < 10; i++) {
    var c = createSprite(
      random(100, width-100),
      random(100, height-100),
      10, 10);
    c.shapeColor = color(255, 255, 0);
    coins.add(c);
  }
  spr.velocity.x = (mouseX - spr.position.x) * 0.1;
  spr.velocity.y = (mouseY - spr.position.y) * 0.1;
  spr.overlap(coins, getCoin);
  drawSprites();
  frameRate(25);
  fill(255);
  noStroke();
  textSize(72);
  textAlign(CENTER, CENTER);
  if (coins.length > 0) {
    text(score, width/2, height/2);
  }
  else {
    text("you win!", width/2, height/2);
  }
}

function getCoin(spr, coins) {
  coins.remove();
  score += 1;
}

function keyPressed(){
 clear();
 background(0);
 coins = new Group();
  for (var i = 0; i < 10; i++) {
    var c = createSprite(
      random(100, width-100),
      random(100, height-100),
      10, 10);
    c.shapeColor = color(255, 255, 0);
    coins.add(c);
  }
  spr.velocity.x = (mouseX - spr.position.x) * 0.1;
  spr.velocity.y = (mouseY - spr.position.y) * 0.1;
  spr.overlap(coins, getCoin);
  drawSprites();
  frameRate(25);
  fill(255);
  noStroke();
  textSize(72);
  textAlign(CENTER, CENTER);
  if (coins.length > 0) {
    text(score, width/2, height/2);
  }
  else {
    text("you win!", width/2, height/2);
  }
}
