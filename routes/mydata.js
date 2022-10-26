var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('render', { title: 'Anaparthi Sai Ganesh' });
});

module.exports = router;
