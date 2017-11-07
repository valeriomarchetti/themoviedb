var express = require('express');
var filmController = require('./film.controller.js');
var films = express.Router();

films.get('/', filmController.getAllMovies);

module.exports = films;

/*
films.get('/:id', (req, res) => {
    res.send('film con id:' + req.params.id);
})
*/