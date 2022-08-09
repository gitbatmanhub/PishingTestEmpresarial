//Esto es un modelo de datos

const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const noteScheema= new Schema({
    titulo: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: Date, default: Date.now}
});
module.exports = mongoose.model('Note', noteScheema);