module.exports = (function() {
    var FilmModel = require('./film.model.js');
    
    var getAllMovies = function(req, res) {
        FilmModel.find()
            .exec()
            .then(function(films){
                res.status(200).json(films);
            })
            .catch(function(err){
                res.status(500).send(err);
            });
    }

    return {
        getAllMovies:getAllMovies
    }
})();