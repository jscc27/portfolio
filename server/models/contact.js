let mongoose = require('mongoose');

let contactModel = mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    message: String,
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);