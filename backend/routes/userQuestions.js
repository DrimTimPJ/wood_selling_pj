const express = require('express');
const { isValidPhoneNumber } = require('libphonenumber-js');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware')

const UserQuestionSchema = require("../models/UserQuestion")

router.get('/', verifyToken, async (req, res) => {
    try {
        const UserQuestion = await UserQuestionSchema.find();
        if (!UserQuestion) return res.status(404).send('UserQuestion not found');
        res.json(UserQuestion);
      } catch (err) {
        res.status(500).send(err.message);
      }
    });
    

router.post('/', async (req, res) => {
    try {
        const { name, telephoneNumber, question } = req.body;

        if (!isValidPhoneNumber(telephoneNumber, 'UA')) {
            return res.status(400).json({ message: 'Invalid Ukrainian phone number' });
        }

        const UserQuestion = new UserQuestionSchema({ name, telephoneNumber, question });
        await UserQuestion.save();
        res.status(201).json(UserQuestion);
    } catch (err) {
        res.status(500).send(err.message);
    }
    });

router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const UserQuestion = await UserQuestionSchema.findByIdAndDelete(req.params.id);
        if (!UserQuestion) return res.status(404).send('UserQuestion not found');
        else return res.status(200).send('UserQuestion deleted');
  
      } catch (err) {
        res.status(500).send(err.message);
      }
    });


module.exports = router;