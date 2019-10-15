let colorList = [
  [{
      r: 240,
      g: 19,
      b: 77
    },
    {
      r: 255,
      g: 111,
      b: 94
    },
    {
      r: 245,
      g: 240,
      b: 227
    },
    {
      r: 64,
      g: 191,
      b: 193
    }
  ],
  [{
      r: 236,
      g: 252,
      b: 255
    },
    {
      r: 178,
      g: 252,
      b: 255
    },
    {
      r: 94,
      g: 223,
      b: 255
    },
    {
      r: 62,
      g: 100,
      b: 255
    }
  ],
  [{
      r: 255,
      g: 182,
      b: 185
    },
    {
      r: 250,
      g: 227,
      b: 217
    },
    {
      r: 187,
      g: 222,
      b: 214
    },
    {
      r: 138,
      g: 198,
      b: 209
    }
  ],
  [{
      r: 150,
      g: 206,
      b: 180
    },
    {
      r: 255,
      g: 238,
      b: 173
    },
    {
      r: 217,
      g: 83,
      b: 79
    },
    {
      r: 255,
      g: 173,
      b: 96
    }
  ],
  [{
      r: 5,
      g: 68,
      b: 92
    },
    {
      r: 242,
      g: 49,
      b: 127
    },
    {
      r: 92,
      g: 79,
      b: 116
    },
    {
      r: 4,
      g: 0,
      b: 0
    }
  ],
  [{
      r: 19,
      g: 51,
      b: 76
    },
    {
      r: 0,
      g: 87,
      b: 146
    },
    {
      r: 246,
      g: 246,
      b: 233
    },
    {
      r: 253,
      g: 95,
      b: 0
    }
  ],
  [{
      r: 46,
      g: 148,
      b: 185
    },
    {
      r: 255,
      g: 253,
      b: 192
    },
    {
      r: 240,
      g: 183,
      b: 117
    },
    {
      r: 210,
      g: 85,
      b: 101
    }
  ],
  [{
      r: 174,
      g: 184,
      b: 195
    },
    {
      r: 78,
      g: 14,
      b: 46
    },
    {
      r: 225,
      g: 231,
      b: 235
    },
    {
      r: 148,
      g: 123,
      b: 137
    }
  ],
  [{
      r: 0,
      g: 223,
      b: 252
    },
    {
      r: 0,
      g: 140,
      b: 158
    },
    {
      r: 0,
      g: 95,
      b: 107
    },
    {
      r: 52,
      g: 56,
      b: 56
    }
  ],
  [{
      r: 251,
      g: 245,
      b: 121
    },
    {
      r: 0,
      g: 89,
      b: 149
    },
    {
      r: 250,
      g: 98,
      b: 95
    },
    {
      r: 96,
      g: 4,
      b: 115
    }
  ],
  [{
      r: 244,
      g: 240,
      b: 230
    },
    {
      r: 217,
      g: 217,
      b: 243
    },
    {
      r: 206,
      g: 239,
      b: 228
    },
    {
      r: 157,
      g: 211,
      b: 168
    }
  ],
  [{
      r: 254,
      g: 244,
      b: 169
    },
    {
      r: 59,
      g: 154,
      b: 156
    },
    {
      r: 75,
      g: 194,
      b: 197
    },
    {
      r: 120,
      g: 254,
      b: 224
    }
  ],
  [{
      r: 23,
      g: 34,
      b: 59
    },
    {
      r: 38,
      g: 56,
      b: 89
    },
    {
      r: 107,
      g: 119,
      b: 141
    },
    {
      r: 255,
      g: 103,
      b: 104
    }
  ],
  [{
      r: 212,
      g: 237,
      b: 244
    },
    {
      r: 226,
      g: 242,
      b: 213
    },
    {
      r: 249,
      g: 251,
      b: 186
    },
    {
      r: 246,
      g: 194,
      b: 194
    }
  ],
  [{
      r: 8,
      g: 217,
      b: 214
    },
    {
      r: 37,
      g: 42,
      b: 52
    },
    {
      r: 255,
      g: 46,
      b: 99
    },
    {
      r: 234,
      g: 234,
      b: 234
    }
  ],
  [{
      r: 127,
      g: 149,
      b: 209
    },
    {
      r: 255,
      g: 130,
      b: 169
    },
    {
      r: 255,
      g: 192,
      b: 190
    },
    {
      r: 255,
      g: 235,
      b: 231
    }
  ]
];

