function setup() {
  createCanvas(800,400);
  rectmove = createSprite(400, 200, 50, 50);
  rectstill= createSprite(400,100,50,50);
  rectmove.shapeColor="red";
  rectstill.shapeColor="red";
}

function draw() {
  background(0);  

rectmove.x=World.mouseX;
rectmove.y=World.mouseY;

if(rectmove.x-rectstill.x<rectmove.width/2+rectstill.width/2&&
  rectstill.x-rectmove.x<rectmove.width/2+rectstill.width/2&&
  rectmove.y-rectstill.y<rectmove.height/2+rectstill.height/2&&
  rectstill.y-rectmove.y<rectmove.height/2+rectstill.height/2){
  rectstill.shapeColor="yellow";
  rectmove.shapeColor="yellow";
}
else{  rectmove.shapeColor="red";
rectstill.shapeColor="red";}

  drawSprites();
}