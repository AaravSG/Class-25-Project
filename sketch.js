
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;

var ground;

var baseBin,leftBin,rightBin;

function preload()
{
	binImage = loadImage("dustbingreen.png");
	
}

function setup() {
    createCanvas(1500,700);


    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.


    Engine.run(engine);

    ground = new Ground(750,700,1500,30);

    paper = new Paper(200,400,50);

	baseBin = new Dustbin(700,670,400,30);
    leftBin = new Dustbin(500,510,30,360);
    rightBin = new Dustbin(900,510,30,360);

}


function draw() {
  background("cyan");
 
  ground.display();

 

  

  image(binImage, 500,325,400,350);

  baseBin.display();
  leftBin.display();
  rightBin.display();

  paper.display();

  }

  function keyPressed(){

    if(keyCode === UP_ARROW){

        Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});



	}

	if(keyCode === DOWN_ARROW){

        Matter.Body.applyForce(paper.body,paper.body.position,{x:0,y:85});



    }

	
	if(keyCode === LEFT_ARROW){

        Matter.Body.applyForce(paper.body,paper.body.position,{x:-85,y:0});



	}
	
	if(keyCode === RIGHT_ARROW){

        Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:0});



	}
	







  }

