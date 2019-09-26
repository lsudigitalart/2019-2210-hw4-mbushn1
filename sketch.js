let a;

function setup() {
  createCanvas(600,windowHeight);
  stroke(255);
  a = height=0;
   
}

function draw() {
  background("black");
  line(0, a, 200, a);
  line(350,a,600,a);
  line(0,a-200,75,a-200)
  line(200,a-200,600,a-200)
  line(0,a-400,400,a-400)
  line(550,a-400,600,a-400)
  line(0,a-600,200,a-600)
  line(350,a-600,600,a-600)
  line(0,a-800,25,a-800)
  line(150,a-800,600,a-800)
  line(0,a-1000,200,a-1000)
  line(350,a-1000,600,a-1000)
  line(0,a-1200,225,a-1200)
  line(475,a-1200,600,a-1200)
  line(0,a-1400,200,a-1400)
  line(350,a-1400,600,a-1400)
  line(0, a-1600, 200, a-1600);
  line(350,a-1600,600,a-1600);
  line(0,a-1800,75,a-1800)
  line(200,a-1800,600,a-1800)
  line(0,a-2000,400,a-2000)
  line(550,a-2000,600,a-2000)
  line(0,a-2200,200,a-2200)
  line(350,a-2200,600,a-2200)
  line(0,a-2400,25,a-2400)
  line(150,a-2400,600,a-2400)
  line(0,a-2600,200,a-2600)
  line(350,a-2600,600,a-2600)
  line(0,a-2800,225,a-2800)
  line(475,a-2800,600,a-2800)
  line(0,a-3000,200,a-3000)
  line(350,a-3000,600,a-3000)

  
  a = a + 3;
  if (a < 0) {
    a = height;

  }
    circle(mouseX,mouseY,100);
  
}



  
