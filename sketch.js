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
const centerTextList = ['赤', '橙', '黄', '緑', '水', '青', '紫', '桃'];
const underTextList = ['Red', 'Orange', 'Yellow', 'Green', 'LightBlue', 'Blue', 'Purple', 'Pink'];

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
  fill(currentColorNumber * (360 / MAX_COLOR_COUNT), 70, 100);
  rect(0, 0, displayWidth, displayHeight);

  fill(255)
    // .stroke(0, 100, 100)
    // .strokeWeight(5)
    .textSize(200)
    .textStyle(BOLD)
    .textAlign(CENTER)
    .text(centerTextList[currentColorNumber], displayWidth / 2, displayHeight / 2);

  textSize(80)
    .textStyle(BOLD)
    .textAlign(CENTER)
    .text(underTextList[currentColorNumber], displayWidth / 2, displayHeight / 2 + 110);

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

}

/*
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

}*/

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

function keyPressed() {
  if (keyCode === LEFT_ARROW || keyCode === BACKSPACE) {
    prev()
  } else if (keyCode === RIGHT_ARROW || keyCode === ENTER) {
    next();
  }
}

const prev = () => {
  if (currentColorNumber <= 0) {
    currentColorNumber = MAX_COLOR_COUNT - 1;
  } else {
    currentColorNumber--;
  }
}

const next = () => {
  if (currentColorNumber >= MAX_COLOR_COUNT - 1) {
    currentColorNumber = 0;
  } else {
    currentColorNumber++;
  }
}

function mousePressed() {
  rippleList.push({
    x: mouseX,
    y: mouseY,
    radius: 1,
    fadeCurrentTime: 0
  });
  se1.play();
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

const fadeoutAlpha = (limit, currentMills, speed) => {
  // console.log(currentMills);
  return 1.0 - (currentMills * speed / limit);
}