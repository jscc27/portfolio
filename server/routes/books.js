let express = require('express');
let router = express.Router();
let mangoose = require('mongoose');

let Book = require('../models/book');

let passport = require('passport');


function requireAuth(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}


router.get('/', (req, res, next) => {
    Book.find((err, bookList) => {
        if(err){
            return console.error(err);
        }
        else{
            console.log(bookList);
            res.render('book/list', {title: 'Book List', BookList: bookList, displayName: req.user ? req.user.displayName : ''});
        }
    });
});

//create

router.get('/add', requireAuth, (req, res, next) => {
    res.render('book/add', {title: 'Add Book'});
});

router.post('/add', requireAuth, (req, res, next) => {
    let newBook = Book({
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });

    Book.create(newBook, (err, Book) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/book-list');
        }
    });

});

//update

router.get('/edit/:id', requireAuth, (req, res, next) => {
    let id = req.params.id;

    Book.findById(id, (err, bookToEdit) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.render('book/edit', {title: 'Edit Book', book: bookToEdit, displayName: req.user ? req.user.displayName : ''});
        }
    });
});

router.post('/edit/:id', requireAuth, (req, res, next) => {
    let id = req.params.id;

    let updatedBook = Book({
        "_id": id,
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });

    Book.updateOne({_id: id}, updatedBook, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/book-list');
        }
    });
});

//delete

router.get('/delete/:id', requireAuth, (req, res, next) => {
    let id = req.params.id;


    Book.remove({_id: id}, (err) => {
        if(err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/book-list');
        }
    });
});


module.exports = router;