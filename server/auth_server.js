const http = require("http");

const PORT = 3005;

const server = http.createServer((req, res) => {
    const authHeader = req.headers["authorization"];

    if (!authHeader || authHeader !== "Bearer secret-token-123") {
        res.writeHead(401, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Unauthorized access" }));
        return;
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Protected resource accessed successfully" }));
});

server.listen(PORT, () => {
    console.log(`Auth server running on http://localhost:${PORT}`);
    server.close();
});
