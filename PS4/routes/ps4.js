const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");

/* GET users listing. */
router.get('/', function(req, res, next) {
  const baseUrl = 'https://api.deezer.com/artist';
  const getArtistName = (url1, url2) => {;
    return url1 + url2;
  };

  const apiUrl = getArtistName(baseUrl, '/coldplay');
  
  fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        res.render('ps4', {data} );
      })
      .catch(err => {
        res.redirect('/error');
      });
});

module.exports = router;
