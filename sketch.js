function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  
  var ore = hour();
  var minuti = minute();
  var secondi = second();
  
  var margin = 10;
  
  background(5,5,5,5);
  fill(255);
  push();
  textSize(20);
  text("hours", margin, 3*margin);
  text("minutes", margin, height/3)
  text("seconds",10,2*height/3);
  pop();
  
  text(ore,margin+ore*(width/26),3*margin+(2*margin));
  text(minuti,margin+minuti*(width/62),height/3+(2*margin));
  text(secondi,margin+secondi*(width/62),2*height/3+(2*margin));
  
  fill(130);
  text('Inspired by "Forgotten Calendar" by HWAL',margin,height-margin);
  text('"Time is forgotten" by Alessandro Zotta',width-207-margin,height-margin);
  
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}