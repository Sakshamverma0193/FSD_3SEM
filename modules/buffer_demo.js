// Allocate fixed buffer
const buf1 = Buffer.alloc(10);
buf1.write("Node.js");
console.log("Buffer 1 (raw bytes):", buf1);
console.log("Buffer 1 (string):", buf1.toString("utf8"));

// Create from string
const buf2 = Buffer.from("Full Stack Development");
console.log("Buffer 2 (JSON):", buf2.toJSON().data.slice(0, 5));
console.log("Buffer 2 (Base64):", buf2.toString("base64"));
console.log("Buffer 2 (Hex):", buf2.toString("hex").slice(0, 10));
