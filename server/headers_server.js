const http = require("http");

const PORT = 3006;

const server = http.createServer((req, res) => {
    // Setting CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("X-Powered-By", "NodeJS-Lab");

    if (req.method === "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
    }

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("CORS enabled response");
});

server.listen(PORT, () => {
    console.log(`Headers server running on http://localhost:${PORT}`);
    server.close();
});
