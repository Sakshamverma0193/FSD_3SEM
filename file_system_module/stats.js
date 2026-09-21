const fs = require("fs")
fs.stat("notes.txt",(err, stats)=>{
if(err){
    console.log("Error:", err)
    return 
} 
console.log("information about [notes.txt]",stats)
console.log("size of the file:", stats.size,"Bytes")
console.log("Creation time of the file [notes.txt]:", stats.birthtime.
    toISOString().split("T")[0])
})