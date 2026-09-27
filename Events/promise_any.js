const p1 = new Promise((_, reject) => setTimeout(() => reject("Fail 1"), 50));
const p2 = new Promise((resolve) => setTimeout(() => resolve("Success from P2"), 100));
const p3 = new Promise((resolve) => setTimeout(() => resolve("Success from P3"), 150));

Promise.any([p1, p2, p3])
    .then((result) => {
        console.log("Promise.any first fulfilled:", result);
    })
    .catch((error) => {
        console.error("All rejected:", error);
    });
