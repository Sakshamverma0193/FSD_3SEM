// Demonstration of Synchronous (Blocking) Execution in JavaScript

console.log("Step 1: Program starts");

function performTask(taskName, durationMs) {
    console.log(`Starting ${taskName}...`);
    const startTime = Date.now();
    // Simulate synchronous CPU-bound blocking work
    while (Date.now() - startTime < durationMs) {
        // blocking execution
    }
    console.log(`Completed ${taskName} (took ${durationMs}ms)`);
}

performTask("Task A", 100);
performTask("Task B", 100);

console.log("Step 2: Program ends (all synchronous steps executed in sequence)");