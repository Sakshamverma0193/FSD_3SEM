const EventEmitter = require("events");

const emitter = new EventEmitter();

function handler1() {}
function handler2() {}

emitter.on("ping", handler1);
emitter.on("ping", handler2);

console.log("Listener count for 'ping':", emitter.listenerCount("ping"));
console.log("Raw listeners for 'ping':", emitter.rawListeners("ping").length);
