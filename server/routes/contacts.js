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
            res.render('contact/list', {title: 'Contacts List', ContactList: contactList});
        }
    });
});

/* GET contact page. */
router.get('/add', function(req, res, next) {
    res.render('contact/add', { title: 'Contact Me' });
  });

router.post('/add', (req, res, next) => {
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
            res.redirect('/contact-list');
        }
    });

});
  
//update

router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    Book.findById(id, (err, bookToEdit) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.render('contact/edit', {title: 'Edit Contact', book: bookToEdit});
        }
    });
});

router.post('/edit/:id', (req, res, next) => {
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
});

//delete

router.get('/delete/:id', (req, res, next) => {
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
});
module.exports = router;