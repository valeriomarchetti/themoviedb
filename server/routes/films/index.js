var express = require('express');
var filmController = require('./film.controller.js');
var films = express.Router();

films.get('/', filmController.getAllMovies);
films.get('/:id([0-9a-f]{24})', filmController.getOne);
films.get('/query', filmController.getByQuery);
films.post('/', filmController.insertOne);

module.exports = films;

/*
films.get('/:id', (req, res) => {
    res.send('film con id:' + req.params.id);
})
*/