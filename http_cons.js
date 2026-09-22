const http = require("http")

const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/"){
        res.end("GET Request")
    }
    else if (req.method === "POST" && req.url === "/"){
        res.end("POST Request")
    }
})
server.listen(3000, (req, res) =>{
    console.log("Server is running on the PORT : 3000");
})