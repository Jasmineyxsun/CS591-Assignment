const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getTest', function(req,res, next) {
  return res.render('string', {getTest: 'Hey now'});
});
router.post('/postTest', function(req,res, next) {
  let returnString = req.body.string;
  return res.render('string', {postTest: returnString, length:returnString.length});
});

module.exports = router;
