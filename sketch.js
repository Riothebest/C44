const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var myEngine, myWorld;
var player, playerImg;
var dustbin, dustbinImg;
var edges , wall;
var kicked = false;
var bottleImg , bottle;

function preload()
{
  playerImg = loadImage("./assets/player.png");
  dustbinImg = loadImage("./assets/dustbin.png");
  bottleImg = loadImage("./assets/waterBottle.png");
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  myEngine = Engine.create();
  myWorld = myEngine.world;

  player = createSprite(100,height-100);
  player.addImage(playerImg);
  player.scale = 0.25

  dustbin = createSprite(width-250,height-100);
  dustbin.addImage(dustbinImg);
  dustbin.scale = 0.5;
  dustbin.velocityX = 3;
  dustbin.debug = true;

  edges = createEdgeSprites();
  wall = createSprite(width/2,height,5,150);
  wall.visible = false;

  bottle = new Bottle(400,1,100,100);

}

function draw() {
  background(255,255,255);  

  Engine.update(myEngine);

  if(dustbin.isTouching(edges[1]))
  {
    dustbin.velocityX = -3;
  }
  if(dustbin.isTouching(wall))
  {
    dustbin.velocityX = 3;
  }

  if(bottle.length<10 && !kicked)
  {
    bottle = new Bottle(400,1,100,100);
  }
 
  bottle.display();
  drawSprites();
}