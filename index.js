var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello Class');
})

app.get('/alunos', function (req, res) {
  res.send('Hello Alunos');
})

app.post('/alunos', function (req, res) {
  res.send('Post Alunos');
})

app.put('/alunos', function (req, res) {
  res.send('Put Alunos');
})

app.delete('/alunos', function (req, res) {
  res.send('Delete Alunos');
})

app.listen(3000);
