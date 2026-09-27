const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "notes.txt");
const readStream = fs.createReadStream(filePath, { encoding: "utf8", highWaterMark: 16 });

let totalChunks = 0;

readStream.on("data", (chunk) => {
    totalChunks++;
    console.log(`Received chunk #${totalChunks}:`, chunk);
});

readStream.on("end", () => {
    console.log("Read stream finished. Total chunks:", totalChunks);
});
