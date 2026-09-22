// import { log } from "console";
// import fs from "fs";

// setTimeout(()=>{
//     console.log("setTimeOut");
// }, 1000);

// fs.readFile("intro.txt","utf8", (err,data)=>{
//     console.log("file read completed")
// })

// setInterval(()=>{
//     console.log("set interval after 5ms");
// },500);


// setImmediate(()=>{
//     console.log("set Immediate ");
// });

setTimeout(()=>{
    console.log("timeout")
},100)

setImmediate(()=>{
    console.log("immediate")
})

FileSystem.readline("intro.txt", "utf8", (err,data)=>{
    console.log("file read completed");
    setTimeout()
    setImmediate()
})
