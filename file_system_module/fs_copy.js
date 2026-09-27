const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "notes.txt");
const dest = path.join(__dirname, "notes_copy.txt");

fs.copyFile(src, dest, (err) => {
    if (err) {
        console.error("Copy failed:", err);
        return;
    }
    console.log("File copied successfully to:", dest);
    fs.unlinkSync(dest); // cleanup
});
