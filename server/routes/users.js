
// Name: Juliano Souza Chaves Costa
// StudentID: 301222713
// Date: 2022-10-16

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
