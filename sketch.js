const Bodies= Matter.Bodies;
const Engine=Matter.Engine;
const World= Matter.World
const Body=Matter.Body;
var engine
var world;
var ground;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;
  Engine.run(engine);
  ground=new Ground(width/2,height-10,width,20) ;
  
  for(var k=0; k<=width; k=k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
  }

  for(var j =40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j =15;j<=width;j=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j =40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  for(var j =15;j<=width;j=j+50){
    plinkos.push(new Plinko(j,375));
  }
  


}

function draw() {
  background("black"); 
  Engine.update(engine);
  ground.display();
  for(var j=0; j<divisions.length; j++){
    divisions[j].display();
  }
  for(var k=0;k<plinkos.length;k++){
    plinkos[k].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(230,250),10));
  }
  
  for(var m=0;m<particles.length;m++){
    particles[m].display();
  }
}