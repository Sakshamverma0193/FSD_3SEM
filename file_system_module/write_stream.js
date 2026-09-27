const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "stream_output.txt");
const writeStream = fs.createWriteStream(outputPath);

writeStream.write("Line 1: Writing through fs write stream.\n");
writeStream.write("Line 2: High performance buffered I/O.\n");
writeStream.end("Line 3: Stream closed.\n");

writeStream.on("finish", () => {
    console.log("Write stream completed successfully.");
    fs.unlinkSync(outputPath); // cleanup
});
