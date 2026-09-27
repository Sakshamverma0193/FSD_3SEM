const fs = require("fs");
const path = require("path");

const target = path.join(__dirname, "notes.txt");

// Check current mode and set read-only / read-write permissions
fs.stat(target, (err, stats) => {
    if (err) {
        console.error("Stat error:", err);
        return;
    }
    console.log("Current file mode:", stats.mode.toString(8));
});
