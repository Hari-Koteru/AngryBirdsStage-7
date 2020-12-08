/*//Examples on different types of data in javascript

//String Data Type
var str = "hello world";
console.log(str);

//Number Data type
var num = 34.078;
console.log(num);

//Boolean Data type
var bool = false;
console.log(bool);

//Undefined data type
var object;
console.log(object);

//Reassigning the same undefined object to null
//Null data type
object = null;
console.log(object);

//array with same type  of data
var arr1 = [1,2,3,4,5];
console.log(arr1);

//array with different types of data
var arr2 = [23,4.5, "hello", null, true, "world"];
console.log(arr2);

//length of the array
console.log(arr1.length);
console.log(arr2.length);

//accessing values of an array
console.log(arr1[2]); //3 
console.log(arr2[3]);//null
console.log(arr2[5]); //world
console.log(arr2[arr2.length-1]);//world
console.log(arr1[arr1.length-1]);//5

//arrays inside an array
var arr3 = [2,3,4,[7,8,9],"hello",[10,11,12,13,45,15]];
console.log(arr3);
console.log(arr3.length);
console.log(arr3[1]);//3
console.log(arr3[3]);//[7,8,9]
console.log(arr3[3][0]); //7
console.log(arr3[5][4]);//45


//adding elements to array
var arr4 = ["orange", "apple", "kiwi", "mango"];
console.log(arr4);
arr4.push("banana");
arr4.push("pineapple");
arr4.push("fig");
console.log(arr4);

//removing the last element of the array
arr4.pop();
console.log(arr4) */




const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gameState !== "launched") {
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
    
}


function mouseReleased(){
    slingshot.fly();
    gamesState = "launched"; 
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}