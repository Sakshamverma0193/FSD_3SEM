async function* fetchNumbers() {
    for (let i = 1; i <= 3; i++) {
        await new Promise((resolve) => setTimeout(resolve, 50));
        yield i;
    }
}

async function runGenerator() {
    console.log("Starting async generator:");
    for await (const num of fetchNumbers()) {
        console.log(`Yielded value: ${num}`);
    }
}

runGenerator();
