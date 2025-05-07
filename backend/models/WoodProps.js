const mongoose = require('mongoose');
const WoodStatisticsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    isTrue: { type: Boolean, required: true }
});

const WoodPropsSchema = new mongoose.Schema({
    image: { type: String, required: true },
    name: { type: String, unique: true, required: true },
    statistics: { type: [WoodStatisticsSchema], required: true }
});
module.exports = mongoose.model('WoodProps', WoodPropsSchema);