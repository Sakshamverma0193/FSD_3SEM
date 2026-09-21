// import http from 'http';

// const server = http.createServer((req , res) => {
//    res.end("Welcome From Server");
//    res.setHeader("Content-Type", "text/plain");
//    fs.readFile("file.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   console.log(data);
// })

// server.listen(3000, '127.0.0.1' , () =>{
//     console.log("Server running on port 3000");
// })

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {

  res.setHeader("Content-Type", "text/plain");

  fs.readFile("file.txt", "utf8", (err, data) => {

    if (err) {
      console.error(err);
      res.statusCode = 500;
      res.end("Error reading file");
      return;
    }

    console.log(data);
    res.end(data);
  });

});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server running on port 3000");
});