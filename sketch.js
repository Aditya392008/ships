var sprites=[];
var s1,s2,s3,s4 


function setup() 
{
  createCanvas(400,400);
  s1=createSprite(140,200,10,10);
  s2=createSprite(190,300,10,10);
  s3=createSprite(250,110,10,10);
  s4=createSprite(330,120,10,10);

  sprites=[s1,s2,s3,s4];
  console.log(sprites[2].position.x);
  console.log(sprites[2].position.y);
}

function draw() 
{
background(51);

drawSprites();
}

