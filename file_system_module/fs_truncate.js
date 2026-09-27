const fs = require("fs");
const path = require("path");

const target = path.join(__dirname, "temp_truncate.txt");
fs.writeFileSync(target, "1234567890abcdefghij");

// Truncate to 10 bytes
fs.truncate(target, 10, (err) => {
    if (err) {
        console.error("Truncate error:", err);
        return;
    }
    const truncated = fs.readFileSync(target, "utf8");
    console.log("Truncated content (10 bytes):", truncated);
    fs.unlinkSync(target); // cleanup
});
