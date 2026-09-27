const http = require("http");

const PORT = 3002;

const server = http.createServer((req, res) => {
    const baseURL = `http://${req.headers.host}`;
    const parsedUrl = new URL(req.url, baseURL);

    if (parsedUrl.pathname === "/search") {
        const query = parsedUrl.searchParams.get("q") || "none";
        const page = parsedUrl.searchParams.get("page") || "1";

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ query, page, status: "Query processed" }));
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Use /search?q=keyword&page=1");
    }
});

server.listen(PORT, () => {
    console.log(`Query server running on http://localhost:${PORT}`);
    server.close();
});
