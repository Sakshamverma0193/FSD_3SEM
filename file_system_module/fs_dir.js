const fs = require('fs')

fs.mkdir("./myFolder",(err)=>{
    if(err){
        console.log(err);
        return
    }
    console.log("Folder created");
    fs.readdir("./myFolder",(err,files)=>{
        if(err){
            console.log(err);
            return
        }
        console.log("Directory Content",files);
    })
});