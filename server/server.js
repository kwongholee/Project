const express = require('express');
const app = express();
const path = require('path');

app.listen(8080, function() {
  console.log('listening on 8080');
});

app.use(express.json());
var cors = require('cors');
app.use(cors());

app.use(express.static(path.join(__dirname, 'blog/build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'blog/build/index.html'));
});

app.get('/product', function(req,res) {
  res.json({name: 'black shoes'});
})

app.get('*', function(req, res) { //리액트 라우터 사용 시 사용
  res.sendFile(path.join(__dirname, 'blog/build/index.html'));
});