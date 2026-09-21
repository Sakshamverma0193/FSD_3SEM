const fs = require("fs");

const watcher = fs.watchFile("intro.txt",(curr,prev)=>{
    console.log("current:",curr)
    console.log("previous:",prev)
});