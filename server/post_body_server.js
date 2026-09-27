const http = require("http");

const PORT = 3003;

const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/api/data") {
        let body = "";

        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {
            try {
                const parsed = JSON.parse(body);
                res.writeHead(201, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: "Data received", data: parsed }));
            } catch (err) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "Invalid JSON format" }));
            }
        });
    } else {
        res.writeHead(405, { "Content-Type": "text/plain" });
        res.end("Method Not Allowed");
    }
});

server.listen(PORT, () => {
    console.log(`POST body server running on http://localhost:${PORT}`);
    server.close();
});
