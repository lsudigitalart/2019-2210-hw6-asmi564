var cat_img, chain_img;
let lip_gif;

function preload() { 
  cat_img = loadImage("catface.jpg");
  chain_img = loadImage("chain.png");
  lip_gif = createImg("lipgif.gif");
  crown_img = loadImage("crown.png");
}


function setup() {
  createCanvas(800,600);
  // background(0,0,0);
  image(cat_img, 0, 0, 800, 600);
  image(chain_img, 316, 360, 160, 180);
  image(crown_img, 319,40,160,180);

  lip_gif.position(245, 219);
  lip_gif.size(320, AUTO);

}


function draw() {
}
