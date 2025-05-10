const mongoose = require('mongoose');
const UserQuestionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    telephoneNumber: { type: String, required: true },
    question: { type: String, required: true }
});
module.exports = mongoose.model('UserQuestion', UserQuestionSchema);