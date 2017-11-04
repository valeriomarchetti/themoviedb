var express = require('express');

var tv = express.Router();

tv.get('/', (req, res) => {
    res.send('tv');
})

module.exports = tv;