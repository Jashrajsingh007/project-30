
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=matter.Render
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roof=new Roof(350,100,300,30)
	World.add(world,roof)

	//Create the Bodies Here.
bobObject1 =new Bob(250,300)
bobObject2 =new Bob(300,300)
bobObject3 =new Bob(350,300)
bobObject4 =new Bob(400,300)
bobObject5 =new Bob(450,300)



rope1= new Rope(bobObject1.Body,roof.body,-100,0)
rope2= new Rope(bobObject1.Body,roof.body,-50,0)
rope3= new Rope(bobObject1.Body,roof.body,0,0)
rope4= new Rope(bobObject1.Body,roof.body,50,0)
rope5= new Rope(bobObject1.Body,roof.body,100,0)






	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



