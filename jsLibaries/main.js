
let canvas;
let totalAgents = 15;
let agents = [];
let targ1;

let totalFood = 50;
let foods = [];

function setup()
{
  let canvas = createCanvas(500,300);
  canvas.position(160,300);
  angleMode(RADIANS);
  targ1 = createVector(200,200);
  for(let i=0; i<totalAgents; i++)
  {
    agents.push(new Agent(3,0.2,0.02));//size, max speed, max turning force
  }
  for(let i=0; i<totalFood; i++)
  {
    foods.push(new food(createVector(random(30,width-30),random(30,height-30))));
  }
  agents[0].color = (0,255,0);
}

function draw()
{
  targ1 = createVector(mouseX,mouseY);
  background(27);
  circle(targ1.x,targ1.y,5);
  for(let i=0; i<totalAgents; i++)
  {
    agents[i].update();
    agents[i].avoidWalls(30,30,width-30,height-30);
    agents[i].avoidOthers(agents,10);
    if(!agents[i].hasTarget)
    {
        agents[i].wander();
    }
  }

  for(let i=0; i<totalFood; i++)
  {
    foods[i].display();
  }
  fill(190,190,190,127);
  stroke(127);
  rect(30,30,width-60,height-60);

}
