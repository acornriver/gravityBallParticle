let ball;

function setup() {
  createCanvas(400, 200);

  ball = new Particle();
}


function draw() {
  background(220);

  let gravity = createVector(0, 0);
  ball.addForce(gravity);

  if(mouseIsPressed === true){
    let wind = createVector(random(0, 0.1),0);
    ball.addForce(wind);
    // let wind = createVector(random(0, 0.1),0);
    // ball.addForce(wind);
  }

  ball.update();
  ball.show();
}
