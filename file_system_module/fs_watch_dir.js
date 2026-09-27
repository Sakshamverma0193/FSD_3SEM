const fs = require("fs");
const path = require("path");

const dirPath = __dirname;

const watcher = fs.watch(dirPath, (eventType, filename) => {
    console.log(`Directory change detected [${eventType}]:`, filename);
});

console.log("Watching directory:", dirPath);

setTimeout(() => {
    watcher.close();
    console.log("Directory watcher closed.");
}, 500);
