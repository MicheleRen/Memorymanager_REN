let sunHeight;
let horizon = 500;

function setup() {
  createCanvas(1400, 1400);
}

function draw() {
  sunHeight = mouseY;
  let brightness = map(sunHeight, 0, horizon, 200, 0);
  brightness = constrain(brightness, 0, 200);

  background(0, brightness / 2, brightness);

  noStroke();
  fill("yellow");
  circle(200, sunHeight, 100);

  fill("green");
  rect(0, horizon, 1400, 100);
}