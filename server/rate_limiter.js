const http = require("http");

const PORT = 3011;
const requestCounts = new Map();
const LIMIT = 5;
const WINDOW_MS = 60000;

const server = http.createServer((req, res) => {
    const ip = req.socket.remoteAddress || "unknown";
    const now = Date.now();

    const userData = requestCounts.get(ip) || { count: 0, resetTime: now + WINDOW_MS };

    if (now > userData.resetTime) {
        userData.count = 1;
        userData.resetTime = now + WINDOW_MS;
    } else {
        userData.count++;
    }

    requestCounts.set(ip, userData);

    if (userData.count > LIMIT) {
        res.writeHead(429, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Too Many Requests. Try again later." }));
        return;
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ success: true, remaining: LIMIT - userData.count }));
});

server.listen(PORT, () => {
    console.log(`Rate limiter server running on http://localhost:${PORT}`);
    server.close();
});
