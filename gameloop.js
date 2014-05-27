// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function( callback ){
      window.setTimeout(callback, 1000 / 60);
    };
})();


var lastTime = (new Date()).getTime()
  , currentTime = 0
  , fps = 30
  , interval = 1000/fps;

module.exports = function gameLoop(cb) {
  window.requestAnimFrame(function() {gameLoop(cb);});
  currentTime = (new Date()).getTime();
  delta = (currentTime-lastTime);

  if(delta > interval) {
    lastTime = currentTime - (delta % interval);
    cb();
  }
};

