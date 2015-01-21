var Phaser = require('phaser');

window.onload = function() {
  var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create,
    update: update});
   var ship, cursors;

  function preload () {
    game.load.image('ship', '../img/ship_orange.svg');
    game.load.image('explosion', '../img/explosion.svg');
    game.load.image('heart', '../img/heart.svg');
    game.load.image('monster', '../img/monster.svg');
  }

  function create () {
    cursors = game.input.keyboard.createCursorKeys();
    ship = game.add.sprite(game.world.centerX, game.world.height-20, 'ship');
    ship.anchor.setTo(0.5, 1);
    game.physics.enable(ship, Phaser.Physics.ARCADE);
  }

  function update () {
    ship.body.velocity.x=0;

    if (cursors.left.isDown) {
      ship.body.velocity.x = -300;
    }
    else if (cursors.right.isDown) {
      ship.body.velocity.x = 300;
    }
  }
};
