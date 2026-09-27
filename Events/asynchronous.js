// Demonstration of asynchronous callbacks (Callback Hell / Pyramid of Doom)

function getUser(id, callback) {
    setTimeout(() => {
        console.log(`1. Fetched user with ID: ${id}`);
        callback(null, { id: id, username: "john_doe" });
    }, 100);
}

function getProfile(user, callback) {
    setTimeout(() => {
        console.log(`2. Fetched profile for: ${user.username}`);
        callback(null, { username: user.username, role: "admin" });
    }, 100);
}

function getPosts(username, callback) {
    setTimeout(() => {
        console.log(`3. Fetched posts for: ${username}`);
        callback(null, ["Post 1", "Post 2", "Post 3"]);
    }, 100);
}

// Nested callback execution
getUser(1, function (error, user) {
    if (error) {
        console.error("Error fetching user:", error);
        return;
    }
    getProfile(user, function (error, profile) {
        if (error) {
            console.error("Error fetching profile:", error);
            return;
        }
        getPosts(profile.username, function (error, posts) {
            if (error) {
                console.error("Error fetching posts:", error);
                return;
            }
            console.log("All posts successfully fetched:", posts);
        });
    });
});