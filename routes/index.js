var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'I Khow' });
});


router.get('/about', function(req, res, next) {
  res.render('about', { title: 'I Khow You Khow' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'I Khow You Khow' });
});
module.exports = router;
