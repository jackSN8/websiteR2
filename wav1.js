let width = 500;
let height = 300;
let waves =[];
let totalWaves = 4;

function setup()
{
  let canvas = createCanvas(500,300);
  canvas.position(400,500);
  //Period in pixels, Ampltiude in pixels, Phase difference in radians
  // for(let i=0; i<totalWaves; i++)
  // {
  //   waves.push(new wave(random(100,300),random(20,80),random(0,TWO_PI)))
  // }
  waves.push(new wave(800,50,0));
  waves.push(new wave(200,20,0));
}
function draw()
{
  background(47,64,79);
  translate(0,height/2);
  strokeWeight(4);
  stroke(255);
  for(let x=0; x<width; x+=1)
  {
    let y=0;
    for(let i=0; i<waves.length; i++)
    {
      y += waves[i].waveMap(x);
      waves[i].phase +=(PI/50000);
    }
    point(x,y);
  }
}
