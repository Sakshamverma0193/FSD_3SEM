import http from 'http';
import fs from 'fs';
const data = fs.readFileSync("index.html");
const server = http.createServer((req, res) => {
    console.log("Hello World")
    const order ={
        id: 1,
        name: "Pizza",
        price: 100,
        dest: "Delhi"
    };

    console.log(`${data}`);
    res.writeHead(404, {
        "Content-Type": "text/html",
        "custom-header": "Hello ECE"
    });
    res.end(data);
})
server.listen(3000, "127.0.0.1", () =>{
    console.log("Server is running..."); 
})