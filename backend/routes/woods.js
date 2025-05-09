const express = require('express');

const router = express.Router();
const verifyToken = require('../middleware/authMiddleware')

const WoodSchema = require("../models/Wood")


router.get('/', async (req, res) => {
    try {
        const Wood = await WoodSchema.find();
        if (!Wood) return res.status(404).send('Wood not found');
        res.json(Wood);
      } catch (err) {
        res.status(500).send(err.message);
      }
    });
    

router.post('/', verifyToken, async (req, res) => {
    try {
        const { image, name, statistics } = req.body;

        const Wood = new WoodSchema({ image, name, statistics });
        await Wood.save();

        res.status(201).json(Wood);
    } catch (err) {
        res.status(500).send(err.message);
    }
    });

router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const Wood = await WoodSchema.findByIdAndDelete(req.params.id);
        if (!Wood) return res.status(404).send('Wood not found');
        else return res.status(200).send('Wood deleted');
  
      } catch (err) {
        res.status(500).send(err.message);
      }
    });


module.exports = router;