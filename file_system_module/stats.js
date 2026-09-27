const fs = require("fs");
const path = require("path");

const targetFile = path.join(__dirname, "notes.txt");

fs.stat(targetFile, (err, stats) => {
    if (err) {
        console.error("Error reading file stats:", err.message);
        return;
    }

    console.log("Information about [notes.txt]:");
    console.log("- Is File:", stats.isFile());
    console.log("- Is Directory:", stats.isDirectory());
    console.log("- Size:", stats.size, "Bytes");
    console.log("- Created At:", stats.birthtime.toISOString().split("T")[0]);
    console.log("- Last Modified:", stats.mtime.toISOString().split("T")[0]);
});