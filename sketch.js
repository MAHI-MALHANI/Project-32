const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var blueLine, greenLine, yellowLine, redLine;
var waterBalloon, waterBalloonImg;
var slingshot;
var Boy, boyImg;
var BackgroundImg;
var Score=0;

function preload(){
  backgroundImg=loadImage("backgroundImg.jpg");
  boyImg=loadImage("Boy.jpg");
  waterBalloonImg=loadImage("waterBalloon.jpg");
}

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  blueLine=new Line(1100, 300, 100, 50);
  fill(Darkblue);
  yellowLine=new Line(900, 300, 100,50);
  fill(yellow);
  greenLine=new Line(600, 300, 100,50);
  fill(green);
  redLine=new Line(400, 300, 100, 50);
  fill(red);
  Boy.addImage(boyImg, 100, 350);
  waterBalloon.addImage(waterBallonImg, 70, 175);
  scale=1;

  slingshot = new Slingshot(boy.body,{x:200, y:50});
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  text("Score  " + score, 1100, 50);
  text("Press the space key to get a second chance!", 200, 50);

  text("10", 350, 150);
  text("20", 550, 150);
  text("30", 850, 150);
  text("40", 1050, 150);

  if(waterBalloon.isTouching(redLine)){
    score=score+10;
  }

  if(waterBalloon.isTouching(GreenLine)){
    score=score+20;
  }

  if(waterBalloon.isTouching(yellowLine)){
    score=score+30;
  }

  if(waterBalloon.isTouching(blueLine)){
    score=score+40;
  }

  keyPressed();
  
  blueLine.display();
  greenLine.display();
  yellowLine.display();
  redLine.display();
  Boy.display();
  
  drawSprites();
}

function mouseDragged(){
      Matter.Body.setPosition(Boy.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(waterBalloon.body);
  }
}