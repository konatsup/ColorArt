let rectWidth;
let bgm;

function preload() {
  bgm = loadSound('http://localhost:8100/melt.mp3');
}


function setup() {
  createCanvas(displayWidth, displayHeight);
  noStroke();
  background(230);
  rectWidth = width / 4;
  bgm.play();

}

function draw() {
  let keyIndex = -1;
  if (key >= 'a' && key <= 'z') {
    keyIndex = key.charCodeAt(0) - 'a'.charCodeAt(0);
  }



  if (keyIndex === -1) {
    // If it's not a letter key, clear the screen
    background(230);
    randFill_r = Math.floor(Math.random() * 255 + 1);
    randFill_g = Math.floor(Math.random() * 255 + 1);
    randFill_b = Math.floor(Math.random() * 255 + 1);
    fill(randFill_r, randFill_g, randFill_b);
  } else {
    // randFill_r = Math.floor(Math.random() * 255 + 1);
    // randFill_g = Math.floor(Math.random() * 255 + 1);
    // randFill_b = Math.floor(Math.random() * 255 + 1);
    // fill(randFill_r, randFill_g, randFill_b);
    let x = map(keyIndex, 0, 25, 0, width - rectWidth);
    rect(x, 0, rectWidth, height);
  }
}

function mousePressed() {
  // if (bgm.isPlaying()) {
  //   bgm.stop();

  // } else {
  //   bgm.play();
  // }
}