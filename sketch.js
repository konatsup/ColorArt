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
let flg = false;

let palletHeight = 250;
let palletWidth = 1000;

const colorList = [{
    name_ja: '赤',
    name_en: 'Red',
    r: 255,
    g: 0,
    b: 0
  },
  {
    name_ja: '橙',
    name_en: 'Orange',
    r: 255,
    g: 165,
    b: 0
  },
  {
    name_ja: '黄',
    name_en: 'Yellow',
    r: 255,
    g: 255,
    b: 0
  },
  {
    name_ja: '緑',
    name_en: 'Green',
    r: 0,
    g: 255,
    b: 0
  },
  {
    name_ja: '水',
    name_en: 'Aqua',
    r: 0,
    g: 255,
    b: 255
  },
  {
    name_ja: '青',
    name_en: 'Blue',
    r: 0,
    g: 0,
    b: 255
  },
  {
    name_ja: '紫',
    name_en: 'Purple',
    r: 255,
    g: 0,
    b: 255
  }
];

const colorNumList = [];


function preload() {
  // bgm = loadSound(ROOT_PATH + "assets/sound/melt.mp3");
  se1 = loadSound(ROOT_PATH + "assets/sound/water.mp3");
}

function setup() {
  createCanvas(displayWidth, displayHeight - 100);
  noStroke();
  // bgm.setVolume(0.2);
  // bgm.play();

}


function draw() {

  if (focused === false) {
    // if (bgm.isPlaying()) {
    // bgm.pause();
    // }
  } else {
    // if (!bgm.isPlaying()) {
    //   bgm.play();
    // }
  }

  colorMode(HSB);
  fill(currentColorNumber * (360 / MAX_COLOR_COUNT), 70, 100);
  rect(0, 0, displayWidth, displayHeight - palletHeight);

  fill(0, 70, 20);
  rect(0, displayHeight - palletHeight, palletWidth, palletHeight);

  fill(0, 70, 50);
  rect(palletWidth, displayHeight - palletHeight, displayWidth - palletWidth, palletHeight);


  // rippleList.map((ripple, i) => {
  //   if (ripple.radius >= MAX_RADIUS) {
  //     rippleList.splice(i, 1);
  //     return;
  //   }
  //   ripple.radius += inc;
  //   ripple.fadeCurrentTime++;
  //   let alpha = fadeoutAlpha(fadeoutLimit, ripple.fadeCurrentTime / 60, fadeoutLimit);



}

const getRandomPosition = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

const getRandomPositionX = () => {
  const min = displayWidth / 2 - 500;
  const max = displayWidth / 2 + 500;
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

const getRandomPositionY = () => {
  const min = displayHeight / 2 - 300;
  const max = displayHeight / 2 + 300;
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function windowResized() {
  centerCanvas();
  resizeCanvas(displayWidth, displayHeight);
  background(255, 0, 200);
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
      /*      rippleList.push({
              x: getRandomPositionX(),
              y: getRandomPositionY(),
              radius: 1,
              fadeCurrentTime: 0
            });
            se1.play();*/
      break;
    case "n":
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
  /*rippleList.push({
    x: mouseX,
    y: mouseY,
    radius: 1,
    fadeCurrentTime: 0
  });
  se1.play();*/
}

function touchStarted() {
  /*if (touches.length <= 0) {
    return;
  }
  rippleList.push({
    x: touches[0].x,
    y: touches[0].y,
    radius: 1,
    fadeCurrentTime: 0
  });
  se1.play();*/

}

const fadeoutAlpha = (limit, currentMills, speed) => {
  // console.log(currentMills);
  return 1.0 - (currentMills * speed / limit);
}