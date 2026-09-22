const promise1 = new Promise((resolve, reject)=>{
    let success = true
    if(success){
        resolve({
            id: 2930309,
            username: "john Doe"
        })
    }
    else{
        reject(new Error("Data not found"))
    }
})
promise1
.then((response) => {
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})







const promise2 = new Promise((resolve, reject)=>{
    let success = true;
    if(success){
        resolve({
            Fruit: "Orange",
            Price: 70
        })
    }
    else{
        reject(new Error("Data not found"))
    }
})
promise2
.then((response) => {
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})







Promise.all([promise1, promise2])
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})







Promise.race([promise1, promise2])
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})






Promise.allSettled([promise1, promise2])
.then((response)=>{
    console.log(response);
})
.catch((error)=>{
    console.log(error);
})