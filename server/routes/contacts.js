let express = require('express');
let router = express.Router();
let mangoose = require('mongoose');

let Contact = require('../models/contact');

let contactController = require('../controllers/contacts');

router.get('/', contactController.displayContactList);

/* GET contact page. */
router.get('/add', contactController.displayAddContact);

router.post('/add', contactController.processAddContact);
  
//update

router.get('/edit/:id', contactController.displayEditContact);

router.post('/edit/:id', contactController.processEditContact);

//delete

router.get('/delete/:id', contactController.deleteContact);


module.exports = router;