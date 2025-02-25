// module.export =(req, res, next) =>{
//     const now = new Date().toISOString();
//     console.log(`[${now}] ${req.method} ${req.url} - IP:${req.ip}`);
//     next();
// }

// requestLogger.js
module.exports = (req, res, next) => {
    const now = new Date().toISOString();
    console.log(`[${now}] ${req.method} ${req.url} - IP: ${req.ip}`);
    next(); // Ensures the request proceeds to the next middleware or route
  };
  