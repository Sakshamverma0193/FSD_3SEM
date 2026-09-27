const fs = require("fs");
const path = require("path");

const ac = new AbortController();
const { signal } = ac;

const targetFile = path.join(__dirname, "notes.txt");

try {
    const watcher = fs.watch(targetFile, { signal }, (eventType, filename) => {
        console.log(`Event [${eventType}] on ${filename}`);
    });

    console.log("Watcher active with AbortSignal.");

    // Abort after 200ms
    setTimeout(() => {
        ac.abort();
        console.log("Watcher aborted cleanly via AbortController signal.");
    }, 200);
} catch (err) {
    if (err.name === "AbortError") {
        console.log("Watch operation aborted.");
    }
}
