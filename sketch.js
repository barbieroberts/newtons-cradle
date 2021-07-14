const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var sting1
var sting2
var sting3
var sting4
var sting5

var bobObject1
var bobObject2
var bobObject3
var bobObject4
var bobObject5





function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(350,100,200,30);
	World.add(world,roof)
	
	bobObject1 = new Bob(250,300)
    bobObject2 = new Bob(300,300)
    bobObject3 = new Bob(350,300)
	bobObject4 = new Bob(400,300)
    bobObject5 = new Bob(450,300)

	sting1 =new Sting(bobObject1.body,roof.body,-100,0)
	World.add(world,sting1)
	sting2 =new Sting(bobObject2.body,roof.body,-50,0)
	World.add(world,sting2)
    sting3 = new Sting(bobObject3.body,roof.body,0,0)
	World.add(world,sting3)
	sting4 = new Sting(bobObject4.body,roof.body,+50,0)
	World.add(world,sting4)
	sting5 = new Sting(bobObject5.body,roof.body,+100,0)
	World.add(world,sting5)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  
  roof.display();

  

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  sting1.display();
  sting2.display();
  sting3.display();
  sting4.display();
  sting5.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === ("space")){
		Matter.body.applyForce(bobObject1.body,bobObject1.body.position,{x:-720,y:0});
	}
}

