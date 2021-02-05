var canvas, backgroundImage;

var car1 , car2 , car3 , car4 , cars;

var allPlayers;

var gameState = 0;
var playerCount = 0;

var database;

var form, player, game;


function setup(){
  canvas = createCanvas(displayWidth-50,displayHeight-100);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if (playerCount === 4){
    console.log(playerCount)
    game.update(1);
  }
  if (gameState === 1){
    clear();
    game.play();
  }
  
}
