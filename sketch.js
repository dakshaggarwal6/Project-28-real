const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball, ground;
var box1, box1sprite, box2, box2sprite, box3, box3sprite;
var world;
var koodaimage,kooda;
var launcher;

function preload(){
koodaimage=loadImage("dustbin.png")
}
function setup() {
  createCanvas(1600, 700);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;
  ball = new Paper(200, 500, 70);
  ground = new Ground(width / 2, 670, width, 20);
  //Create a Ground

  box1sprite = createSprite(1200, 640, 250, 20);
  box1sprite.shapeColor = "white";
  box1sprite.addImage(koodaimage);
 box1sprite.scale=0.5;

  box1 = Bodies.rectangle(1200, 575, 250, 20);
  box2 = Bodies.rectangle(1100, 580, 40, 150);
  box3 = Bodies.rectangle(1200, 650, 20, 100);

  launcher = new Launcher(ball.body, {x : 300, y : 300});
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("grey");


  box1sprite.x = box1.position.x;
  box1sprite.y = box1.position.y;

  ball.display();
  ground.display();
launcher.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x : mouseX, y : mouseY});
}
function mouseReleased(){
  launcher.paper_flying();
}