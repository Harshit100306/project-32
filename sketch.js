const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var netObj, groundObject, netImg;
var world;

function preload() {
	boyImg = loadImage("boy.png")
	backgroungImg = loadImage("court.jpg")
}

function setup() {
  createCanvas(1600, 800);
  rectMode(CENTER);

  boy = createSprite(200,640,20,20);
  boy.addImage(boyImg)


  engine = Engine.create();
  world = engine.world;

  groundObject = new ground(width / 2, 800, width, 20);
  groundObject2 = new ground(0, 400, 20, 800);
  groundObject3 = new ground(1600, 400, 20, 800);
  groundObject4 = new ground(800, 0, 1600, 20);
  netObj = new net(1525, 650);
  ballObj = new ball(10, 100, 25);

  slingshot = new SlingShot(ballObj.body,{x:210, y:490});

  Engine.run(engine);

}

function draw() {
  rectMode(CENTER);
  background(backgroungImg);

  groundObject.display();
  netObj.display();
  ballObj.display();

  slingshot.display(); 

  //keyPressed();
  drawSprites()

}

function mouseDragged(){
    //if (gameState!=="launched"){
        if(mouseX<200){
        Matter.Body.setPosition(ballObj.body, {x: mouseX , y: mouseY});
    }
} 

function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}


function keyPressed(){
    if(keyCode === 32 && ballObj.body.speed < 1){
        
       slingshot.attach(ballObj.body);
       Matter.Body.setPosition(ballObj.body,{x: 210,y: 490})

       

    }
}




//function keyPressed() {
  //if (keyCode === UP_ARROW) {
  //  Matter.Body.applyForce(ballObj.body, ballObj.body.position, {
  //    x: 130,
  //    y: -145,
  //  });
 // }
//}
