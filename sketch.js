var dog,sadDog,happyDog;
var feed ;
var addfood ; 
var foodS =0 ;
var foodz;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");

}

function setup() {
  createCanvas(1000,400);

  database = firebase.database();

  feed=createButton("Feed The dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  
  addFood=createButton("Add Food");
  milk=new Food();
  addFood.position(800,95);
  addFood.mousePressed(addFoods());
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

}

function draw() {
  background(46,139,87);
  drawSprites();

  if (keyDownCode=32){
    
  }
}


function addFoods(){
foodS++;
database.ref('/').update({
  Food:foodS
})

milk.display();

}

function feedDog(){
  dog.addImage(happyDog);

  foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  database.ref('/').update({
    Food:foodObj.getFoodtock(),
  })
}

