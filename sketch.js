var canvas;
var music;
var gameObject1, gameObject2, gameObject3, gameObject4;
var ball;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    ball = createSprite(800, 400,80,30);
    ball.shapeColor = "magenta";
    ball.velocityX=3;
    ball.velocityY=2;

    gameObject1 = createSprite(0, 580, 360, 30);
    gameObject1.shapeColor = "green";
    gameObject2 = createSprite(295, 580, 200, 30);
    gameObject2.shapeColor = "blue";
    gameObject3 = createSprite(515, 580, 200, 30);
    gameObject3.shapeColor = "red";
    gameObject4 = createSprite(740, 580, 220, 30);
    gameObject4.shapeColor = "cyan";
  }


function draw() {
    background(rgb(169,169,169));
 edges=createEdgeSprites();
ball.bounceOff(edges);

if (gameObject1.isTouching(ball)&&ball.bounceOff(gameObject1)){
    ball.shapeColour="green";
    music.play();
    }
    if (gameObject2.isTouching(ball)&&ball.bounceOff(gameObject2)){
        ball.shapeColour="blue";
        music.play();
        }
        if (gameObject3.isTouching(ball)){
            ball.shapeColour="red";
            music.stop();
            ball.velocityX=0;
            ball.velocityY=0;
            }
            if (gameObject4.isTouching(ball)&&ball.bounceOff(gameObject4)){
                ball.shapeColour="cyan";
                music.play();
                }
    //add condition to check if box touching surface and make it box
    drawSprites();
}
