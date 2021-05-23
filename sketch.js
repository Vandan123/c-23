const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4;

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
     ground = new Ground (200,390,400,20)
     box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    box3 = new Box(50,50,50,50);
    box4 = new Box(50,10,50,100);
}

function draw(){
    background(0);
    Engine.update(engine);
        box2.display();
    box1.display();
    ground.display();
    box3.display();
    box4.display();
}
