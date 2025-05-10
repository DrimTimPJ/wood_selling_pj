const express = require('express');
const router = express.Router();
const LocationSchema = require('../models/Location');
const NumberPhoneSchema = require('../models/NumberPhone')
const verifyToken = require('../middleware/authMiddleware')


router.get('/location', async (req, res) => {
    try {
        const Location = await LocationSchema.find();
        if (!Location) return res.status(404).send('Location not found');
        res.json(Location);
      } catch (err) {
        res.status(500).send(err.message);
      }
    });

router.get('/phone-number', async (req, res) => {
    try {
        const NumberPhone = await NumberPhoneSchema.find();
        if (!NumberPhone) return res.status(404).send('NumberPhone not found');
        res.json(NumberPhone);
      } catch (err) {
        res.status(500).send(err.message);
      }
    });


router.put('/location/:id', verifyToken,  async (req, res) => {
  try {
    const {data} = req.body;
    const Location = await LocationSchema.findByIdAndUpdate(
      req.params.id,
      {data},
      { new: true }
    );
    if (!Location) return res.status(404).send('Location not found');
    res.status(200).send('Location updated');
  } catch (err) {
    res.status(500).send(err.message);
  }
});


router.put('/phone-number/:id', verifyToken, async (req, res) => {
  try {
    const {data} = req.body;
    const NumberPhone = await NumberPhoneSchema.findByIdAndUpdate(
      req.params.id,
      {data},
      { new: true }
    );
    if (!NumberPhone) return res.status(404).send('NumberPhone not found');
    res.status(200).send('NumberPhone updated');
  } catch (err) {
    res.status(500).send(err.message);
  }
});


module.exports = router;