let canvas;
let img;
let imgClone;
let msg = "swiped status";
let mk;
let top1 = 120;
let bottom1 = 270;
let swipeMsg = {
  // message: "⬅︎ Swipe to change the color ➡︎",
  message: "⬅︎ 左右にスワイプすると配色が変わります ➡︎",
  a: 255
}

let pcMsg = {
  a: 255
}

let circle;

let circle2;

let palletNum = 0;
let MAX_COLOR_COUNT;
let pDeviceOrientation;

const mapObjectToColor = obj => {
  return color(obj.r, obj.g, obj.b);
};
let updateIcon;
let updateButton;
let current = 0;

let sizeText = "Width : Height";

let device;
const iconWidth = 100;

let monster;
// center point
let centerX = 0.0,
  centerY = 0.0;


let radius = 100,
  rotAngle = -45;
let accelX = 0.0,
  accelY = 0.0;
let deltaX = 0.0,
  deltaY = 0.0;
let springing = 0.0009,
  damping = 0.98;

//corner nodes
let nodes = 25;

let boundPower = 0.4;

//zero fill arrays
let nodeStartX = [];
let nodeStartY = [];
let nodeX = [];
let nodeY = [];
let angle = [];
let frequency = [];
let pass = "";
let messageFlg = false;
let backgroundCircle = {
  r: 0
};
let messageAlpha = {
  a: 255
}
let spreadFlg = false;

const yMessage = "ちゃんゆい！約1ヶ月お疲れ様でした！ちゃんゆいはWebDの講師として最高だったと思います(マジ大先生)。人数も多く本当に大変だったと思うけど、その中で僕の相談に乗ってくれて本当に感謝してます。自分にはなかった発想やUI/UXの視点からのフィードバックなど一つ一つが刺激的で、さすがだなぁと思う反面、自分もその期待に答えようと思って一層頑張ろうと思ってやってました。また、研修が始まってすぐに「ちゃんとガチでやりきろう」という話をして、今回は思い切り挑戦しようと思ってやりました。妥協しないで強い意志をもってモノづくりに真剣なところがすごく好きなので、今後も一緒に色々やっていけたらなと思ってます。京都での飲みもすごく楽しくて、 自分がびっくりするくらいリラックスしながら過ごせました。 でも最近ちょっと甘えすぎてしまって反省しているので、 もう少ししっかりして締めるところは締めていきたいと思っております。(決意表明演説) あと今度一緒のチームでハッカソンとかあったら出たいぞ〜！これからもよろしくお願いします〜 :sake: :banana_yogurt: :captain: "
const jMessage = "じゃす！約1ヵ月お疲れ様でした！じゃすはwebコースのサポートで来てくれて、本当に助けられるシーンが多くて感謝感謝の気持ちです。途中でアイデアが迷走して悩んでいたときにミーティングしてくれて、あれがなければ今どうなってるか分からないというくらい僕にとって大きな体験でした。人の考えをうまく言語化させたり、いい方向に導こうとする気持ちとスキルがあって、これからももっともっと良いものをつくっていく人になるんだなぁと思うし、これからも応援してます。あと京都での飲みも楽しくて、 一週間のワクワクがそこに詰まってたりしました(⬅悪い)。 うまい飯とお酒は神だし、 ああやって話せる空間がすごく好きなので、 誘って付き合ってくれてほんとありがとう。 最近ちょっと甘えっぱなしだったので、 これからはもう少ししっかりしていきたい(抱負) のと、 僕ができることで返せることはたくさん返していきたいので、 気軽に色々誘ってもらえたら嬉しいです。 あと今度ハッカソンとか一緒に出たいぞ！これからもよろしくお願いします〜:sake: :beer: :captain:  "
// soft-body dynamics
let organicConstant = 1.0;

let node2StartX = [];
let node2StartY = [];
let node2X = [];
let node2Y = [];
let myFont;

