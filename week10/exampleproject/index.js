/* Set up modules and Express objects. */
const path = require('path');
const express = require('express');
const app = express();
const router = express.Router();

/* Create some data to pull from */
const posts = [
  {
  	title: 'title', author: 'name', body: 'hello world', 
  	comments: [{author: 'pranav', body: 'nice job!'}, {author: 'shashank', body: 'eh.'}]
  },
  {
  	title: 'post', author: 'name2', body: 'some text',
  	comments: [{author: 'william', body: 'cool story bro.'}]
  }
];

/* Set up paths for views */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

/* add router object, different way to add routes */
app.use(router);

/* Specify an API route to retrieve post data */
router.get('/posts', function(req, res, next) {
	res.json(posts);
});

/* specify '/' route and function, usually in a different file */
/* add an optional parameter and read from it */
router.get('/:name?', function(req, res, next) {
	res.render('index', {name: req.params.name});
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
