const util = require("util");
const fs = require("fs");

// Format strings
const greeting = util.format("Welcome %s, your score is %d/100", "Saksham", 98);
console.log("Formatted:", greeting);

// util.promisify
const statPromise = util.promisify(fs.stat);

statPromise(__filename)
    .then((stats) => {
        console.log("File size via promisify:", stats.size, "Bytes");
    })
    .catch((err) => {
        console.error("Promisify error:", err);
    });
