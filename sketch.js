let ball;

function setup() {
  createCanvas(800, 400);

  ball = new Particle();
}


function draw() {
  background(220);

  let gravity = createVector(0, 0);
  ball.addForce(gravity);


  ball.update();
  ball.show();
}

function mouseClicked(){

  let mp = createVector(mouseX, mouseY);
  let took = p5.Vector.sub(ball.pos, mp);

  took.mult(0.1);

  ball.addForce(took);

}