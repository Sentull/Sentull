var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('Selamat tahun baru!');
}

//Assign the event handler to an event:
eventEmitter.on('baru', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('baru');