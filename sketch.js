var fixedrect, movingrect;



function setup() {
  createCanvas(800,400);
fixedrect=createSprite(400,200, 20,20);
fixedrect.shapeColor="black";
movingrect=createSprite(200,300, 20, 20);
movingrect.shapeColor="red";
}

function draw() {
  background("purple");  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
 if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2
  &&fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2
  &&movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2
  &&fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
   fixedrect.shapeColor="orange";
   movingrect.shapeColor="blue";
 }
 else{
   fixedrect.shapeColor="black";
 movingrect.shapeColor="red";
}
 
  drawSprites();
}