
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var body1,body2,body3;
var ground1,ball1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	body1=createSprite(600,660,200,20);
	body1.shapeColor=("red");

	body2=createSprite(500,620,20,100);
	body2.shapeColor=("red");

	body3=createSprite(700,620,20,100);
	body3.shapeColor=("red");

	ground1 = new ground(400,690,800,20);
	ball1 = new ball();


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  ground1.display();
  ball1.display();

  

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
			   
	   Matter.Body.applyForce(ball1.body,ball1.body.position,{x:115,y:-115})
	 }
   }
   
   
   
   

