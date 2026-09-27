const http = require("http");
const zlib = require("zlib");

const PORT = 3012;

const server = http.createServer((req, res) => {
    const rawData = "Node.js High Performance Server response compressed with Gzip!\n".repeat(20);
    const acceptEncoding = req.headers["accept-encoding"] || "";

    if (acceptEncoding.includes("gzip")) {
        res.writeHead(200, {
            "Content-Type": "text/plain",
            "Content-Encoding": "gzip"
        });
        zlib.gzip(rawData, (err, compressed) => {
            res.end(compressed);
        });
    } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(rawData);
    }
});

server.listen(PORT, () => {
    console.log(`Compression server running on http://localhost:${PORT}`);
    server.close();
});
