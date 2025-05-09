const express = require('express');
const router = express.Router();
const User = require('../models/user');
const {secretKey} = require("../env")
const jwt = require('jsonwebtoken');



router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ error: 'Authentication failed, no user' });
        }
        if (user.password !== password) {
            return res.status(401).json({ error: 'password incorrect' });
        }
        const token = jwt.sign({ userId: user._id.toString() }, secretKey, {
            expiresIn: '1h',
        });
        res.status(200).json({ token });
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: error });
    }
});

module.exports = router;