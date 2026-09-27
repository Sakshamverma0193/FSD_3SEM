const crypto = require("crypto");

// SHA-256 Hash
const password = "mySecretPassword123";
const hash = crypto.createHash("sha256").update(password).digest("hex");
console.log("SHA-256 Hash:", hash);

// Random bytes for token generation
const token = crypto.randomBytes(16).toString("hex");
console.log("Random Auth Token:", token);
