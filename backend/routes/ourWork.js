const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware')
const ourWorkSchema = require("../models/ourWork")

router.get('/', async (req, res) => {
    try {
        const ourWork = await ourWorkSchema.find();
        if (!ourWork) return res.status(404).send('ourWork not found');
        res.json(ourWork);
      } catch (err) {
        res.status(500).send(err.message);
      }
    });
    

router.post('/', verifyToken, async (req, res) => {
    try {
        const { image, price} = req.body;
        const ourWork = new ourWorkSchema({ image, price});
        await ourWork.save();
        res.status(201).json(ourWork);
      } catch (err) {
        res.status(500).send(err.message);
      }
    });

router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const ourWork = await ourWorkSchema.findByIdAndDelete(req.params.id);
        if (!ourWork) return res.status(404).send('ourWork not found');
        else return res.status(200).send('ourWork deleted');
  
      } catch (err) {
        res.status(500).send(err.message);
      }
    });


module.exports = router;