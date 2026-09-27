const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("greet", () => {
    console.log("Normal listener (added first, runs second)");
});

emitter.prependListener("greet", () => {
    console.log("Prepended listener (added later, runs first)");
});

emitter.emit("greet");
