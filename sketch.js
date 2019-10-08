//Declare categories
let assigneds = [];  
let gratitudes = []; 
let completeds = [];
let tomorrows = []; 

//Content
let assigned = "ASSIGNED TASKS \n \nConsolidate and share showcase notes, upload showcase photos to the team drive"; //Declare content
let gratitude = "GRATITUDE \n \nDraft 1 of a more fun take on my Daily Journal is done! Looking forward to a more fun version!";
let completed = "COMPLETED TASKS \nCompleted the assigned tasks (orange balls!), revamped my daily journal  ";
let tomorrow ="TOMORROW'S TASKS \n "; 

//Global variables
let numBall = 85; 
let basketHeight = 50;
let nDist = 230;

function setup() {
  let canvas = createCanvas(800, 500);
  
  canvas.parent('sketch-holder');
  
  rectMode(CENTER);
  
  //Category arrays
  for (let i = 0; i < numBall; i++) {
    assigneds[i] = new Circle(random(0, width), random(-height * nDist, height), random(20, 50), color('#F29924'), assigned);
  }
  
  for (let i = 0; i < numBall; i++) {
    gratitudes[i] = new Circle(random(0, width), random(-height * nDist, height), random(20, 50), color(189,23,0), gratitude);
  }
  
    for (let i = 0; i < numBall; i++) {
    completeds[i] = new Circle(random(0, width), random(-height * nDist, height), random(20, 50), color('#003444'), completed);
  }
  
    for (let i = 0; i < numBall; i++) {
    tomorrows[i] = new Circle(random(0, width), random(-height * nDist, height), random(20, 50), color('#ED6B86'), tomorrow);
  }
  
}

function draw() {
  background('#E5E1DA');
  
  //Display the arrays
  for (let i = 0; i < numBall; i++) {
    let j = i%numBall; 
    
    assigneds[j].intersection();
    assigneds[j].display();
    assigneds[j].move();
    
    gratitudes[i].intersection();
    gratitudes[i].display();
    gratitudes[i].move();
    
    completeds[i].intersection();
    completeds[i].display();
    completeds[i].move();
    
     tomorrows[i].intersection();
    tomorrows[i].display();
    tomorrows[i].move();
  }

  //Basket
  push();
  noStroke();
  fill('#0060B5');
  rect(mouseX, height - (basketHeight / 2), basketHeight * 4.5, basketHeight);
  push();
  fill('#ffffff');
  text('Catch a ball to read about my day', mouseX-(basketHeight*1.9), height - (basketHeight / 2.2))
  pop();
  pop();

}

//The balls
class Circle {
  constructor(x, y, r, c, content) {
    this.x = x;
    this.y = y;
    this.d = r;
    this.col = c; 
    this.con = content;
    this.speed = random(0, .5);
  }
  
  move() {
    this.y += random(1, 4);
  }

  display() {
    push();
    noStroke();
    fill(this.col);
    ellipse(this.x, this.y, this.d);
    pop();
  }

  intersection() {
    if (
      this.y > height - basketHeight &&
      this.y < height * 1.7 &&
      this.x > mouseX - basketHeight &&
      this.x < mouseX + basketHeight) {
     
      push();
      fill(this.col);
      noStroke();
      rect(width / 2, height / 2 - basketHeight, basketHeight*4.5, basketHeight*4.5);
      pop();
      
      push();
      fill(255);
      textSize(16);
      text(this.con, width / 2, height / 2 - (basketHeight), basketHeight*3, basketHeight*3);
      pop();
      
      fill(255, 0, 0);
    } else {
      fill(255, 255, 255);
    }
  }



}
