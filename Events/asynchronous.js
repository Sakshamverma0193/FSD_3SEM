getuser(1, function(error,user)){
    getprofile(user, IdleDeadline, function( error, profile)){
        if (error){
            return;
        }
        getposts(profile.username, function(error, posts)){
            if(error){
                console.error(error);
                return;
            }
            console.log("fetched posts")
        }
    }
}