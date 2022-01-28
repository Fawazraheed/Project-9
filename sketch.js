
var box
function setup() {
  createCanvas(400,400); 
  box= createSprite (20,50,70,40)
}

function draw() 
{
  background('yellow'); 
  
if (keyDown('right') ) {
  box.x= box.x+5 
  background ('orange')
} 
if (keyDown('left') ) {
  box.x= box.x-5 
  background ('blue')
}
if (keyDown('up') ) {
  box.y= box.y-5 
  background ('red')
}
if (keyDown('down') ) {
  box.y= box.y+5 
  background ('green')
} 
drawSprites ()
}





