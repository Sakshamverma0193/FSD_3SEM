const EventEmitter = require("events");

const emitter = new EventEmitter();

// Event with multiple parameters
emitter.on("orderPlaced", (orderId, customerName, amount) => {
    console.log(`Order #${orderId} for ${customerName} placed for $${amount}`);
});

emitter.emit("orderPlaced", 101, "Saksham", 450);
