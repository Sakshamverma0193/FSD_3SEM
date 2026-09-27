const fs = require("fs");
const path = require("path");

console.log("--- Event Loop Execution Demo ---");

// Top-level timer vs immediate
setTimeout(() => {
    console.log("Top-level setTimeout (0ms)");
}, 0);

setImmediate(() => {
    console.log("Top-level setImmediate");
});

// Inside an I/O callback, setImmediate always runs before setTimeout
const filePath = path.join(__dirname, "intro.txt");
fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
        return;
    }
    console.log("1. I/O Callback: File read completed ->", data.trim());

    setTimeout(() => {
        console.log("3. Nested setTimeout (Timers phase)");
    }, 0);

    setImmediate(() => {
        console.log("2. Nested setImmediate (Check phase - executes before setTimeout inside I/O)");
    });
});
