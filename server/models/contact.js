// Name: Juliano Souza Chaves Costa
// StudentID: 301222713
// Date: 2022-10-29


let mongoose = require('mongoose');

let contactModel = mongoose.Schema({
    fname: String,
    lname: String,
    phone: String,
    email: String,
    message: String,
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);