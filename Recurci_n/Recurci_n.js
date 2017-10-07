function setup() {
  createCanvas(600,600);
}

function draw() {
  background(0);
  noFill();
  stroke(255);
  drawCircle(300,300,200,'c');
}

function drawCircle(x,y,d,pos){
  ellipse(x,y,d);
  if(d>2){
    if(pos=='c'){
      drawCircle(x+3*d/4,y,d/2,'r');
      drawCircle(x-3*d/4,y,d/2,'l');
      drawCircle(x,y+3*d/4,d/2,'u');
      drawCircle(x,y-3*d/4,d/2,'d');
    }else if(pos == 'l'){
      drawCircle(x-3*d/4,y,d/2,'l');
      drawCircle(x,y+3*d/4,d/2,'u');
      drawCircle(x,y-3*d/4,d/2,'d');
    }else if(pos == 'r'){
      drawCircle(x+3*d/4,y,d/2,'r');
      drawCircle(x,y+3*d/4,d/2,'u');
      drawCircle(x,y-3*d/4,d/2,'d');
    }else if(pos=='u'){
      drawCircle(x+3*d/4,y,d/2,'r');
      drawCircle(x-3*d/4,y,d/2,'l');
      drawCircle(x,y+3*d/4,d/2,'u');
    }else{
      drawCircle(x+3*d/4,y,d/2,'r');
      drawCircle(x-3*d/4,y,d/2,'l');
      drawCircle(x,y-3*d/4,d/2,'d');
    }
  }
}
