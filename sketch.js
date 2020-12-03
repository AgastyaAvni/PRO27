
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1 =new Ball (200,320,50,50);
bob2=new Ball (100,320,50,50);
roof=new Roof (310,160,600,20);
bob3=new Ball(340,320,50,50);
bob4=new Ball(355,320,50,50);
bob5=new Ball(530,300,50,50);
rope1=new Rope (bob1.body,roof.body);
rope2=new Rope (bob2.body,roof.body);
rope3=new Rope (bob3.body,roof.body);
rope4=new Rope (bob4.body,roof.body);
rope5=new Rope (bob5.body,roof.body);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

bob1.display();
bob2.display();
roof.display();
bob3.display();
bob4.display();
bob5.display();
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

if (keyDown("SPACE")){

bob5.velocityX=305;
bob5.velocityY=170;

}

  drawSprites();
 
}



