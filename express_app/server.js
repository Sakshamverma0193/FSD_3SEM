const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static
app.use(express.static(path.join(__dirname, "public")));

// Root route
app.get("/api/health", (req, res) => {
    res.json({ status: "UP", timestamp: new Date().toISOString() });
});

if (require.main === module) {
    app.listen(PORT, () => console.log(`Express App on http://localhost:${PORT}`));
}

module.exports = app;
