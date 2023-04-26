// Create variables
let located = false; // Variable to check if dot has been placed
let started = false; // Varaible to check if game has started
let xCor = 0; // X coordinate of the dot
let yCor = 0; // Y coordinate of the dot
let currentScore = 0; // Current score of the game
let highScore = 0; // High score of the game
let crashed = false; // Check if dot has been crashed
let dotWidth = 10;
let dotHeight = 10;
let canvasWidth = 400;
let canvasHeight = 400;
let bgWidth = 300;
let bgHeight = 300;
let minX = (canvasWidth - bgWidth) / 2;
let maxX = (canvasWidth - bgWidth) / 2 + bgWidth;
let minY = (canvasHeight - bgHeight) / 2;
let maxY = (canvasHeight - bgHeight) / 2 + bgHeight;
let frameRateSetting = 2;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  rectMode(CENTER);
  background(0);
  frameRate(frameRateSetting);

  // Create instruction text
  fill(255);
  textSize(12);
  text('Click a random location in the white box to place your dot.', 30, 20);
  text(
    'Press Start and see how long your dot survives without crashing.',
    30,
    40
  );

  // Scoring board
  // fill(255);
  // textSize(12);
  // text('High score: ' + highScore, 50, height - 30);
  // text('Current score: ' + currentScore, 50, height - 15);

  // Create rectangle for game area
  fill(255);
  rect(200, 200, bgWidth, bgHeight);

  // Create button to start game
  button = createButton('Start');
  button.style('height', '30px');
  button.style('width', '100px');
  button.position(250, height - 40);
  button.mouseClicked(startGame);

  noLoop();
}

// Function to locate dot
function mouseClicked() {
  if (located === false) {
    if (mouseX > minX && mouseX < maxX && mouseY > minY && mouseY < maxY) {
      fill(100, 200, 100);
      rect(mouseX, mouseY, dotWidth, dotHeight);
      xCor = mouseX;
      yCor = mouseY;
      located = true;
    }
  }
}

function startGame() {
  if (located) {
    // Change game status
    started = true;

    // Change button
    button = createButton('Reset');
    button.style('height', '30px');
    button.style('width', '100px');
    button.position(250, height - 40);
    button.mouseClicked(resetGame);

    // Update score
    currentScore = 0;
    setInterval(incrementScore, 1000);

    loop();
  }
}

function resetGame() {
  // Change game status
  started = false;
  located = false;

  // Change button
  button = createButton('Start');
  button.style('height', '30px');
  button.style('width', '100px');
  button.position(250, height - 40);
  button.mouseClicked(startGame);

  // Create rectangle for game area
  fill(255);
  rect(200, 200, 300, 300);

  noLoop();
}

function incrementScore() {
  currentScore++;
}

function draw() {
  if (started) {
    let x1 = random(minX, maxX);
    let x2 = random(minX, maxX);
    let y1 = random(minY, maxY);
    let y2 = random(minY, maxY);
    line(x1, y1, x2, y2);
  }
}
