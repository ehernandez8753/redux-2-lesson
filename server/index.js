const express = require('express');
const posts = require('./posts');
const products = require('./products');

const app = express();

app.get('/api/posts', (req, res) => {
  res.send(posts);
  // res.status(500).send('erro');
});

app.get('/api/products', (req, res) => {
  res.send(products);
});

app.listen(3005, () => console.log('Listening on port 3005'));
