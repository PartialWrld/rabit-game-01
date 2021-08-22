var garden,rabbit;
var gardenImg,rabbitImg;
var apples
var leafs
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apple = loadImage("apple.png")
  leaf=loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
// rabit movement
rabbit.x=World.mouseX
  spawnApples();
  spawnLeaf();
  drawSprites();
}

function spawnApples(){

  if(frameCount%80==0)
  {
    r=(Math.round(random(40,200)))
    apples=createSprite(r,40,20,10);
    apples.addImage(apple)
    apples.scale=0.1
  apples.velocityY=3

  apples.lifetime=(200)
  }
  

}


//function to spawn the clouds
function spawnLeaf(){

  if(frameCount%80==0)
  {
    r=(Math.round(random(40,400)))
    leafs=createSprite(r,40,20,10);
    leafs.addImage(leaf)
    leafs.scale=0.1
  leafs.velocityY=3

  leafs.lifetime=(200)
  }


}
