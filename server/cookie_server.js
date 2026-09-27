const http = require("http");

const PORT = 3007;

const server = http.createServer((req, res) => {
    const cookies = req.headers.cookie || "";

    // Set a cookie header
    res.setHeader("Set-Cookie", ["session_id=abc123xyz; HttpOnly; Path=/", "theme=dark; Path=/"]);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ receivedCookies: cookies, message: "Cookies set in headers" }));
});

server.listen(PORT, () => {
    console.log(`Cookie server running on http://localhost:${PORT}`);
    server.close();
});
