var hammer = require ('hammerjs')
  , canvas = document.getElementById('canvas')
  , ctx = canvas.getContext('2d')
  , img = new Image()   // Create new img element
  , i = 0
  , starship = function() {}
  , star = new starship()
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

starship.prototype.draw = function() {
  return ctx.drawImage(img, i-100, Math.sin(i*0.5), 100, 100);
};

function draw() {
  i = (i + 1) % (canvas.width + 100);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  star.draw();
}

document.addEventListener('DOMContentLoaded', function(){
  if (typeof (canvas.getContext) !== undefined) {
    gameLoop(draw);
  }
});
