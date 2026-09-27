// Demonstration of non-blocking asynchronous execution using setTimeout
console.log("Start");

function printMessage() {
    setTimeout(() => {
        console.log("Async Task: Hello! This message is printed after 2 seconds.");
    }, 2000);
}

printMessage();
console.log("End (executed immediately before setTimeout callback)");