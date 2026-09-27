const { EventEmitter, once } = require("events");

const emitter = new EventEmitter();

async function waitForEvent() {
    console.log("Waiting for 'ready' event asynchronously...");

    setTimeout(() => {
        emitter.emit("ready", { status: "Server Ready", port: 5000 });
    }, 100);

    const [payload] = await once(emitter, "ready");
    console.log("Promise resolved with event data:", payload);
}

waitForEvent();
