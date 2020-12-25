var fixrect,movrect

function setup() {
  createCanvas(1200,800);
 fixrect = createSprite(600,400,50,80)
 movrect = createSprite(400,200,80,30)

}

function draw() {
  background(80,80,80);  

  movrect.x=World.mouseX
  movrect.y=World.mouseY

  if(movrect.x-fixrect.x<movrect.width/2+fixrect.width/2 && fixrect.x-movrect.x<movrect.width/2+fixrect.width/2 && movrect.y-fixrect.y<movrect.height/2+fixrect.height/2 && fixrect.y-movrect.y<movrect.height/2+fixrect.height/2){
    movrect.shapeColor="red"
    fixrect.shapeColor="red"
  }
  else {
    movrect.shapeColor="green"
    fixrect.shapeColor="green"
  }



  drawSprites();
}