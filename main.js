var hammer = require ('hammerjs')
  , inherits = require('inherits')
  , events = require('events')
  , gameLoop = require('./gameloop')
  , createEventedObject = require('./makeevented');

var canvas = document.getElementById('canvas')
  , img = new Image()   // Create new img element
  , ctx = canvas.getContext('2d')
  , i = 0
  , star = new Starship(0, 100)
  , currentTime = 0
  , delta = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
img.src = '/img/ship_orange.svg'; // Set source path

hammer(canvas).on("swipe", function(event) {
  emitter.emit('swipe', event);
});

var emitter = new events.EventEmitter();

emitter.on('swipe', function(event) {
  console.log(event.gesture.center.pageX, event.gesture.center.pageY);
  star.state = 100;
});

// Starship constructor function
function Starship(x, y) {
  this.x = x;
  this.y = y;
  this.state = 0;
}

// Add draw to canvas to Starship prototype
Starship.prototype.draw = function() {
  return ctx.drawImage(img, this.x, this.y, 70, 80);
};

Starship.prototype.update = function() {
  if(this.state){
    this.x = (this.x + 1) % (canvas.width + 70);
    this.state--;
  }
};

// Add an EventEmitter to Starship
createEventedObject(Starship);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  star.update();
  star.draw();
}

document.addEventListener('DOMContentLoaded', function(){
  if (typeof (canvas.getContext) !== undefined) {
    gameLoop(draw);
  }
});

