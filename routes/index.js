var express = require('express');
var markdown = require( "markdown" ).markdown;
var fs = require('fs');
var router = express.Router();


var md = markdown.toHTML(fs.readFileSync('guides/index.md').toString('utf8'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', value: md });
});

module.exports = router;
