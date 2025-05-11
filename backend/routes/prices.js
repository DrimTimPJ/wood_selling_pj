const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/authMiddleware')
const PriceInfoSchema = require("../models/PriceInfo")


router.get('/', async (req, res) => {
    try {
        const PriceInfo = await PriceInfoSchema.find();
        if (!PriceInfo) return res.status(404).send('PriceInfo not found');
        res.json(PriceInfo);
      } catch (err) {
        res.status(500).send(err.message);
      }
    });
    

router.put('/:id', verifyToken, async (req, res) => {
  try {
    const {name, length, width, thick, m3, pricem3, priceForOne} = req.body;
    const PriceInfo = await PriceInfoSchema.findByIdAndUpdate(
      req.params.id,
      {name, length, width, thick, m3, pricem3, priceForOne},
      { new: true }
    );
    if (!PriceInfo) return res.status(404).send('PriceInfo not found');
    res.status(200).send('PriceInfo updated');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/', verifyToken, async (req, res) => {
    try {
        const {name, length, width, thick, m3, pricem3, priceForOne } = req.body;
        const PriceInfo = new PriceInfoSchema({name, length, width, thick, m3, pricem3, priceForOne });
        await PriceInfo.save();
        res.status(201).json(PriceInfo);
      } catch (err) {
        res.status(500).send(err.message);
      }
    });

router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const PriceInfo = await PriceInfoSchema.findByIdAndDelete(req.params.id);
        if (!PriceInfo) return res.status(404).send('PriceInfo not found');
        else return res.status(200).send('PriceInfo deleted');
  
      } catch (err) {
        res.status(500).send(err.message);
      }
    });


module.exports = router;