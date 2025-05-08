const mongoose = require('mongoose');
const PriceInfoSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    length: { type: String, required: true },
    width: { type: String, required: true },
    thick: { type: String, required: true },
    m3: { type: String, required: true },
    cenam3: { type: String, required: true },
    cenaKs: { type: String, required: true }
});
module.exports = mongoose.model('PriceGridProps', PriceInfoSchema);