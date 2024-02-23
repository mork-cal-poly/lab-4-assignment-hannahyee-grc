function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);
  push();
    // The translate command will move your creature
    // over and down from the origin by the specified amount.
    // TODO:
    // Change the numbers if you want your creature placed
    // somewhere else in the canvas.
    translate(150, 230);
  

    // TODO:
  //shark body
 fill(125, 150, 230)
  stroke(125, 150, 230)
  ellipse(0, 0, 100, 50)
  fill(125, 150, 230)
  stroke(125,150,230)
 triangle(-75,0, -25,-21.5, -25,21.5)
  
 //tooth
  push()
  fill(230)
  stroke(230)
 triangle(64,-1, 66,6, 68,-1)
  pop()
  
  //head
  
 triangle(75,0, 25,-22, 25,10)
  //tooth
  push()
  fill(230)
  stroke(230)
  triangle(55,8, 57,2, 59,10)
  pop()
  //mouth
 push()
  rotate(-PI/16)
  arc(45,16, 55,22, PI/8, PI)
  pop()
  
  //shark tail
  triangle(-125,-50, -70,0, -95,0)
  triangle(-125,30, -70,0, -95,0)
  
  //shark fins
  triangle(10,20, 30,20, -25,40)
  triangle(10,20, 30,20, 8,37)
  triangle(-10,-20, -10,-50, 10,-20)
  
  //gills
  stroke(0)
  line(12,-10, 12,10)
  line(16,-10, 16,10)
  line(20,-10, 20,10)
  
  //face
  fill(0)
  ellipse(35,-5, 5, 5)
  line(28,-18, 40,-12)
   pop();
    // Put your creature code here (after the push() and
    // translate() above and before the pop() below).
    // Remember to have it on top of the origin...
    // the translate command will move it into the canvas for us.

    //alasko12 surpriseCreature
    translate(350, 350);
    scale(0.3);

    push();
  
  //ears
  fill(255, 199, 44);
  stroke(245, 179, 0);
  strokeWeight(4);
  arc(-80, -80, 140, 140, PI/2, 0);//left
  arc(80, -80, 140, 140, PI, PI/2);//right
  fill(255, 252, 148);
  arc(-80, -80, 90, 90, 3*PI/4, 0);//inner left
  arc(80, -80, 90, 90, PI, PI/4);//inner right
  
  //body
  fill(255, 199, 44);
  stroke(245, 179, 0);
  strokeWeight(4);
  rect(-160, 100, 330, 330, 110);//outer
  fill(255, 252, 148);
  rect(-105, 140, 220, 220, 110);//inner
  
  //Head
  fill(255, 252, 148);
  stroke(245, 179, 0);
  strokeWeight(4);
  ellipse (0,0, 250, 250);
  
  //eyes
  fill(255, 199, 44);
  noStroke();
  ellipse (-50,-30, 90, 70);//left patch
  ellipse (50,-30, 90, 70);//right patch
  fill(112, 135, 20);
  stroke(255, 252, 148);
  strokeWeight(4);
  ellipse (-50,-30, 30, 30);//left eyeball
  ellipse (50,-30, 30, 30);//right eyeball
  fill(255);
  noStroke();
  ellipse (-45,-35, 8, 8);//left sparkle
  ellipse (45,-35, 8, 8);//right sparkle
  
  //mouth+nose
  fill(255, 252, 148);
  stroke(112, 135, 20);
  arc(0, 70, 100, 40, 0, PI);//mouth
  stroke(112, 135, 20);
  line(0, 60, 0, 90);//nose-mouth line
  fill(112, 135, 20);
  noStroke();
  triangle (40, 25, 0, 60, -40, 25);//nose

  pop();

}
