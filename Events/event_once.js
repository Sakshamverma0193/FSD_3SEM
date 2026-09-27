const EventEmitter = require("events");

const emitter = new EventEmitter();

// .once() runs only the first time the event is emitted
emitter.once("initApp", () => {
    console.log("Application initialized successfully (only triggers once)");
});

emitter.emit("initApp");
emitter.emit("initApp"); // Will be ignored
