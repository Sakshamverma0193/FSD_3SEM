/**
 * Global Express Error Handling Middleware
 */
function errorHandler(err, req, res, next) {
    const statusCode = err.status || 500;
    console.error(`[Error] ${statusCode}:`, err.message);

    res.status(statusCode).json({
        success: false,
        error: {
            message: err.message || "Internal Server Error",
            status: statusCode
        }
    });
}

module.exports = errorHandler;
