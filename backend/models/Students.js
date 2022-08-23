const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    firstname: { type: String },
    lastname: { type: String },
    dateBirth: { type: Date },
    placeBirth: { type: String },
    location: { type: String },
    phone: { type: Number },
    addressmail: { type: String },
    registrationDate: { type: Date },
    classe: { type: String } 
});

module.exports = mongoose.model('Students', studentSchema);