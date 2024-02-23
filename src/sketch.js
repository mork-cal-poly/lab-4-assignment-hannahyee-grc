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

}
