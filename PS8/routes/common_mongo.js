const mongoClient = require('mongodb').MongoClient;
const mongoURL = 'mongodb://localhost:27017';

let _db;

module.exports = {

    //function to connect to the db
    connectToServer: function( callback ) {
        mongoClient.connect(mongoURL, function(err, client) {
            //const collection = client.db("ArtistInformation").collection("artists");
            // perform actions on the collection object
            _db = client.db("ArtistInformation");
            return callback(err);
        });
    },

//db getter
    getDB: function() {
        return _db;
    },
    insertRecord: function(collection, obj){
        _db.collection(collection).insertOne(obj, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
        });
    },
};