var img;
var imgClone;

var mk;
let top1 = 120;
let bottom1 = 270;

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
let circle = {
  x: 150,
  y: top1,
  r: 200
};

let circle2 = {
  x: 150,
  y: bottom1,
  r: 150
};
let palletNum = 0;
let MAX_COLOR_COUNT;
let pDeviceOrientation;

const mapObjectToColor = obj => {
  return color(obj.r, obj.g, obj.b);
};

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

  createCanvas(windowWidth, windowHeight);
  // createCanvas(670, 520);
  MAX_COLOR_COUNT = colorList.length;

  img = createGraphics(width, height);
  img.noStroke();

  mk = createGraphics(width, height);
  circle1Motion1();
  circle2Motion1();

  pDeviceOrientation = deviceOrientation;
}

let count = 0;
let a = 1;
let current = 0;

function draw() {
  if (pDeviceOrientation !== undefined && pDeviceOrientation !== deviceOrientation) {
    noCanvas();
    createCanvas(windowWidth, windowHeight);
    next();
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
  noStroke();
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
  textSize(24);
  fill(textColor).text("Enterキー: 色の組み合わせを変更", 250, 420);
  fill(textColor).text("⬅︎ 左矢印キー: 前の配色", 250, 450);
  fill(textColor).text("➡︎ 右矢印キー: 次の配色", 250, 480);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    prev();
  } else if (keyCode === RIGHT_ARROW) {
    next();
  }
  if (keyCode === ENTER) {
    for (var i = colorList[palletNum].length - 1; i > 0; i--) {
      var r = Math.floor(Math.random() * (i + 1));
      var tmp = colorList[palletNum][i];
      colorList[palletNum][i] = colorList[palletNum][r];
      colorList[palletNum][r] = tmp;
    }
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