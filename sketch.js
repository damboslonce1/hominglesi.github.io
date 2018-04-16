var winner = 0;
var lastWinner = 0;
var p1Wins = 0;
var p2Wins = 0;

function setup() {
 createCanvas(640,480);
}

function draw() {
  background(0,255,235);
  fill(255);
  stroke(0);
  ellipse(150,230,170,250);
  ellipse(470,230,170,250);
  noStroke();
  textSize(32);

  if(lastWinner==1){
    p2Wins = p2Wins + 1;
    lastWinner=0;
  }else if(lastWinner==2){
    p1Wins = p1Wins + 1;
    lastWinner=0;
  }

  drawButton();

  printText();

}

function mousePressed(){
  noStroke();
  if(mouseX>200 && mouseX<400 && mouseY>40 && mouseY<100){
  winner = Math.round(random(1,2));
  lastWinner = winner;
  }
  print(mouseX + " " + mouseY)

}

function printText(){
  noStroke();

  text('P1', 130, 90);
  text('P2', 450, 90);

  if (winner==1){
    P1Crack();
    noStroke();
    text('P2 Wins', 250, 180);
    p1Wins=0;
  }else if (winner==2){
    P2Crack();
    noStroke();
    text('P1 Wins', 250, 300);
    p2Wins=0;
  }

  if(p2Wins!=0){
    text('P2 Streak:'+p2Wins, 240, 400);
  }
  if(p1Wins!=0){
    text('P1 Streak:'+p1Wins, 240, 400);
  }

}

function drawButton(){
  noStroke();
  fill(69,169,221);
  rect(200,40,200,60);
}


function P1Crack(){
  stroke(0);
  line(65,250,75,230);
  line(75,230,100,290);
  line(100,290,140,255);
  line(140,255,145,260);
  line(145,260,165,230);
  line(165,230,195,255);
  line(195,255,225,225);
  line(225,225,235,235);
}
function P2Crack(){
  stroke(0);
  line(385,250,410,230);
  line(410,230,435,265);
  line(435,265,450,250);
  line(450,250,455,255);
  line(455,255,480,220);
  line(480,220,500,245);
  line(500,245,525,250);
  line(525,250,545,285);
}
