var express = require('express');
var bodyParser = require('body-parser');
var employerService = require('./service/employers');
var vacancyService = require('./service/vacancies');
var app = express();

const PORT = 4321;

app.use(bodyParser.json());

app.get('/employers', function(req, res) {
  res.send(employerService.get());
});

app.get('/employers/:id', function(req, res) {
  var result = employerService.getById(+req.params.id);
  if (result) {
    res.send(result);
  } else {
    res.status(404).send({error: `Employer with id=${+req.params.id} not found.`});
  }
});

app.post('/employers', function(req, res) {
  res.send(employerService.add(req.body));
});

app.delete('/employers/:id', function(req, res) {
  res.send(employerService.del(req.params.id));
});

app.put('/employers/:id', function(req, res) {
  res.send(employerService.update(req.params.id, req.body));
});

app.get('/employers/:id/vacancies', function(req, res) {
  res.send(vacancyService.getByEmployerId(+req.params.id));
});

app.get('/vacancies', function(req, res) {
  res.send(vacancyService.get());
});

app.get('/vacancies/:id', function(req, res) {
  var result = vacancyService.getById(+req.params.id);
  if (result) {
    res.send(result);
  } else {
    res.status(404).send({error: `Vacancy with id=${+req.params.id} not found.`});
  }
});

app.post('/vacancies', function(req, res) {
  res.send(vacancyService.add(req.body));
});

app.delete('/vacancies/:id', function(req, res) {
  res.send(vacancyService.del(req.params.id));
});

app.put('/vacancies/:id', function(req, res) {
  res.send(vacancyService.update(req.params.id, req.body));
});

app.listen(PORT, function() {
  console.log(`Application started on port ${PORT}`);
});