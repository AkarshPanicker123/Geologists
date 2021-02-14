
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var hammer;
var stone;
var rubber;
var sand1 , sand2,sand3,sand4,sand5,sand6;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;



   // create bodies here
	ground = new Ground(600,650,1200,20);
	stone = new Stone(400,8,100,100);
	hammer = new  Hammer (20,20,500,40);
  rubber = new Ball(500,8,5,5);
  sand1 = new Sand(60,8,10,5);
  sand2 = new Sand(65,8,10,10);
  sand3 = new Sand(70,8,10,10);
  sand4 = new Sand(75,8,10,10);
  sand5 = new Sand(80,8,10,10);
  sand6 = new Sand(85,8,10,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(" Blue");

  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
  sand1.display(); 
  sand2.display(); 
  sand3.display();  
  sand4.display(); 
  sand5.display();  
  sand6.display();  
  drawSprites();
 
}



