const mongoose = require('mongoose');

const classeSchema = mongoose.Schema({
    wording: { type: String, required: true },
    size: { type: Number, required: true },
    date: { type: Date },
});

module.exports = mongoose.model('Classes', classeSchema);