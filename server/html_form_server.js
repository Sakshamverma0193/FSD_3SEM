const http = require("http");
const querystring = require("querystring");

const PORT = 3010;

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <form method="POST" action="/submit">
                <input name="username" placeholder="Username" required />
                <button type="submit">Submit</button>
            </form>
        `);
    } else if (req.method === "POST" && req.url === "/submit") {
        let body = "";
        req.on("data", (chunk) => { body += chunk.toString(); });
        req.on("end", () => {
            const formData = querystring.parse(body);
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(`<h1>Welcome, ${formData.username}!</h1>`);
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`HTML Form server running on http://localhost:${PORT}`);
    server.close();
});
