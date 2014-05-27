var hammer = require ('hammerjs')
  , canvas = document.getElementById('canvas')
  , ctx = canvas.getContext('2d')
  , img = new Image()   // Create new img element
  , i = 0
  , star = new Starship(0, 100)
  , EventEmitter = require('events').EventEmitter
  , gameLoop = require('./gameloop')
  , currentTime = 0
  , delta = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
img.src = '/img/ship_orange.svg'; // Set source path

var hammertime = hammer(canvas).on("tap", function(event) {
  // console.log(event);
  emitter.emit('tap', event);
});

var emitter = new EventEmitter();

emitter.on('tap', function(event) {
  console.log(event.gesture.center.pageX, event.gesture.center.pageY);
});

function Starship(x, y) {
  this.x = x;
  this.y = y;
  this.draw = function() {
    return ctx.drawImage(img, this.x-100, Math.sin(this.x*0.5)+this.y, 70,80);
  };
}

function draw() {
  star.x = (star.x + 1) % (canvas.width + 100);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  star.draw();
}

document.addEventListener('DOMContentLoaded', function(){
  if (typeof (canvas.getContext) !== undefined) {
    gameLoop(draw);
  }
});
