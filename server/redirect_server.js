const http = require("http");

const PORT = 3008;

const server = http.createServer((req, res) => {
    if (req.url === "/old-page") {
        res.writeHead(301, { Location: "/new-page" });
        res.end();
    } else if (req.url === "/new-page") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to the New Page (Redirected from /old-page)");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`Redirect server running on http://localhost:${PORT}`);
    server.close();
});
