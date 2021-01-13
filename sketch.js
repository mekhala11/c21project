var canvas;
var music;
var box1 , box2 , box3 , box4;
var ball
var edges 
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
box1 = createSprite(0,580,360,30);
box2 = createSprite(295,580,200,30);
box3 = createSprite(515,580,200,30);
box4 = createSprite(740,580,200,30);

ball = createSprite(random(20,750),100,40,40);

box1.shapeColor = "red";
box2.shapeColor = "green";
box3.shapeColor = "blue";
box4.shapeColor = "yellow";
ball.shapeColour = "black";



    //create box sprite and give velocity

}

function draw() {
    background("white");
    //create edgeSprite
edges = createEdgeSprites();

if(box1.isTouching(ball)){

    ball.shapeColor = "red";
}
if(box2.isTouching(ball)){

    ball.shapeColor = "green";
}

if(box3.isTouching(ball)){

    ball.shapeColor = "blue";
}

if(box4.isTouching(ball)){

    ball.shapeColor = "yellow";
}
   ball.x = mouseX;
   ball.y = mouseY;
drawSprites();

//add condition to check if box touching surface and make it box
}
