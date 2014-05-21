var lastTime = (new Date()).getTime()
  , currentTime = 0
  , fps = 30
  , interval = 1000/fps;

module.exports = function gameLoop(cb) {
  window.requestAnimationFrame(function() {gameLoop(cb);});
  currentTime = (new Date()).getTime();
  delta = (currentTime-lastTime);

  if(delta > interval) {
    lastTime = currentTime - (delta % interval);
    cb();
  }
};

