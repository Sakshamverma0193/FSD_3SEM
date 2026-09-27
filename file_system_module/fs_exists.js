const fs = require("fs");
const path = require("path");

const target = path.join(__dirname, "notes.txt");

fs.access(target, fs.constants.F_OK | fs.constants.R_OK, (err) => {
    if (err) {
        console.log(`File does not exist or is not readable: ${err.message}`);
    } else {
        console.log(`File [${path.basename(target)}] exists and is readable.`);
    }
});
