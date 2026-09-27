console.log("Node Version:", process.version);
console.log("Process ID (PID):", process.pid);
console.log("Current Directory (cwd):", process.cwd());
console.log("Memory Usage (heapUsed):", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2), "MB");
console.log("Command line args count:", process.argv.length);
console.log("Platform:", process.platform);
