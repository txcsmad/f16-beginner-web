const path = require('path');
const express = require('express');
const app = express();

const posts = [
  {title: 'title', author: 'name', body: 'hello world'},
  {title: 'post', author: 'name2', body: 'some text'},
];

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/posts', (req, res) => res.json(posts));
app.get('/param/:id', (req, res) => res.render('param', {id: req.params.id}));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