function preload() {
  updateIcon = loadImage('assets/img/update8.png');
  myFont = loadFont("assets/fonts/gen.ttf");

}

function setup() {
  window.addEventListener("touchstart", function (event) {
    event.preventDefault();
  }, {
    passive: false
  });
  window.addEventListener("touchmove", function (event) {
    event.preventDefault();
  }, {
    passive: false
  });

  // set options to prevent default behaviors for swipe, pinch, etc
  var options = {
    preventDefault: true
  };

  // document.body registers gestures anywhere on the page
  var hammer = new Hammer(document.body, options);
  hammer.get('swipe').set({
    direction: Hammer.DIRECTION_ALL
  });

  hammer.on("swipe", swiped);

  canvas = createCanvas(windowWidth, windowHeight);

  device = (windowWidth > 480 && windowHeight > 500) ? "pc" : "smartphone";

  if (device == "smartphone") {
    radius = 60;
    circle = {
      x: windowWidth / 2,
      y: top1,
      r: 200
    };

    circle2 = {
      x: windowWidth / 2,
      y: bottom1,
      r: 150
    };
  } else if (device == "pc") {
    circle = {
      x: windowWidth / 2,
      y: top1,
      r: 200
    };

    circle2 = {
      x: windowWidth / 2,
      y: bottom1,
      r: 150
    };

    fadeInPC();

  }

  updateButton = {
    image: updateIcon,
    x: windowWidth - iconWidth / 1.5,
    y: windowHeight - iconWidth / 1.5,
    w: iconWidth,
    h: iconWidth
  }

  monster = {
    image: updateIcon,
    x: windowWidth / 2,
    y: windowHeight / 2,
    w: 150,
    h: 200
  }



  sizeText = windowWidth + " : " + windowHeight;
  // createCanvas(670, 520);
  MAX_COLOR_COUNT = colorList.length;

  img = createGraphics(windowWidth, windowHeight);
  img.noStroke();

  mk = createGraphics(windowWidth, windowHeight);
  circle1Motion1();
  circle2Motion1();
  fadeInInitMessage();

  pDeviceOrientation = deviceOrientation;

  //center shape in window
  centerX = width / 2;
  centerY = height / 2;

  //initialize arrays to 0
  for (let i = 0; i < nodes; i++) {
    nodeStartX[i] = 0;
    nodeStartY[i] = 0;
    nodeY[i] = 0;
    nodeY[i] = 0;
    angle[i] = 0;
  }

  // iniitalize frequencies for corner nodes
  for (let i = 0; i < nodes; i++) {
    frequency[i] = random(5, 12);
  }
  noStroke();
  // frameRate(30);
}

