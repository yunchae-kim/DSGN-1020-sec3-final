function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);

  // Create button to start game
  button = createButton('Start');
  button.style('height', '30px');
  button.style('width', '100px');
  button.position(250, height - 40);
  noLoop();
}

let located = false;

function mouseClicked() {
  if (located === false) {
    if (mouseX > 50 && mouseX < 350 && mouseY > 50 && mouseY < 350) {
      rect(mouseX, mouseY, 5, 5);
      located = true;
    }
  }
}

function draw() {
  background(0);

  // Create instruction text
  fill(255);
  textSize(16);
  text('Click a random location in the white box.', 50, 20);
  text('See how long your slime survives.', 50, 40);

  // Scoring board
  fill(255);
  textSize(12);
  text('High score: ', 50, height - 30);
  text('Current score: ', 50, height - 15);

  // Create rectangle for game area
  fill(255);
  rect(200, 200, 300, 300);
}
