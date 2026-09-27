function doubleNumber(val) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(val * 2), 50);
    });
}

doubleNumber(5)
    .then((res1) => {
        console.log("Step 1 (5 * 2):", res1);
        return doubleNumber(res1);
    })
    .then((res2) => {
        console.log("Step 2 (10 * 2):", res2);
        return doubleNumber(res2);
    })
    .then((res3) => {
        console.log("Step 3 (20 * 2):", res3);
    });
