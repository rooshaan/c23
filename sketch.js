const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
//to create the a ground and add it to the world

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
//restitutionis the bounciness of the ball
    var ball_options ={
        restitution:1.0
    }
//to create the a ball and add it to the world
    ball=Bodies.circle(200,100,20,ball_options);
    World.add(world,ball);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    //to display the rectangle
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    //to display the circle
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);

}