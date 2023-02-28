//require the mongoose library
const mongoose = require('mongoose');

//creating the schema
const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});

//name the collection
const Contact = mongoose.model('Contact',contactSchema);

//export the schema
module.exports = Contact;