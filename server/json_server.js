const http = require("http");

const PORT = 3001;

const server = http.createServer((req, res) => {
    if (req.url === "/api/users" && req.method === "GET") {
        const users = [
            { id: 1, name: "Saksham", role: "Student" },
            { id: 2, name: "Alex", role: "Instructor" }
        ];

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: true, count: users.length, data: users }));
    } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ success: false, message: "Endpoint Not Found" }));
    }
});

server.listen(PORT, () => {
    console.log(`JSON Server running on http://localhost:${PORT}`);
    server.close();
});