function draw() {
  if (pDeviceOrientation !== undefined && pDeviceOrientation !== deviceOrientation) {
    noCanvas();
    createCanvas(windowWidth, windowHeight);
    // next();
  }
  pDeviceOrientation = deviceOrientation;

  let backgroundColor = mapObjectToColor(colorList[palletNum][current + 2]);

  let textColor =
    backgroundColor.levels[0] * 0.299 +
    backgroundColor.levels[1] * 0.587 +
    backgroundColor.levels[2] * 0.114 <
    135 ?
    255 :
    60;
  background(backgroundColor);
  img.background(mapObjectToColor(colorList[palletNum][current + 1]));
  img
    .fill(mapObjectToColor(colorList[palletNum][current]))
    .ellipse(circle2.x, circle2.y, circle2.r);

  mk.ellipse(circle.x, circle.y, circle.r);

  fill(mapObjectToColor(colorList[palletNum][current + 3])).ellipse(
    circle2.x,
    circle2.y,
    circle2.r
  );

  (imgClone = img.get()).mask(mk.get());
  image(imgClone, 0, 0);

  img.clear();
  mk.clear();

  // うみぼうず
  drawShape();
  moveShape();

  textAlign(CENTER);
  textSize(22);
  if (device == "smartphone") {
    textSize(15).
    fill(textColor, 255 - swipeMsg.a).text(swipeMsg.message, windowWidth / 2, windowHeight - 150);
    push();
    imageMode(CENTER);
    tint(textColor);
    image(updateButton.image, updateButton.x, updateButton.y, updateButton.w, updateButton.h);
    pop();
  } else if (device == "pc") {
    // fill(textColor, 255 - swipeMsg.a).text(swipeMsg.message, windowWidth / 2, windowHeight - 150);
    fill(textColor, 255 - pcMsg.a).text("Enterキー: 色の組み合わせを変更", windowWidth / 2, windowHeight - 160);
    fill(textColor, 255 - pcMsg.a).text("⬅︎ 左矢印キー: 前の配色", windowWidth / 2, windowHeight - 130);
    fill(textColor, 255 - pcMsg.a).text("➡︎ 右矢印キー: 次の配色", windowWidth / 2, windowHeight - 100);

    if (messageFlg) {
      if (spreadFlg == false) {
        spreadCircle();
        setTimeout(fadeInMessage, 3000);
      }
      // console.log(pass);
      if (pass == "yui") {
        fill(mapObjectToColor(colorList[palletNum][current])).ellipse(centerX, centerY, backgroundCircle.r);
      } else if (pass == "jas") {
        fill(mapObjectToColor(colorList[palletNum][current + 1])).ellipse(circle.x, circle.y, backgroundCircle.r);
      }
      push();
      textAlign(LEFT);
      rectMode(CORNER);
      textFont(myFont);

      // textSize(windowWidth / (textCount * 1.8));
      // textLeading(windowWidth / (textCount * 1.8));
      // textSize(textCount / 2);
      // textLeading(textCount / 1.5);
      let textCount = 46;

      if (pass == "yui") {
        let baseColor = mapObjectToColor(colorList[palletNum][current]);
        let textColorY = baseColor.levels[0] * 0.299 +
          baseColor.levels[1] * 0.587 +
          baseColor.levels[2] * 0.114 <
          135 ?
          255 :
          60;
        textSize(textCount / 2);
        textLeading(textCount);
        let s = sliceText(yMessage, textCount);
        fill(textColorY, 255 - messageAlpha.a).text(s, windowWidth / 2 - 530, 200);
        textAlign(RIGHT);
        fill(textColorY, 255 - messageAlpha.a).text("2019年10月14日         こなつ", windowWidth / 2 + 400, 716);
      } else if (pass == "jas") {
        let baseColor = mapObjectToColor(colorList[palletNum][current]);
        let textColorJ = baseColor.levels[0] * 0.299 +
          baseColor.levels[1] * 0.587 +
          baseColor.levels[2] * 0.114 <
          135 ?
          255 :
          60;
        textSize(textCount / 2);
        textLeading(textCount);
        let s = sliceText(jMessage, textCount);
        fill(textColorJ, 255 - messageAlpha.a).text(s, windowWidth / 2 - 400, 200);
        textAlign(RIGHT);
        fill(textColorJ, 255 - messageAlpha.a).text("2019年10月14日         こなつ", windowWidth / 2 + 400, 716);

      }


      pop();

    }

  }

  // fill(textColor).text(msg, windowWidth / 2, windowHeight - 150);

  // if (pDeviceOrientation !== undefined) {
  //   fill(textColor).text(pDeviceOrientation, windowWidth / 2, windowHeight - 150);
  // }
  // fill(textColor).text(device, windowWidth / 2, windowHeight - 150);


}

// function windowResized() {
//   sizeText = windowWidth + " : " + windowHeight;
//   resizeCanvas(windowWidth, windowHeight);
// }

window.onresize = function () {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w, h);
  sizeText = w + " : " + h;
  updateButton.x = w - iconWidth / 1.5;
  updateButton.y = h - iconWidth / 1.5;
  width = w;
  height = h;
};

function swiped(event) {
  if (event.direction == 4) {
    msg = "swiped right";
    next();
  } else if (event.direction == 8) {
    msg = "swiped up";
  } else if (event.direction == 16) {
    msg = "swiped down";
  } else if (event.direction == 2) {
    msg = "swiped left";
    prev();
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    prev();
  } else if (keyCode === RIGHT_ARROW) {
    next();
  } else if (keyCode === ENTER) {
    sortByRandom();
  }
}

function mousePressed() {
  if ((mouseX - updateButton.x) * (mouseX - updateButton.x) + (mouseY - updateButton.y) * (mouseY - updateButton.y) <= updateButton.w * updateButton.w / 4) {
    sortByRandom();
  }
}

