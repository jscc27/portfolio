// Name: Juliano Souza Chaves Costa
// StudentID: 301222713
// Date: 2022-10-29


let mongoose = require('mongoose');

let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: Number
},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);