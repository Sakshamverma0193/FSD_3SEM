import http from 'http'
import fs from 'fs'

const server = http.createServer((req,res)=>{
    console.log('hello world');
    if(req.url === "/"){
        res.end("hello from homepage");
    }else if(req.url === "/about"){
        res.end("about page")
    }else if(req.url === "/contact"){
        res.end("contact")
    }
    else{
        res.end("page not found")
    }
});

const data = fs.readFileSync('./index.html','utf-8');
console.log(`${data}`);

server.listen(3000,"127.0.0.1", () => {
    console.log("server is running on http://127.0.0.1:3000/..");
});