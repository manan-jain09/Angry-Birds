const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var ground;
var pig1, pig2;
var log1, log2, log3, log4, log5;
var bird1, bgImg;

function preload() {
    bgImg = loadImage("bg.png");
}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;
    var rand = Math.round(random(300, 900));
    var rand1 = Math.round(random(100, 300));
    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(920 , 320, 70, 70);
    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
    box5 = new Box(810, 160, 70, 70);

    ground = new Ground(600 , height, 1200, 20);

    pig1 = new Pig(810, 350);
    pig2 = new Pig(810, 220);

    log1 = new Log(810, 260, 300, PI / 2);
    log2 = new Log(810, 180, 300, PI / 2);
    log3 = new Log(810, height - 30, 300, PI / 2);
    log4 = new Log(760, 120, 150, PI / 7);
    log5 = new Log(870, 120, 150, -PI / 7);
     
    bird1 = new Bird(100, 100);

}

function draw() {
    background(bgImg);
    Engine.update(engine);
    bounceOff(box1, box2);
    bounceOff(box1, box3);
    bounceOff(box1, box4);
    bounceOff(box1, box5);
    bounceOff(box2, box3);
    bounceOff(box2, box4);
    bounceOff(box2, box5);
    bounceOff(box3, box4);
    bounceOff(box3, box5);
    bounceOff(box4, box5);

    bounceOff(log1, log2);
    bounceOff(log1, log3);
    bounceOff(log1, log4);
    bounceOff(log1, log5);
    bounceOff(log2, log3);
    bounceOff(log2, log4);
    bounceOff(log2, log5);
    bounceOff(log3, log4);
    bounceOff(log3, box5);
    bounceOff(log4, log5);

    bounceOff(pig1, pig2);

    bird1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    log5.display();
}