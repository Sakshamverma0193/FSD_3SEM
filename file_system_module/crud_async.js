const fs = require("fs");

// Create a file
fs.writeFile("notes.txt", "ECE-A", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("Data successfully written in notes.txt");

    // Read the file after writing is completed
    fs.readFile("notes.txt", "utf8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log("File data:", data);

        // Update/append data
        const updateData = "\nHello ECE-A";

        fs.appendFile("notes.txt", updateData, (err) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log("File updated successfully");

            // Read updated file
            fs.readFile("notes.txt", "utf8", (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }

                console.log("Updated file data:", data);
            });
        });
    });
});