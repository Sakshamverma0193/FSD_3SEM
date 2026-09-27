const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");

    if (req.url === "/") {
        res.statusCode = 200;
        res.end("Hello from Homepage");
    } else if (req.url === "/about") {
        res.statusCode = 200;
        res.end("About Page");
    } else if (req.url === "/contact") {
        res.statusCode = 200;
        res.end("Contact Page");
    } else {
        res.statusCode = 404;
        res.end("404: Page Not Found");
    }
});

const PORT = 3000;
const HOST = "127.0.0.1";

server.listen(PORT, HOST, () => {
    console.log(`Server is running at http://${HOST}:${PORT}/`);
});