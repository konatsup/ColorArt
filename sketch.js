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
const MAX_RADIUS = 2500;
let rippleList = [];
let inc = 10;
const fadeoutLimit = 2.0;

function preload() {
  // bgm = loadSound(ROOT_PATH + "assets/sound/melt.mp3");
  se1 = loadSound(ROOT_PATH + "assets/sound/water.mp3");
}

function setup() {
  createCanvas(displayWidth, displayHeight - 100);
  noStroke();
  rectWidth = width / 4;
  // bgm.play();
}

function draw() {
  colorMode(HSB);
  print(currentColorNumber * (360 / MAX_COLOR_COUNT));
  fill(currentColorNumber * (360 / MAX_COLOR_COUNT), 70, 100);
  rect(0, 0, displayWidth, displayHeight);

  rippleList.map((ripple, i) => {
    if (ripple.radius >= MAX_RADIUS) {
      rippleList.splice(i, 1);
      return;
    }
    ripple.radius += inc;
    ripple.fadeCurrentTime++;
    let alpha = fadeoutAlpha(fadeoutLimit, ripple.fadeCurrentTime / 60, fadeoutLimit);

    strokeWeight(4);
    stroke(255, alpha);
    noFill();
    ellipse(ripple.x, ripple.y, ripple.radius);
  });

  fill(0, 0, 90);
  rect(0, 0, displayWidth * (currentPosition / MAX_HEIGHT), 20, 50);

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
  // print("currentPosition: " + currentPosition);
  // print("colorNum: " + currentColorNumber);

}

function keyTyped() {
  switch (key) {
    case "a":
      rippleList.push({
        x: mouseX,
        y: mouseY,
        radius: 1,
        fadeCurrentTime: 0
      });
      se1.play();
      break;
  }
}


function touchStarted() {
  if (touches.length <= 0) {
    return;
  }
  rippleList.push({
    x: touches[0].x,
    y: touches[0].y,
    radius: 1,
    fadeCurrentTime: 0
  });
  se1.play();

}

function fadeoutAlpha(limit, currentMills, speed) {
  // console.log(currentMills);
  return 1.0 - (currentMills * speed / limit);
}