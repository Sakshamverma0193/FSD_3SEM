const http = require("http");
const fs = require("fs");
const path = require("path");

const htmlFilePath = path.join(__dirname, "index.html");

const server = http.createServer((req, res) => {
    fs.readFile(htmlFilePath, "utf8", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal Server Error: Unable to load page");
            return;
        }

        res.writeHead(200, {
            "Content-Type": "text/html",
            "custom-header": "Hello ECE"
        });
        res.end(data);
    });
});

const PORT = 3000;
const HOST = "127.0.0.1";
server.listen(PORT, HOST, () => {
    console.log(`Server is running at http://${HOST}:${PORT}/`);
});