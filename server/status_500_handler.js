const http = require("http");

const PORT = 3009;

const server = http.createServer((req, res) => {
    try {
        if (req.url === "/error") {
            throw new Error("Simulated critical server failure");
        }
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Server is healthy. Visit /error to test 500 handler.");
    } catch (err) {
        console.error("Internal Server Error caught:", err.message);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Internal Server Error", details: err.message }));
    }
});

server.listen(PORT, () => {
    console.log(`500 Handler server running on http://localhost:${PORT}`);
    server.close();
});
