const fs = require("fs/promises");
const path = require("path");

const targetFile = path.join(__dirname, "notes_promise.txt");

async function fileOperations() {
    try {
        // 1. Create / Write to file
        await fs.writeFile(targetFile, "Hello Node.js Promises!", "utf8");
        console.log("1. File created successfully:", targetFile);

        // 2. Read file content
        const content = await fs.readFile(targetFile, "utf8");
        console.log("2. Read file content:", content);

        // 3. Update / Append to file
        await fs.appendFile(targetFile, "\nAppended text: ECE-A Promises CRUD", "utf8");
        console.log("3. File appended successfully.");

        // Read updated content
        const updatedContent = await fs.readFile(targetFile, "utf8");
        console.log("4. Updated file content:\n" + updatedContent);

        // 5. Delete file
        await fs.unlink(targetFile);
        console.log("5. File deleted successfully (cleanup completed).");
    } catch (error) {
        console.error("Error during file operation:", error.message);
    }
}

fileOperations();