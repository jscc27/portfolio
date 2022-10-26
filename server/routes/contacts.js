let express = require('express');
let router = express.Router();
let mangoose = require('mongoose');

let Contact = require('../models/contact');


router.get('/', (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err){
            return console.error(err);
        }
        else{
            console.log(contactList);
            res.render('contacts', {title: 'Contacts List', ContactList: contactList});
        }
    });
});

module.exports = router;