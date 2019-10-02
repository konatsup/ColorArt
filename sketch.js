let rectWidth;
let bgm;
let diameter = 0;
// const ROOT_PATH = "http://localhost:8100/";
const ROOT_PATH = ""; // local server host

let currentPosition = 0;
const MAX_HEIGHT = 10000;
const MAX_COLOR_COUNT = 8;
let currentColorNumber = 0;
const BASE_SECTION_HEIGHT = MAX_HEIGHT / MAX_COLOR_COUNT;

function preload() {
  // bgm = loadSound(ROOT_PATH + "assets/sound/melt.mp3");
  se1 = loadSound(ROOT_PATH + "assets/sound/water.mp3");
}

function setup() {
  createCanvas(displayWidth, displayHeight - 100);
  noStroke();
  rectWidth = width / 4;
}

function draw() {
  colorMode(HSB);
  print(currentColorNumber * (360 / MAX_COLOR_COUNT));
  fill(currentColorNumber * (360 / MAX_COLOR_COUNT), 70, 100);
  rect(0, 0, displayWidth, displayHeight);
  fill(0, 0, 90);
  rect(0, 0, displayWidth * (currentPosition / MAX_HEIGHT), 20, 50);

  if (mouseIsPressed) {
    ripple();
  }
  // background(230);
}

function mouseWheel(event) {
  currentPosition += event.delta;

  if (currentPosition > MAX_HEIGHT) {
    currentPosition = MAX_HEIGHT;
  }

  if (currentPosition < 0) {
    currentPosition = 0;
  }
  currentColorNumber = Math.floor(currentPosition / BASE_SECTION_HEIGHT);
  print("currentPosition: " + currentPosition);
  print("colorNum: " + currentColorNumber);

}

function keyTyped() {
  switch (key) {
    case "a":
      se1.play();
      break;
  }
}

function mousePressed() {
  // if (bgm.isPlaying()) {
  // bgm.stop();
  // } else {
  // bgm.setVolume(0.2);
  // bgm.play();
  // }
}

let inc = 10;

function ripple() {
  diameter += inc;

  // noFill();
  // strokeWeight(5);
  // stroke(255, 204, 0);
  // ellipse(mouseX, mouseY, diameter, diameter);
}