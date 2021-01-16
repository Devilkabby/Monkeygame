
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var edges;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png",
 "sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png",
 "sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}





function setup() {
  createCanvas(400,400);
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.1;

  ground = createSprite(200,350,400,10);
   ground.x = ground.width /2
  
 edges = createEdgeSprites();  
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  
  background("white");
  
  stroke("white");
  textSize(20);
  fill("white");
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50);
  
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
   }
   monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
   monkey.collide(ground);
  
  spawnbanana();
  
  spawnobstacle();
  
  drawSprites();
}

function spawnbanana() {
  //write code here to spawn the banana
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
        
    //add each cloud to the group
    bananaGroup.add(banana);
  }
}

function spawnobstacle(){
  //write code here to spawn the obstacle
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,330,40,10);
   // obstacle.y = Math.round(random(120,200));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
        
    //add each cloud to the group
    obstacleGroup.add(obstacle);
  }
}




