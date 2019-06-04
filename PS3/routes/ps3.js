const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req,res,next) {
  res.render('string', {Test: 'Hey now'});
});
router.post('/', function(req,res,next) {
  let returnString = req.body.string;
  res.render('string', {Test: returnString, length:returnString.length});
});

module.exports = router;
