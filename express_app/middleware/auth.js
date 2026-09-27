/**
 * API Key / Bearer token authentication middleware
 */
function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ success: false, error: "Access token required" });
    }

    const token = authHeader.split(" ")[1];
    if (token !== "valid-jwt-token") {
        return res.status(403).json({ success: false, error: "Invalid token" });
    }

    req.user = { id: 1, role: "developer" };
    next();
}

module.exports = authenticate;
