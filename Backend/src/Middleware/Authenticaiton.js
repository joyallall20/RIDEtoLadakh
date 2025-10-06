// authMiddleware.js

import jwt from 'jsonwebtoken';

// A function to act as middleware
const Authenticaiton = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.sendStatus(401);
    }

    // Verify the token using the secret key
    jwt.verify(token, process.env.JWT_SECRET, (err, User) => {
        // If an error occurs, the token is invalid or expired
        if (err) {
            // Return a 403 Forbidden status
            return res.sendStatus(403);
        }

        // If the token is valid, attach the user payload to the request object
        req.User = User;
        
        // Call next() to proceed to the next handler
        next();
    });
};

export default Authenticaiton;