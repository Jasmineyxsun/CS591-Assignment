const express = require('express');
const router = express.Router();
const fetch = require("node-fetch");
const mongoDB = require('./common_mongo.js');

/* GET users listing. */
router.get('/:artist', function(req, res, next) {
    /*I use two urls for the first DeezerAPI because the advanceUrl can only find an artist by its id
    and it's kind of impossible for a user to enter the unknown id for an artist in order to search for
    his/her information. And though baseUrl can do the thing I want, it contains too much useless information
    and the formation of its JSON object is kind of messy. And thus I combine this two together to present the
    number of albums and number of fans of a selected artist
     */
    const baseUrl = 'https://api.deezer.com/search?q=';
    const advanceUrl = 'https://api.deezer.com/artist/';
    //Optional stretch: second API, which displays the fun fact of the number of albums that the selected artist has
    const secondAPI = 'http://numbersapi.com/';
    const combineUrls = (url1, url2) => {
        return url1 + url2;
    };

    const apiUrl = combineUrls(baseUrl, req.params.artist);


    mongoDB.connectToServer(function (err) {
        const db = mongoDB.getDB();
        db.collection("artists").findOne({name: req.params.artist}, function (err, result) {
            if (err) throw err;
            //when the artist has already be stored into the database, get the information from the db instead of calling apis again
            if (result) {
                console.log('Found');
                res.send(result);
            //the artist is not in the db
            } else {
                console.log('Not in db');
                //first call to baseUrl to get the id of the input artist
                fetch(apiUrl)
                    .then(res => res.json())
                    .then(data => {
                        const artistId = data.data[0].artist.id;
                        const apiUrl2 = combineUrls(advanceUrl, artistId);
                        //second call to advanceUrl to get the information of the selected artists based on the id we found
                        fetch(apiUrl2)
                            .then(res => res.json())
                            .then(data => {
                                const num_albums = data.nb_album;
                                const apiURL3 = combineUrls(secondAPI, num_albums);
                                //third call to secondAPI to get the fun facts of the number of albums the selected artist has
                                fetch(apiURL3 + '?json')
                                    .then(res => res.json())
                                    .then(returnData => {
                                        //create the JSON object for database to store the information of the artist selected
                                        const userData = {
                                            id: data.id,
                                            name: req.params.artist,
                                            nb_album: data.nb_album,
                                            nb_fan: data.nb_fan,
                                            funFacts: returnData.text
                                        };
                                        userData.wasCached = true;
                                        //store the object into the database
                                        mongoDB.insertRecord("artists", userData);
                                        res.send([data]);
                                    })
                                    .catch(err => {
                                        res.redirect('/error');
                                    })
                                })
                                .catch(err => {
                                    res.redirect('/error');
                                })
                            })
                            .catch(err => {
                                res.redirect('/error');
                            })
                    }
        })
    })

});

module.exports = router;
