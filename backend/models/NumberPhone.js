const mongoose = require('mongoose');
const NumberPhoneSchema = new mongoose.Schema({
    data: { type: String, unique: true, required: true },
});
module.exports = mongoose.model('NumberPhone', NumberPhoneSchema);