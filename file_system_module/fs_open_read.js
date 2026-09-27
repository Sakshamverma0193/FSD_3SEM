const fs = require("fs");
const path = require("path");

const target = path.join(__dirname, "notes.txt");

fs.open(target, "r", (err, fd) => {
    if (err) {
        console.error("Open error:", err);
        return;
    }

    const buffer = Buffer.alloc(10);
    fs.read(fd, buffer, 0, buffer.length, 0, (err, bytesRead) => {
        if (err) {
            console.error("Read error:", err);
            return;
        }
        console.log(`Read ${bytesRead} bytes:`, buffer.toString("utf8", 0, bytesRead));
        fs.close(fd, () => console.log("File descriptor closed."));
    });
});
