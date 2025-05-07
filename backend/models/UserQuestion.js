const mongoose = require('mongoose');
const UserQuestionSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    telephoneNumber: { type: String, unique: true, required: true },
    question: { type: String, required: true }
});
module.exports = mongoose.model('UserQuestion', UserQuestionSchema);