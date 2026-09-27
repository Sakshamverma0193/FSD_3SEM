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
        console.log("Promise 1 resolved:", response);
    })
    .catch((error) => {
        console.error("Promise 1 error:", error);
    });







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
        console.log("Promise 2 resolved:", response);
    })
    .catch((error) => {
        console.error("Promise 2 error:", error);
    });







// Promise.all: Wait for all promises
Promise.all([promise1, promise2])
    .then((response) => {
        console.log("Promise.all:", response);
    })
    .catch((error) => {
        console.error("Promise.all error:", error);
    });







// Promise.race: First settled promise
Promise.race([promise1, promise2])
    .then((response) => {
        console.log("Promise.race:", response);
    })
    .catch((error) => {
        console.error("Promise.race error:", error);
    });






// Promise.allSettled: All settled promises with status
Promise.allSettled([promise1, promise2])
    .then((response) => {
        console.log("Promise.allSettled:", response);
    })
    .catch((error) => {
        console.error("Promise.allSettled error:", error);
    });