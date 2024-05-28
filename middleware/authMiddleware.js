// Helper Function for handling User authentication

const jwt = require('jsonwebtoken');
const { User } = require('../models/user');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    console.log("Incoming request to:", req.originalUrl); // Debugging step
    console.log("Token:", token); // Debugging step

    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET, async (err, user) => {
        if (err) {
            console.log("Token verification failed:", err); // Debugging step
            return res.sendStatus(403);
        }

        try {
            const foundUser = await User.findById(user.id);
            if (!foundUser) {
                console.log("User not found"); // Debugging step
                return res.sendStatus(404);
            }

            req.user = foundUser;
            next();
        } catch (error) {
            console.error(error);
            res.sendStatus(500);
        }
    });
};

module.exports = authenticateToken;
