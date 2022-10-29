// Name: Juliano Souza Chaves Costa
// StudentID: 301222713
// Date: 2022-10-29

let express = require('express');
let router = express.Router();
let mangoose = require('mongoose');

let Contact = require('../models/contact');

module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, contactList) => {
        if(err){
            return console.error(err);
        }
        else{
            // console.log(contactList);
            res.render('contact/list', {title: 'Contacts List', ContactList: contactList, displayName: req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.displayAddContact = (req, res, next) => {
    res.render('contact/add', { title: 'Contact Me' , displayName: req.user ? req.user.displayName : ''});
}

module.exports.processAddContact = (req, res, next) => {
    let newContact = Contact({
        "fname": req.body.fname,
        "lname": req.body.lname,
        "phone": req.body.phone,
        "email": req.body.email,
        "message": req.body.message
    });

    Contact.create(newContact, (err, Book) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/contact-list/add');
        }
    });

}

module.exports.displayEditContact = (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contatcToEdit) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.render('contact/edit', {title: 'Edit Contact', contact: contatcToEdit, displayName: req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.processEditContact = (req, res, next) => {
    let id = req.params.id;

    let updatedContact = Contact({
        "_id": id,
        "fname": req.body.fname,
        "lname": req.body.lname,
        "phone": req.body.phone,
        "email": req.body.email,
        "message": req.body.message
    });

    Contact.updateOne({_id: id}, updatedContact, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/contact-list');
        }
    });
}

module.exports.deleteContact = (req, res, next) => {
    let id = req.params.id;


    Contact.remove({_id: id}, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/contact-list');
        }
    });
}
