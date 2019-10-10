let bgm;
let diameter = 0;
// const ROOT_PATH = "http://localhost:8100/";
const ROOT_PATH = ""; // local server host

let currentPosition = 0;
const MAX_HEIGHT = 10000;
const MAX_COLOR_COUNT = 7;
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
    rgb: {
      r: 255,
      g: 0,
      b: 0
    }
  },
  {
    name_ja: '橙',
    name_en: 'Orange',
    rgb: {

      r: 255,
      g: 165,
      b: 0
    }
  },
  {
    name_ja: '黄',
    name_en: 'Yellow',
    rgb: {
      r: 255,
      g: 255,
      b: 0
    }
  },
  {
    name_ja: '緑',
    name_en: 'Green',
    rgb: {
      r: 0,
      g: 255,
      b: 0
    }
  },
  {
    name_ja: '水',
    name_en: 'Aqua',
    rgb: {
      r: 0,
      g: 255,
      b: 255
    }
  },
  {
    name_ja: '青',
    name_en: 'Blue',
    rgb: {
      r: 0,
      g: 0,
      b: 255
    }
  },
  {
    name_ja: '紫',
    name_en: 'Purple',
    rgb: {
      r: 255,
      g: 0,
      b: 255
    }
  }
];

const templateColorId = [
  [

  ]
]

const N = 255;
const L = 255;
const SCALE = 3.8;
const colorIdList = [];
let useColorCount = 1;
const maxUseColorCount = 9;


function preload() {
  // bgm = loadSound(ROOT_PATH + "assets/sound/melt.mp3");
  se1 = loadSound(ROOT_PATH + "assets/sound/water.mp3");
}

let circle;

function setup() {
  // createCanvas(windowWidth, windowHeight, WEBGL);
  createCanvas(windowWidth, windowHeight);

  noStroke();
  // noLoop();
  // bgm.setVolume(0.2);
  // bgm.play();

  circle = {
    x: width / 2,
    y: -50,
    r: 50
  }

  // animate it to the middle of the screen
  TweenMax.to(circle, 2, {
    y: height / 2,
    r: 200,
    delay: 2,
    ease: Elastic.easeOut,
    onComplete: finished
  });

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
  background(30);
  fill(255);
  ellipse(circle.x, circle.y, circle.r);

  colorMode(RGB);
  // fill(currentColorNumber * (360 / MAX_COLOR_COUNT), 70, 100);
  // rect(0, 0, displayWidth, displayHeight - palletHeight);

  fill(255);
  rect(0, displayHeight - palletHeight, palletWidth, palletHeight);

  fill(mapObjectToColor(colorList[currentColorNumber].rgb));

  rect(500, 300, 300, 300);

  // color pallet
  fill(128)
    .rect(0, displayHeight - palletHeight, palletWidth, palletHeight);


  // for (let i = 0; i < maxUseColorCount - useColorCount; i++) {
  //   fill(mapObjectToColor(colorList[colorNumList[i]].rgb))
  //     .rect()
  // }

  // color info
  fill(64)
    .rect(palletWidth, displayHeight - palletHeight, displayWidth - palletWidth, palletHeight);


  // fractral();
  // sinecosineSample();

  // rippleList.map((ripple, i) => {
  //   if (ripple.radius >= MAX_RADIUS) {
  //     rippleList.splice(i, 1);
  //     return;
  //   }
  //   ripple.radius += inc;
  //   ripple.fadeCurrentTime++;
  //   let alpha = fadeoutAlpha(fadeoutLimit, ripple.fadeCurrentTime / 60, fadeoutLimit);

}

function finished() {
  console.log("animation finished")
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

const mapObjectToColor = obj => {
  return color(obj.r, obj.g, obj.b);
}

function windowResized() {
  // centerCanvas();
  resizeCanvas(displayWidth, displayHeight);
  background(255, 0, 200);
}

function sinecosineSample() {
  background(0);

  /*ライトの設定。マウスの位置で光の方向が変化*/
  var locY = (mouseY / height - 0.5) * (-2);
  var locX = (mouseX / width - 0.5) * 2;

  ambientLight(100, 80, 80);
  pointLight(200, 200, 200, locX, locY, 0);

  /*Yを少しずつ回転。*/
  rotateY(frameCount * 0.0001);
  //ドラック対応
  orbitControl();

  for (var j = 0; j < 10; j++) {
    push();
    for (var i = 0; i < 100; i++) {
      translate(sin(frameCount * 0.001 + j) * 200, sin(frameCount * 0.001 + j) * 300, i * 0.1);
      rotateZ(frameCount * 0.002);
      push();
      /*プリミティブの作成*/
      sphere(2, 10, 100);
      pop();
    }
    pop();
  }
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
    case "1":
      useColorCount = 1;
      break;
    case "2":
      useColorCount = 2;
      break;
    case "3":
      useColorCount = 3;
      break;

    case "4":
      useColorCount = 4;
      break;
    case "5":
      useColorCount = 5;
      break;
    case "6":
      useColorCount = 6;
      break;
    case "7":
      useColorCount = 7;
      break;
    case "8":
      useColorCount = 8;
      break;
    case "9":
      useColorCount = 9;
      break;


    case "a":
      /*      rippleList.push({
              x: getRandomPositionX(),
              y: getRandomPositionY(),
              radius: 1,
              fadeCurrentTime: 0
            });
            se1.play();*/
      break;
    case "z":
      currentColorNumber = 0;
      break;
    case "x":
      currentColorNumber = 1;
      break;
    case "c":
      currentColorNumber = 2;
      break;
    case "v":
      currentColorNumber = 3;
      break;
    case "b":
      currentColorNumber = 4;
      break;
    case "n":
      currentColorNumber = 5;
      break;
    case "m":
      currentColorNumber = 6;
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