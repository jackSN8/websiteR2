class wave
{
  constructor(period,amplitude,phase)
  {
    this.period = period;
    this.amplitude = amplitude;
    this.phase = phase;
  }

  // update()
  // {
  //   strokeWeight(5);
  //   stroke(255);
  //   for(let i=0; i<width; i+=5)
  //   {
  //     this.y = this.waveMap(i);
  //     point(i,this.y);
  //   }
  // }

  //Function that maps the three wave variables to actual wave positions
  //Function of wave is essentially sin(x+phase*(period/2PI))*amplitude although this code uses
  //pixels rather than radians for all calulations (sin must take radians)
  waveMap(x)
  {
    this.ypos = sin(TWO_PI*x/this.period+this.phase);
    this.ypos *= this.amplitude;
    return this.ypos;
  }
}
