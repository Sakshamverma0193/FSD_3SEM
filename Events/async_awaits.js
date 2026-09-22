async function fetchUserData(){
    return new Promise((resolve,reject)=>{
        let success=true;
        if(success){
            resolve({
                id: 2930309,
                username: "john Doe"
        });
    }
    else{
        reject(new Error("Data not found"));
    }
    });
}


async function getUser(){
    try{
    const user=await fetchUserData();
    console.log(user);
}
catch(error){
    console.log(`Error: ${error.message}`);
}
}
getUser();