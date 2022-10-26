
// Name: Juliano Souza Chaves Costa
// StudentID: 301222713
// Date: 2022-10-16

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);
/* GET about page. */
router.get('/about', indexController.displayAboutPage);
/* GET projects page. */
router.get('/projects', indexController.displayProjectsPage);
/* GET services page. */
router.get('/services', indexController.displayServicesPage);



module.exports = router;
