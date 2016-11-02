var express = require('express');
var router = express.Router();
var request = require("request");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/hello", function(req, res, next){
	var num = 100;

	request("http://pokeapi.co/api/v2/pokemon/" + num, function(err, response, body){
		if(!err && response.statusCode === 200){
			var poke = JSON.parse(body);
			var out = {};
			out.title = poke.name;
			res.render("index", out);
		}
	});
});

module.exports = router;
