var express = require('express');
var router = express.Router();
var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
    const origin_url = req.query.case_url;
    const start_time = (new Date()).getTime() / 1000;
    request.post('https://cl.dakshindia.org/predict', (err, resp, body) => {
        if (err) {
            return console.error('Something\'s wrong with cl.dakshindia.org');
        }
        else {
            let locals = JSON.parse(body);
            locals['runtime'] = ((new Date()).getTime() / 1000 - start_time).toPrecision(3);
            locals['origin_url'] = origin_url;
            res.render('index', locals);
        }
    }).form({'case_url': origin_url});
});

module.exports = router;
