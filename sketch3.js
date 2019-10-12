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
let circle = {
  x: 150,
  y: 100,
  r: 200
}

let circle2 = {
  x: 150,
  y: 300,
  r: 120
};


const mapObjectToColor = obj => {
  return color(obj.r, obj.g, obj.b);
}

function setup() {
  createCanvas(650, 450);

  img = createGraphics(width, height);
  img.noStroke();
  // img.background(0);
  // img.fill(255).ellipse(100, 100, 100, 100);

  mk = createGraphics(width, height);
  circle1Motion1();
  circle2Motion1();

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
  img.fill(mapObjectToColor(colorList[current])).ellipse(circle2.x, circle2.y, circle2.r);

  mk.ellipse(circle.x, circle.y, circle.r);

  fill(mapObjectToColor(colorList[current + 3])).ellipse(circle2.x, circle2.y, circle2.r);

  (imgClone = img.get()).mask(mk.get());
  image(imgClone, 0, 0);

  img.clear();
  mk.clear();
  textSize(24);
  fill(255).text('Enterを押すと色が変わります', 280, 420);


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

const circle1Motion1 = () => {
  TweenMax.to(circle, 1, {
    y: 300,
    ease: Circ.easeInOut,
    onComplete: circle1Motion2
  });
}

const circle1Motion2 = () => {
  TweenMax.to(circle, 1, {
    y: 100,
    ease: Circ.easeInOut,
    onComplete: circle1Motion1
  });
}

const circle2Motion1 = () => {
  TweenMax.to(circle2, 1, {
    y: 100,
    ease: Circ.easeInOut,
    onComplete: circle2Motion2
  });
}

const circle2Motion2 = () => {
  TweenMax.to(circle2, 1, {
    y: 300,
    ease: Circ.easeInOut,
    onComplete: circle2Motion1
  });
}