const path = require('path');
const express = require('express');
const app = express();
const router = express.Router();

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

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

router.get('/posts', function(req, res, next) {
  res.json(posts);
});

router.get('/:name?', function(req, res, next) {
  res.render('index', {name: req.params.name});
})

app.use(router);

app.listen(3001, () => console.log('Listening on port 3000!'));
