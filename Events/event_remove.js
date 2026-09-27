const EventEmitter = require("events");

const emitter = new EventEmitter();

function logData(data) {
    console.log("Data received:", data);
}

emitter.on("dataStream", logData);

emitter.emit("dataStream", "First message");

// Remove listener
emitter.removeListener("dataStream", logData);

emitter.emit("dataStream", "Second message (ignored)");