function touchStarted() {
  if (touches.length <= 0) {
    return;
  }

  if ((touches[0].x - updateButton.x) * (touches[0].x - updateButton.x) + (touches[0].y - updateButton.y) * (touches[0].y - updateButton.y) <= updateButton.w * updateButton.w / 4) {
    sortByRandom();
  }

}

function keyTyped() {
  switch (key) {
    case "a":
      if (pass == "j") {
        pass += "a";
      } else {
        pass = "";
      }
      break;
    case "i":
      if (pass == "yu") {
        pass += "i";
        messageFlg = true;
      } else {
        pass = "";
      }
      break;
    case "j":
      if (pass == "") {
        pass += "j";
      } else {
        pass = "";
      }
      break;
    case "s":
      if (pass == "ja") {
        pass += "s";
        messageFlg = true;
      } else {
        pass = "";
      }
      break;
    case "u":
      if (pass == "y") {
        pass += "u";
      } else {
        pass = "";
      }
      break;
    case "y":
      if (pass == "") {
        pass += "y";
      } else {
        pass = "";
      }
      break;
  }
  if (pass == "") {
    messageFlg = false;
  }

}


const sortByRandom = () => {
  for (var i = colorList[palletNum].length - 1; i > 0; i--) {
    var r = Math.floor(Math.random() * (i + 1));
    var tmp = colorList[palletNum][i];
    colorList[palletNum][i] = colorList[palletNum][r];
    colorList[palletNum][r] = tmp;
  }
}

const prev = () => {
  if (palletNum <= 0) {
    palletNum = MAX_COLOR_COUNT - 1;
  } else {
    palletNum--;
  }
};

const next = () => {
  if (palletNum >= MAX_COLOR_COUNT - 1) {
    palletNum = 0;
  } else {
    palletNum++;
  }
};

const circle1Motion1 = () => {
  TweenMax.to(circle, 1, {
    y: bottom1,
    ease: Circ.easeInOut,
    onComplete: circle1Motion2
  });
};

const circle1Motion2 = () => {
  TweenMax.to(circle, 1, {
    y: top1,
    ease: Circ.easeInOut,
    onComplete: circle1Motion1
  });
};

const circle2Motion1 = () => {
  TweenMax.to(circle2, 1, {
    y: top1,
    ease: Circ.easeInOut,
    onComplete: circle2Motion2
  });
};

const circle2Motion2 = () => {
  TweenMax.to(circle2, 1, {
    y: bottom1,
    ease: Circ.easeInOut,
    onComplete: circle2Motion1
  });
};

const fadeInInitMessage = () => {
  TweenMax.to(swipeMsg, 0.5, {
    a: 0,
    ease: Power2.easeIn,
    onComplete: fadeOutInitMessage
  });
};

const fadeOutInitMessage = () => {
  TweenMax.to(swipeMsg, 3, {
    a: 255,
    ease: Expo.easeIn,
    onComplete: () => {}
  });
};

const fadeInPC = () => {
  TweenMax.to(pcMsg, 0.5, {
    a: 0,
    ease: Power2.easeIn,
    onComplete: fadeOutPC
  });
};

const fadeOutPC = () => {
  TweenMax.to(pcMsg, 10, {
    a: 255,
    ease: Expo.easeIn,
    onComplete: () => {}
  });
};

const spreadCircle = () => {
  TweenMax.to(backgroundCircle, 5, {
    r: windowWidth * 3,
    ease: Power2.easeOut,
    onComplete: () => {
      spreadFlg = true;
    }
  });
};

const fadeInMessage = () => {
  TweenMax.to(messageAlpha, 5, {
    a: 0,
    ease: Power2.easeOut,
    onComplete: () => {}
  });
};

