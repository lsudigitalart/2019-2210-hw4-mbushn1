function setup(){
  createCanvas (800,600);
}

function draw() { 
  background(100);
  circle(mouseX,mouseY,100);

  if(mouseX < 0 && mouseY < 0){
    topLeftCorner =1;
    print("tlc")
  }
  if (mouseX > width && mouseY < 0 ){
    topRightCorner =1;
    print("trc");
  }
}