const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1,bob2,bob3,bob4,bob5;
var con1,con2,con3,con4,con5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = new Bob(320,300);
	bob2 = new Bob(360,300);
	bob3 = new Bob(400,300);
	bob4 = new Bob(440,300);
	bob5 = new Bob(480,300);

	con1 = Matter.Constraint.create({
		length:200,
		stiffness:0.8,
		bodyA:roof,
		bodyB:bob1.body,
		pointA:{x:-80,y:0}
	})
	World.add(world,con1);

	con2 = Matter.Constraint.create({
		length:200,
		stiffness:0.8,
		bodyA:roof,
		bodyB:bob2.body,
		pointA:{x:-40,y:0}
	})
	World.add(world,con2);

	con3 = Matter.Constraint.create({
		length:200,
		stiffness:0.8,
		bodyA:roof,
		bodyB:bob3.body,
		pointA:{x:0,y:0}
	})
	World.add(world,con3);

	con4 = Matter.Constraint.create({
		length:200,
		stiffness:0.8,
		bodyA:roof,
		bodyB:bob4.body,
		pointA:{x:40,y:0}
	})
	World.add(world,con4);

	con5 = Matter.Constraint.create({
		length:200,
		stiffness:0.8,
		bodyA:roof,
		bodyB:bob5.body,
		pointA:{x:80,y:0}
	})
	World.add(world,con5);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
push();
  line(roof.position.x-80,roof.position.y,bob1.body.position.x,bob1.body.position.y);
  line(roof.position.x-40,roof.position.y,bob2.body.position.x,bob2.body.position.y);
  line(roof.position.x,roof.position.y,bob3.body.position.x,bob3.body.position.y);
  line(roof.position.x+40,roof.position.y,bob4.body.position.x,bob4.body.position.y);
  line(roof.position.x+80,roof.position.y,bob5.body.position.x,bob5.body.position.y);
  pop();



  //call display() to show ropes here
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.

function keyPressed(){
	if(keyCode === RIGHT_ARROW){
    Body.applyForce(bob1,bob1.position,{x:-50,y:-50})
	}
}