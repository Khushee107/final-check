var arrowimg, arrowimg2, targetImg, bg_img, stone_arrowimg;
var target, targetGroup;
var stone_arrow2img;
var stoneArrow_group1, stoneArrow_group2;
var targetImg2, targetImg3, targetImg4;
var targetImg5, targetImg6, targetImg7;
var score1 = 0;
var score2 = 0;
var PLAY = 1;
var END = 0;
var gameState = PLAY;



function preload(){
  //loading the images
 arrowimg = loadImage("arrow1.png");
 arrowimg2 = loadImage("arrow2.png");
 targetImg1 = loadImage("target1.png");
 bg_img = loadImage("bg.jpg");
 stone_arrowimg = loadImage("stone_arrow.png");
 stone_arrow2img = loadImage("stone_arrow2.png");
 targetImg2 = loadImage("target2.png");
 targetImg3 = loadImage("target3.png");
 targetImg4 = loadImage("target4.png");
 targetImg5 = loadImage("target5.png");
 targetImg6 = loadImage("target6.png");
 targetImg7 = loadImage("target7.png");
 restartImg = loadImage("restart.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  arrow1 = createSprite(windowWidth/2-100, 700);
  arrow1.addImage("arrow", arrowimg);
  arrow1.scale = 0.5;

  arrow2 = createSprite(width/2-100, 150);
  arrow2.addImage("arrow2", arrowimg2);
  arrow2.scale = 0.5;

  stoneArrow_group1 = new Group();
  stoneArrow_group2 = new Group();
  targetGroup = new Group();

  restart = createSprite(1200,80);
  restart.addImage(restartImg);
  restart.scale = 0.3;
  restart.visible = true;

  score = 0;

} 

function draw() {

  background(bg_img);

if (gameState === PLAY){
  textSize(50);
  fill("black");
  text("Player 1 : "+ score1, 100,80);

  text("Player 2 : "+ score2, 1300,80);
  
  if (keyDown("right")){
    arrow1.x= arrow1.x+10;
  }

  if (keyDown("left")){
    arrow1.x= arrow1.x-10;
  }

  if (keyDown("D")){
    arrow2.x= arrow2.x+10;
  }

  if (keyDown("A")){
    arrow2.x= arrow2.x-10;
  }


if(keyDown("space")){
  shootArrow1();
}

if(keyDown("Z")){
  shootArrow2();
}
 
//console.log(arrow1.x)
if (arrow1.x>windowWidth )  {
   arrow1.velocityX = -10;
 }
 if (arrow1.x<100 )  {
  arrow1.velocityX = 10;
}

//console.log(arrow2.x)
if (arrow2.x>windowWidth )  {
   arrow2.velocityX = -10;
 }
 if (arrow2.x<100)  {
  arrow2.velocityX = 10;
}

if (stoneArrow_group1.collide(targetGroup)){
  score1 = score1 + 10; 
  stoneArrow_group1.destroyEach();
  targetGroup.destroyEach();
}

if (stoneArrow_group2.collide(targetGroup)){
  score2 = score2 + 10; 
  stoneArrow_group2.destroyEach();
  targetGroup.destroyEach();
}

targets();



  drawSprites();
 
  if (score1 === 100){
    gameState = END;
  }

  if (score2 === 100){
    gameState = END;
  }

}

if (gameState === END && score1 === 100){
  restart.visible = true;
  textSize(100);
  fill("black");
  text ("Player1 won the game!!", 300, 440);
}

if (gameState === END && score2 === 100){
  restart.visible = true;
  textSize(100);
  fill("black");
  text ("Player2 won the game!!", 300, 440);
}

if(mousePressedOver(restart)) {
  reset();
}

}

function shootArrow1(){

stone_arrow = createSprite(width/2-400, 650);
stone_arrow.addImage("stone_arrow", stone_arrowimg);
stone_arrow.x=arrow1.x
stone_arrow.scale = 0.3;
stone_arrow.velocityY = -50;
stoneArrow_group1.add(stone_arrow);
}

function shootArrow2(){

  stone_arrow2 = createSprite(width/2-400, 200);
  stone_arrow2.addImage("stone_arrow2", stone_arrow2img);
  stone_arrow2.x=arrow2.x
  stone_arrow2.scale = 0.3;
  stone_arrow2.velocityY = 50;
  stoneArrow_group2.add(stone_arrow2);
  }
  

  function targets(){
    if(frameCount % 60===0){
      var target = createSprite (windowWidth, 440);
      target.velocityX = -20;

      var rand = Math.round(random(1,8))
      switch(rand){
        case 1 : target.addImage(targetImg1);
        break;
        case 2 : target.addImage(targetImg2);
        break;
        case 3 : target.addImage(targetImg3);
        break;
        case 4 : target.addImage(targetImg4);
        break;
        case 5 : target.addImage(targetImg5);
        break;
        case 6 : target.addImage(targetImg6);
        break;
        case 7 : target.addImage(targetImg7);
        break;
      
        default : break;
      }

      target.scale = 0.4;
      targetGroup.add(target);

    }
  }

    function reset(){
      gameState = PLAY;

      restart.visible = false;

      stoneArrow_group1.destroyEach();
      stoneArrow_group2.destroyEach();

      targetGroup.destroyEach();
      score = 0;

  }


 
