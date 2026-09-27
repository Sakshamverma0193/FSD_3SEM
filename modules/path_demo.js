const path = require("path");

const samplePath = "/users/student/docs/report.pdf";

console.log("Base Name:", path.basename(samplePath));
console.log("Dir Name:", path.dirname(samplePath));
console.log("Extension:", path.extname(samplePath));
console.log("Parsed Object:", path.parse(samplePath));
console.log("Normalized Path:", path.normalize("/users//student/../student/report.pdf"));
console.log("Resolved Absolute Path:", path.resolve("report.pdf"));
