// p5.js version of Tim Rodenbroeker Kinetic typography tutorial with some extra sliders

let font;
let pg;
//let txt = input.value();

let tX,tY,sp,dspx,dspy,fct;
var mode; 

// function preload(){
//   font = loadFont("data/RobotoMono-Regular.ttf");
// }

function setup() {
mode = 0;
  createCanvas(windowWidth, windowHeight);
  createSliders();
  pg = createGraphics(windowWidth, windowHeight);
  
  input = createInput();
  input.size(300,50);
  input.position(windowWidth/2-150,600);

}

function draw() {
  if (mode==0){
   background(86,86,86);
  
  textAlign(CENTER);
  textFont('texgyrecursor-regular',60);
  fill(255);
  text('DECONSTRUCTION OF A CONFESSION',windowWidth/2,windowHeight/2);
  
  textSize(15);
  text('CLICK ANYWHERE TO START',windowWidth/2,900);
  textSize(10);
  text('PROJECT BY CHANTEL LAI',windowWidth/2,50);
  
  textAlign(CENTER,CENTER);
  textSize(20);
  fill(50,50,50);
  text('A PROJECT WHERE MYSTERY COMES TO PLAY WITH SECRETS TOLD.\n TO DECONSTRUCT A CONFESS FOR IT TO NO LONGER BE KNOWN. \n ARE SECRETS MEANT TO BE IN HIDING?',windowWidth/2,700);
  
  input.hide();
  //tX.hide();
  //tY.hide();
  //sp.hide();
  //dspx.hide();
  //dspy.hide();
  //fct.hide();
  
  }
  
  if (mode==1){
   background(86,86,86);
  textFont('texgyrecursor-regular',60);
  fill(0,255,0);
  text('GOT A SECRET TO TELL?', windowWidth/2,windowHeight/2);
  textFont('texgyrecursor-regular',20);
  fill(255);
  text('PRESS ENTER ONCE FINISHED', windowWidth/2,800); 
  
  input.show();

  }
  
  if (mode==2){
  background(0);
  input.hide();

  // PGraphics

  pg.background(0);
  pg.fill(255);
  // pg.textFont(font);
  pg.textSize(100);
  pg.push();
  pg.translate(width/2, height/2);
  pg.textAlign(CENTER, CENTER);
  pg.text("I ate icecream for breakfast and \n was not guilty about it", 0, 0);
  pg.pop();


  let tilesX = tX.value();
  let tilesY = tY.value();

  let tileW = int(width/tilesX);
  let tileH = int(height/tilesY);

  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {

      // WARP
      let waveX = int(sin(frameCount * sp.value() + ( x * y ) * dspx.value()) * fct.value());
      let waveY = int(sin(frameCount * sp.value() + ( x * y ) * dspy.value()) * fct.value());

      if (dspx.value() === 0){
          waveX = 0;
      }

      if (dspy.value() === 0){
          waveY = 0;
      }
      
      // image(pg,0,0)
      
      // SOURCE
      let sx = x*tileW + waveX;
      let sy = y*tileH + waveY;
      let sw = tileW;
      let sh = tileH;


      // DESTINATION
      let dx = x*tileW;
      let dy = y*tileH;
      let dw = tileW;
      let dh = tileH;



      copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);

    }
  }
}
}

function createSliders(){
  //if (mode==2){
  tX = createSlider(1, 80, 16, 1);
  tX.position(20, height + 40);
  createP('Tiles X').position(20, height);

  tY = createSlider(1, 80, 16, 1);
  tY.position(20, height + 100);
  createP('Tiles Y').position(20, height+60);

  sp = createSlider(0, 1, 0.005, 0.01);
  sp.position(20, height + 160);
  createP('Speed').position(20, height+120);

  dspx = createSlider(0, 0.1, 0.05, 0.001);
  dspx.position(180, height + 40);
  createP('Displacement X').position(180, height);

  dspy = createSlider(0, 0.2, 0, 0.01);
  dspy.position(180, height + 100);
  createP('Displacement Y').position(180, height+60);

  fct = createSlider(0, 300, 100, 1);
  fct.position(180, height + 160);
  createP('Offset').position(180, height+120);
}


function keyPressed(){ // when a key is pressed it will change the page
 //if (keyCode===ENTER){
 //  mode=1;
 //}
 if (keyCode===ENTER){
   mode=2;
 }
}

function mousePressed() {
  if (mousePressed){
  mode=1;
  }
}
