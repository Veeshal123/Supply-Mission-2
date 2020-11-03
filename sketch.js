var bgSprite, bgIMG;
var helicopterSprite, helicopterIMG, packageSprite, packageIMG;
var packageBody, ground;
var box1, box2, box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bgIMG=loadImage("bg.jpg");
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup()
{
	createCanvas(800,640);
	rectMode(CENTER);

	bgSprite=createSprite(400,320);
	bgSprite.addImage(bgIMG);
	bgSprite.scale=2.1;
	
	packageSprite=createSprite(width/2, 80);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width, 10);
	groundSprite.visible = false;

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	packageBody.visible = false;
	
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 600, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	box1 = new Box(400,600,220,20,"red");
	box2 = new Box(500,560,20,100,"red");
	box3 = new Box(300,560,20,100,"red");

	Engine.run(engine); 
}


function draw()
{
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y 

  drawSprites();

  box1.display();
  box2.display();
  box3.display();
}

function keyPressed()
{
 if (keyCode === DOWN_ARROW)
  {
    Matter.Body.setStatic(packageBody,false);
  }

  Engine.update(engine);
}



