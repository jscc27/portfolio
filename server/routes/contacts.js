let express = require('express');
let router = express.Router();
let mangoose = require('mongoose');

let Contact = require('../models/contact');

let passport = require('passport');


function requireAuth(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}

let contactController = require('../controllers/contacts');

router.get('/', requireAuth, contactController.displayContactList);

/* GET contact page. */
router.get('/add', requireAuth, contactController.displayAddContact);

router.post('/add', requireAuth, contactController.processAddContact);
  
//update

router.get('/edit/:id', requireAuth, contactController.displayEditContact);

router.post('/edit/:id', requireAuth, contactController.processEditContact);

//delete

router.get('/delete/:id', requireAuth, contactController.deleteContact);


module.exports = router;