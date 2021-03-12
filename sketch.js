const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld,ground,box1,box2;;


function setup(){
  createCanvas(400,400);
  myengine=Engine.create();

//my world is equal to my engine's world
myworld=myengine.world;

ground= new Ground(200,380,400,10);
box1=new box(200,300,50,50);
box2= new box(240,100,50,100);
}


function draw(){
background("black");

Engine.update(myengine);

ground.display();
box1.display();
box2.display();

}