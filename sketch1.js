var fixedrect, movingrect;



function setup() {
  createCanvas(800,400);
fixedrect=createSprite(200,100, 20,20);
fixedrect.shapeColor="black";
movingrect=createSprite(200,400, 20, 20);
movingrect.shapeColor="red";
movingrect.velocityY=-3;
fixedrect.velocityY=3;

}

function draw() {
  background("purple");  
 
 if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
  &&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2){
movingrect.velocityX=movingrect.velocityX*(-1);
fixedrect.velocityX=fixedrect.velocityX*(-1);
  }
  else if(movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
  &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
    movingrect.velocityY=movingrect.velocityY*(-1);
    fixedrect.velocityY=fixedrect.velocityY*(-1);
  }
 
  drawSprites();
}