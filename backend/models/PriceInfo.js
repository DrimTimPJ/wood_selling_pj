const mongoose = require('mongoose');
const PriceInfoSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    length: { type: Number, required: true },
    width: { type: Number, required: true },
    thick: { type: Number, required: true },
    m3: { type: Number, required: true },
    pricem3: { type: Number, required: true },
    priceForOne: { type: Number, required: true }
});
module.exports = mongoose.model('PriceGridProps', PriceInfoSchema);