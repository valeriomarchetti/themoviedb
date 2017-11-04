var express = require('express');

var films = express.Router();

films.get('/', (req, res) => {
    res.send('lista dei films');
})

films.get('/:id', (req, res) => {
    res.send('film con id:' + req.params.id);
})

module.exports = films;