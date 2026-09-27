const fs = require("fs");
const path = require("path");

/**
 * Returns a human-readable string representation of a file size.
 * @param {number} bytes 
 * @returns {string} Formatted size (e.g. "1.50 KB")
 */
function formatBytes(bytes) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

/**
 * Checks and logs the size of a target file.
 * @param {string} filePath 
 */
function checkFileSize(filePath) {
    fs.stat(filePath, (err, stats) => {
        if (err) {
            console.error(`Error inspecting file [${filePath}]:`, err.message);
            return;
        }

        if (stats.isFile()) {
            console.log(`File: ${path.basename(filePath)}`);
            console.log(`Raw Size: ${stats.size} Bytes`);
            console.log(`Formatted Size: ${formatBytes(stats.size)}`);
        } else if (stats.isDirectory()) {
            console.log(`Path [${filePath}] is a directory, not a file.`);
        }
    });
}

// Example usage
const targetPath = path.join(__dirname, "notes.txt");
checkFileSize(targetPath);