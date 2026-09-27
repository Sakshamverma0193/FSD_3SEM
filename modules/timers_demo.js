console.log("1. Script start");

const timeoutId = setTimeout(() => {
    console.log("This will not print because it will be cleared");
}, 1000);

clearTimeout(timeoutId);

const intervalId = setInterval(() => {
    console.log("2. Interval tick");
    clearInterval(intervalId);
    console.log("3. Interval cleared");
}, 50);

setImmediate(() => {
    console.log("Immediate callback fired");
});
