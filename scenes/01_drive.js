// /****
//   SCENE 1: driving through gayborhood
// ****/

// const canvas_height = 600;
// const canvas_width = 500;

// let car, car_img, sweetwater, brit, falcon;
// let scene01, scene02, scene03;

// function preload() {
//   car_img = loadImage('img/car.png');
//   sweetwater = loadImage('img/sweetwater-placeholder.jpg');
//   brit = loadImage('img/the-brit.jpg');
//   falcon = loadImage('img/falcon.jpg');
// }

// function setup() {
//   createCanvas(canvas_width, canvas_height);

//   // edit background imgs
//   sweetwater.resize(0, canvas_width);
//   brit.resize(0, canvas_width);
//   falcon.resize(0, canvas_width);
//   sweetwater.filter(ERODE);

//   // resize car png
//   car_img.resize(0, 50);
//   // create sprite with image of car
//   car = createSprite(50, height/2); // set initial position
//   car.addImage(car_img);
//   car.friction = 0.04;

//   scene01 = new Scene(brit);
//   scene02 = new Scene(falcon);
//   scene03 = new Scene(sweetwater);
// }

// function draw() {
//   scene01.start();
//   textSize(32);
//   textAlign(LEFT, TOP);
//   fill(255);
//   text("click to move car",
//     width/3, height*0.1);

//   // if car reaches bounds of canvas, start new scene 
//   if (car.position.x > width) {
//     scene03.start();
//     car.position.x = 0;
//   }
  
//   drawSprites();

// }

// function mousePressed() {

//   if (car.position.x < width) {
//     // move car to mouseX position
//     car.attractionPoint(5, mouseX, height/2);
//   }
//   else {
//     car.position.x = 0;
//   }
// }
