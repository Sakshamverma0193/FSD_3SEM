const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/plain");

    if (req.method === "GET" && req.url === "/") {
        res.statusCode = 200;
        res.end("GET Request received successfully");
    } else if (req.method === "POST" && req.url === "/") {
        res.statusCode = 200;
        res.end("POST Request received successfully");
    } else {
        res.statusCode = 404;
        res.end("404 Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});