function drawShape() {
  //  calculate node  starting locations
  for (let i = 0; i < nodes; i++) {
    nodeStartX[i] = centerX + cos(radians(rotAngle)) * radius;
    nodeStartY[i] = centerY + sin(radians(rotAngle)) * radius * 1.9;
    rotAngle += 360.0 / nodes;
  }


  node2StartX[0] = centerX - radius;
  node2StartX[1] = centerX - radius * 0.5;
  node2StartX[2] = centerX;
  node2StartX[3] = centerX + radius * 0.5;
  node2StartX[4] = centerX + radius;
  node2StartX[5] = centerX + radius;
  node2StartX[6] = centerX;
  node2StartX[7] = centerX - radius;
  node2StartX[8] = centerX - radius;
  node2StartX[9] = centerX - radius * 0.5;
  node2StartX[10] = centerX;


  node2StartY[0] = centerY + radius * 2;
  node2StartY[1] = centerY + radius * 2.2;
  node2StartY[2] = centerY + radius * 2.2;
  node2StartY[3] = centerY + radius * 2.2;
  node2StartY[4] = centerY + radius * 2;
  node2StartY[5] = centerY - radius * 0;
  node2StartY[6] = centerY - radius * 0.2;
  node2StartY[7] = centerY - radius * 0;
  node2StartY[8] = centerY + radius * 2;
  node2StartY[9] = centerY + radius * 2.2;
  node2StartY[10] = centerY + radius * 2.2;

  // draw polygon
  curveTightness(organicConstant);
  fill(mapObjectToColor(colorList[palletNum][current]));
  // 上半身
  beginShape();
  for (let i = 0; i < nodes; i++) {
    curveVertex(nodeX[i], nodeY[i]);
  }
  for (let i = 0; i < nodes - 1; i++) {
    curveVertex(nodeX[i], nodeY[i]);
  }

  endShape(CLOSE);

  // 下半身
  beginShape();
  const len = node2StartX.length;
  for (let i = 0; i < len; i++) {
    curveVertex(node2X[i], node2Y[i]);
  }
  for (let i = 0; i < len - 1; i++) {
    curveVertex(node2X[i], node2Y[i]);
  }
  endShape(CLOSE);
  fill(255).ellipse(centerX - radius / 3, centerY - radius / 2, radius / 3);
  fill(0).ellipse(centerX - radius / 3 + 2 + clamp((mouseX - centerX) / 100, -5, 3), centerY - radius / 2 + clamp((mouseY - centerY) / 100, -4, 4), radius / 6);


  fill(255).ellipse(centerX + radius / 3, centerY - radius / 2, radius / 3);
  fill(0).ellipse(centerX + radius / 3 - 2 + clamp((mouseX - centerX) / 100, -3, 5), centerY - radius / 2 + clamp((mouseY - centerY) / 100, -4, 4), radius / 6);

  fill(255).triangle(centerX, centerY, centerX - radius / 4, centerY + radius / 4, centerX + radius / 4, centerY + radius / 4);

}

function moveShape() {
  //move center point
  deltaX = mouseX - centerX;
  deltaY = mouseY - centerY;

  // create springing effect
  deltaX *= springing;
  deltaY *= springing;
  accelX += deltaX;
  accelY += deltaY;

  // move predator's center
  centerX += accelX;
  centerY += accelY;

  // slow down springing
  accelX *= damping;
  accelY *= damping;

  // change curve tightness
  organicConstant = 1 - ((abs(accelX) + abs(accelY)) * 0.1);

  //move nodes
  for (let i = 0; i < nodes; i++) {
    nodeX[i] = nodeStartX[i] + sin(radians(angle[i])) * (accelX * boundPower);
    nodeY[i] = nodeStartY[i] + sin(radians(angle[i])) * (accelY * boundPower);

    node2X[i] = node2StartX[i] + sin(radians(angle[i])) * (accelX * boundPower);
    node2Y[i] = node2StartY[i] + sin(radians(angle[i])) * (accelY * boundPower);

    angle[i] += frequency[i];
  }
}

function clamp(x, min, max) {
  if (x < min)
    return min;
  else if (x > max)
    return max;
  return x;
}

const sliceText = (txt, wCount) => {
  var str1, str2, sliceStr;
  var addBreakStr = "";
  sliceStr = txt;
  for (var i = 0; i < txt.length / wCount; i++) {
    str1 = sliceStr.slice(0, wCount);
    str2 = sliceStr.slice(wCount);
    addBreakStr += str1 + '\n';
    sliceStr = str2;
  }
  return addBreakStr;
}