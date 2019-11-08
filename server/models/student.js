const mongoose = require('mongoose');
const { Schema } = mongoose;



const StudentSchema = new Schema({

    id: { type: String},
    name: { type: String, required: true},
    adress: { type: String, required: true},
    phones: { type: [] },
    carrera: {type: String},
})

module.exports = mongoose.model('Student', StudentSchema);