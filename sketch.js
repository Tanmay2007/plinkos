const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var grd1,grd2,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,grd3,Polygon,d1;
var divisionHeight=300;

    
var particles=[]
var plinkos=[]
var divisions=[]


function preload(){

}


function setup(){
 
    var canvas = createCanvas(480,700);
    engine = Engine.create();
    world = engine.world;


  

  for(var k=0;k<=width;k=k+80)         {
    divisions.push(new division(k,height-divisionHeight/2,10,divisionHeight));
  }

  for (var j=40;j<=width;j=j+50){
    plinkos.push(new plinko(j,175,10))
  }
  for (var j=40;j<=width-10;j=j+50){
    plinkos.push(new plinko(j,75,10))

  }
  for (var j=40;j<=width-20;j=j+50){
    plinkos.push(new plinko(j,275,10))
  }
  for (var j=40;j<=width-30;j=j+50){
    plinkos.push(new plinko(j,375,10))
  }
   grd1=new Ground(240,690,500,10)
}

function draw(){
  background(0)
  Engine.update(engine)

  if (frameCount%=60){
      particles.push(new particle(random(width/2-10,width/2+10),10,10))
    
  }

  for (var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }

  for (var j=0;j<particles.length;j++){
    particles[j].display();
  }

  for(var k=0;k<divisions.length;k++)         {
  divisions[k].display();
  }
 
}

