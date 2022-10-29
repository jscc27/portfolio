// Name: Juliano Souza Chaves Costa
// StudentID: 301222713
// Date: 2022-10-29

let express = require('express');
let router = express.Router();
let mangoose = require('mongoose');

let Contact = require('../models/contact');

let passport = require('passport');

// check authentication
function requireAuth(req, res, next){ 
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}

let contactController = require('../controllers/contacts');

router.get('/', requireAuth, contactController.displayContactList);

/* GET contact page. */
router.get('/add', contactController.displayAddContact);

router.post('/add', contactController.processAddContact);
  
//update

router.get('/edit/:id', requireAuth, contactController.displayEditContact);

router.post('/edit/:id', requireAuth, contactController.processEditContact);

//delete

router.get('/delete/:id', requireAuth, contactController.deleteContact);


module.exports = router;