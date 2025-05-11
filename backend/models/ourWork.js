const mongoose = require('mongoose');
const ourWorkSchema = new mongoose.Schema({
    image: { type: String, required: true },
    price: { type: Number, required: true }
});
module.exports = mongoose.model('ourWork', ourWorkSchema);