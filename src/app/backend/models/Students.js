const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    dateBirth: { type: Date, required: true },
    placeBirth: { type: String, required: true },
    location: { type: String, required: true },
    phone: { type: Number, required: true },
    addressMail: { type: String },
    registrationDate: { type: Date, required: true },
    class: { type: mongoose.Schema.Types.ObjectId, ref: 'Classes'} 
});

module.exports = mongoose.model('Students', studentSchema);