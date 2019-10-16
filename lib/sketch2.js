var pg, pgmask;
var ctr; //Values from 0 to 200


function setup() {
  createCanvas(780, 440);
  noStroke();
  ctr = 0;


  pg = createGraphics(200, 200);
  //pg.background(255);
  pg.fill(255, 25, 25);
  pg.rectMode(CENTER);
  pg.rect(100, 100, 100, 100);

  pgmask = createGraphics(200, 200);
  pgmask.fill(25, 255, 25);
  pgmask.ellipse(100, 100, 100, 100);

  //noLoop();
}

function draw() {
  background(0);
  image(pg, 0, 0);

  background(0);
  image(pgmask, 0, 0);
  // image(pgmask, 200, 200);

  blend(pg, 0, 0, 200, 200, 0, 0, 200, 200, DIFFERENCE);
  // blend(x, 0, 0, 200, 200, 100 + ctr, 200, 200, 200, DIFFERENCE);
  // ctr++;

  // if (ctr == 200) ctr = 0;
}