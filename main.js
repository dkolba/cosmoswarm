var hammerjs = require ('hammerjs')
  , canvas = document.getElementById('canvas')
  , ctx = canvas.getContext('2d')
  , img = new Image()   // Create new img element
  , i = 0;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

img.src = '/img/ship_orange.svg'; // Set source path

function draw() {
  i = (i + 1) % (canvas.width + 100);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, i-100, Math.sin(i*0.5), 100, 100);
  window.requestAnimationFrame(draw);
}

document.addEventListener('DOMContentLoaded', function(){
  draw();
});
