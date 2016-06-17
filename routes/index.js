var express = require('express');
var markdown = require("markdown").markdown;
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {
        title: 'Node.JS the Right way',
        value: markdown.toHTML(fs.readFileSync('guides/index.md').toString('utf8'))
    });
});

router.get('/:uid/:file?', function (req, res) {
    var url = req.originalUrl;
    res.render('index', {value: markdown.toHTML(fs.readFileSync('guides/' + url + '.md').toString('utf8'))});
});

module.exports = router;
