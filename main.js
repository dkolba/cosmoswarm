var hammer = require ('hammerjs')
  , canvas = document.getElementById('canvas')
  , ctx = canvas.getContext('2d')
  , img = new Image()   // Create new img element
  , i = 0
  , starship = function() {};

starship.prototype.draw = function() {
  return ctx.drawImage(img, i-100, Math.sin(i*0.5), 100, 100);
};


var hammertime = hammer(canvas).on("tap", function(event) {
  alert(console.log(event));
});

star = new starship();

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

img.src = '/img/ship_orange.svg'; // Set source path

function draw() {
  i = (i + 1) % (canvas.width + 100);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  star.draw();
  window.requestAnimationFrame(draw);
}

document.addEventListener('DOMContentLoaded', function(){
  draw();
});

