const mongoose = require('mongoose');
const LocationSchema = new mongoose.Schema({
    data: { type: String, required: true },
});
module.exports = mongoose.model('Location', LocationSchema);