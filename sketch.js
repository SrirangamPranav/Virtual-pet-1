//Create variables here
var database;
var dog,dogImage,dogImage1,food,foodImage,foodStock,foodRef;

function preload()
{
  dogimage = loadImage("dogimg.png");
  dogimage2 = loadImage("dogimg1.png");
}

function setup() {
  createCanvas(500, 500);
  dog = createSprite(400,150);
  dog.addImage(dogimage);
  dog.scale = 0.4;
  database = firebase.database();
  food = database.ref('Food');
  food.on("value",readStock);
}


function draw() {  
  background(46, 139, 87);
  drawSprites();
  fill("red")
  textSize(40)
  text("food Left:"+foodStock,90,300)
  keyPressed();
  if(foodStock ===0){
    foodStock = 10;
  }
}

function readStock(data){
  foodStock = data.val();
}

function keyPressed(){
  if(keyWentDown(UP_ARROW)){
    food = database.ref("Food");
    foodStock = foodStock - 1;
    food.set(foodStock);
    dog.addImage(dogimage2);
  }
  else{
    dog.addImage(dogimage)
  }
} 