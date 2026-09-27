const EventEmitter = require("events");

const emitter = new EventEmitter();

// Handle error events to prevent unhandled exception crash
emitter.on("error", (err) => {
    console.error("Caught EventEmitter error safely:", err.message);
});

// Emit an error event
emitter.emit("error", new Error("Database connection timed out"));
