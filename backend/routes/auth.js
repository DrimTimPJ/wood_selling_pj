const express = require('express');
const router = express.Router();
const User = require('../models/user');
const {secretKey} = require("../env")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const validator = require('validator');



router.post('/registration', async (req, res) => {
try {
    console.log(req.body)
    const { name, surname, email, username, password } = req.body;

    if (!name || !surname || !email || !username || !password) {
            return res.status(400).json({ error: 'All fields are required' });
    }
    
    if (!validator.isEmail(email)) {
            return res.status(400).json({ error: 'Invalid email format' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({name : name, 
                    surname : surname,
                    email :  email,
                    username : username, 
                    password : hashedPassword})
    res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {

        if (error.code === 11000) {
            if (error.keyPattern.username) {
                return res.status(409).json({ error: 'Username already taken' });
            }
            if (error.keyPattern.email) {
                return res.status(409).json({ error: 'Email already registered' });
            }
        }

        res.status(500).json({ error: error });
        console.log(error)
    }
});


router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        console.log(user)
        if (!user) {
            return res.status(401).json({ error: 'Authentication failed, no user' });
            }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Authentication failed' });
            }
        const token = jwt.sign({ userId: user._id.toString() }, secretKey, {
        expiresIn: '1h',
        });
        console.log(token)
        res.status(200).json({ token });
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: error });
    }
});

module.exports = router;