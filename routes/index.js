var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    var EventSearch = require("facebook-events-by-location-core");

    var options = {};

    // lat and long will be added from request param
    options.lat = 40.710803;
    options.lng = -73.964040;
    // access token from facebook developer account. Please use your own token
    options.accessToken= "You applications token from facebook";

    var es = new EventSearch(options);

    es.search().then(function (events) {
        console.log(JSON.stringify(events));
        res.send(events)
    }).catch(function (error) {
        console.error(JSON.stringify(error));
    });

  //res.render('index', { title: 'Express' });
});

module.exports = router;
