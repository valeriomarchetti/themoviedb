var express = require('express');
var genreController = require('./genre.controller.js');
var genre = express.Router();

genre.get('/', genreController.getAll);
genre.get('/:id([0-9a-f]{24})', genreController.getOne);
genre.get('/query', genreController.getByQuery);
genre.post('/', genreController.insertOne);

module.exports = genre;

/*
films.get('/:id', (req, res) => {
    res.send('film con id:' + req.params.id);
})
*/