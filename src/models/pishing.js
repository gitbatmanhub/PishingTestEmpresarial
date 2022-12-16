//Esto es un modelo de datos

const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const pishingScheema= new Schema({
    correo: {type: String, required: true},
    //password: {type: String, required: true}
    //description: {type: String, required: true},
    //date: {type: Date, default: Date.now}
});




module.exports = mongoose.model('pishing', pishingScheema);




