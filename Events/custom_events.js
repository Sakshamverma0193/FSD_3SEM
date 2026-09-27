const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

// Register event listener
eventEmitter.on("userLogin", (username) => {
    console.log(`User logged in: ${username}`);
});

// Emit event
eventEmitter.emit("userLogin", "Saksham");
