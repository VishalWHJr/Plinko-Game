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
var divisionHeight=250;
var a=0;
var b=0;
var c=1;

function setup() {
  createCanvas(480,600);
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
    plinkos.push(new Plinko(j,155));
  }
  for(var j =40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,225));
  }
  for(var j =15;j<=width;j=j+50){
    plinkos.push(new Plinko(j,300));
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

  if(a===b){
    fill("red");
    textSize(28);
    text("press space to start", 120, 250);
  }


  if(frameCount%60===0 && a===c){
    particles.push(new Particle(random(230,250),10));
  }
   
  
  for(var m=0;m<particles.length;m++){
    particles[m].display();
  }
}

function keyPressed(){
  if(keyCode===32 && a===b){
    a=c;
  }
}