const fs = require("fs");
const path = require("path");

const original = path.join(__dirname, "temp_rename.txt");
const renamed = path.join(__dirname, "renamed_temp.txt");

fs.writeFileSync(original, "Temporary file content");

fs.rename(original, renamed, (err) => {
    if (err) {
        console.error("Rename error:", err);
        return;
    }
    console.log("File renamed successfully to:", renamed);
    fs.unlinkSync(renamed); // cleanup
});
