var img;
var imgClone;

var mk;

let colorList = [{
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
];

const mapObjectToColor = obj => {
  return color(obj.r, obj.g, obj.b);
}

function setup() {
  createCanvas(600, 400);

  img = createGraphics(width, height);
  img.noStroke();
  // img.background(0);
  // img.fill(255).ellipse(100, 100, 100, 100);

  mk = createGraphics(width, height);

  // mk.ellipse(100, 150, 200, 200);

  // (imgClone = img.get()).mask(mk.get());
}

let count = 0;
let a = 1;
let current = 0;

function draw() {
  background(mapObjectToColor(colorList[current + 2]));
  noStroke();
  img.background(mapObjectToColor(colorList[current + 1]));
  img.fill(mapObjectToColor(colorList[current])).ellipse(100, Math.abs(200 - count), 120, 120);

  mk.ellipse(100, count, 200, 200);

  fill(mapObjectToColor(colorList[current + 3])).ellipse(100, Math.abs(200 - count), 120, 120);
  // fill(mapObjectToColor(colorList[current])).ellipse(100, count, 200, 200);

  if (count > 200) {
    a = -1;
  } else if (count < 0) {
    a = 1;
  }
  count += a;

  (imgClone = img.get()).mask(mk.get());
  image(imgClone, 0, 0);

  img.clear();
  mk.clear();
  textSize(24);
  fill(255).text('Enterを押すと色が変わります', 200, 380);


}

function keyPressed() {
  if (keyCode === ENTER) {
    for (var i = colorList.length - 1; i > 0; i--) {
      var r = Math.floor(Math.random() * (i + 1));
      var tmp = colorList[i];
      colorList[i] = colorList[r];
      colorList[r] = tmp;
    }
  }
}