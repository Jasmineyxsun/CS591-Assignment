const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");

/* GET users listing. */
router.get('/:artist', function(req, res, next) {
  const baseUrl = 'https://api.deezer.com/search?q=';
  const advanceUrl = 'https://api.deezer.com/artist/';
  const getArtistName = (url1, url2) => {;
    return url1 + url2;
  };

  const apiUrl = getArtistName(baseUrl, req.params.artist);

    fetch(apiUrl)
      .then(res =>res.json())
      .then(data => {
          const artistId = data.data[0].artist.id;
          const apiUrl2 = getArtistName(advanceUrl, artistId);
          fetch(apiUrl2)
              .then(res =>res.json())
              .then(data => {
                  res.send([data])

              })
        // res.render('ps4', {data} );
      })
      .catch(err => {
        res.redirect('/error');
      });
});

module.exports = router;
