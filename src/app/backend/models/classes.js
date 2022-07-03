const mongoose = require('mongoose');

const classeShema = mongoose.Schema({
    wording: { type: String, required: true },
    size: { type: Number, required: true }
});

module.exports = mongoose.model('Classes', classeShema);