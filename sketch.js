
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  backgroundImage = loadImage("jungle.jpg");
}



function setup() {
createCanvas(600,400);
bgrd=createSprite(300,200);
bgrd.addImage(backgroundImage);
bgrd.scale=1;
bgrd.velocityX=-2;
bgrd.x=width/2;
ground=createSprite(300,390,600,20);
ground.visible=false;    
  
  
monkey=createSprite(100,350);
monkey.addAnimation("monkey_running", monkey_running);
monkey.scale=0.1;

foodgroup=new Group();
obstaclegroup=new Group();
  
}


function draw() {
  background(255);
  
  
  
  if(bgrd.x<200){
    bgrd.x+=width/2
  }
 
  if (keyDown("space")){
    monkey.velocityY=-10;
  }
    monkey.velocityY+=0.8;
    monkey.collide(ground);
  if(monkey.isTouching(foodgroup)){
    score=score+2;
    foodgroup.destroyEach();
  }
  
  spawnfood();
  obstacles();
  drawSprites();
  fill(255);
      text("Score:"+score, 300,100);

}

function spawnfood(){
  if(World.frameCount%80===0){
    var food = createSprite(400, random(100,200), 20, 20);
    food.velocityX=-5;
    food.addImage(bananaImage);
    food.scale=0.1;
    foodgroup.add(food);
    
  }
}
function obstacles(){
  if(World.frameCount%80===0){
    var obstacle = createSprite(400,380, 20, 20);
    obstacle.velocityX=-5;
    obstacle.addImage(obstaceImage);
    obstacle.scale=0.1;
    obstaclegroup.add(obstacle); 
}
}

