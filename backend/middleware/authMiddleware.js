const jwt = require('jsonwebtoken');

const secretKey = require("../env")

function verifyToken(req, res, next) {
    const token = req.header('Authorization');

    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
        const decoded = jwt.verify(token, secretKey);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ error: error });
    }
};

module.exports = verifyToken;
