const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "notes.txt");
const destination = path.join(__dirname, "notes_piped.txt");

const srcStream = fs.createReadStream(source);
const destStream = fs.createWriteStream(destination);

srcStream.pipe(destStream);

destStream.on("finish", () => {
    console.log("Piping completed successfully.");
    fs.unlinkSync(destination); // cleanup
});
