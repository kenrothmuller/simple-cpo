function setup() {
  // Drawing Canvas
  createCanvas(400, 400);
  // Create Audio Oscillator
  osc = new p5.Oscillator(600); // Create new sine wave osc for 600 Hz
  osc.start(); // Enable the oscillator
  osc.amp(0);  // Set Volume to 0 - effectively turns off osc, 0 amplitude
}

function draw() {
  background(220);
  text("PRESS any key or CLICK mouse", 110, 50)
  noStroke();
  // Base
  fill(128);
  rect(150, 200, 100, 18, 3);
  // Paddle
  fill("red");
  if (isKeyPressed || mouseIsPressed) {
    osc.amp(0.5); // Turn oscillator on to 1/2 volumn
    // Key down
    rect(175, 187, 50, 10, 5);
    text("sidetone", 255, 195);
  } else {
    osc.amp(0); // Turn off oscillator
    // Key up
    rect(175, 180, 50, 10, 5);
  }
}
