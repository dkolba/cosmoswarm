var inherits = require("inherits")
  , EventEmitter = require('events').EventEmitter;

function createEventedObject(obj) {
  EventEmitter.call(obj);

  inherits(obj, EventEmitter);
  // return obj;
}

module.exports = createEventedObject;
