module.exports = (function() {
    var FilmModel = require('./film.model.js');
    var GenreModel = require('./../genres/genre.model.js');
    
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

    var getOne = function(req, res) {
        // 1. asincrona?
        FilmModel.findById(req.params.id)
            .populate({ path: "genre_ids2", select: '-_id -name' })
            .exec()
            .then(function(film){
                
                var FieldToFilter = [];
                if (req.query.filter && (req.query.filter.length > 0))
                    FieldToFilter = req.query.filter;
                
                var FilmData = film.toObject();
                var FilmDataOut = new Object();
                
                if (req.query.replace === "true") {
                    GenreModel.find({},{"_id": 0})
                    .exec()
                    .then(function(genre){
                        //var GenreData = JSON.parse(JSON.stringify(genre));                        
                        var GenreData = genre;

                        Object.keys(FilmData).map(function(key, index) {
                            if ((FieldToFilter.length == 0) || (FieldToFilter.indexOf(key) !== -1))
                            {
                                FilmDataOut[key] = FilmData[key];
                                
                                var value = FilmData[key];
                                
                                if (key == "genre_ids")
                                {
                                    FilmData[key].forEach(function(elem, index) {
                                        for (var i = 0, len = GenreData.length; i < len; i++) {
                                            if (GenreData[i]["id"] == elem)
                                                FilmDataOut[key][index] = GenreData[i]["name"];
                                        }
                                    });
                                }
                            }
                        });
                        res.status(200).json(FilmDataOut);
                    })
                    .catch(function(err){
                        res.status(500).send(err);
                    });
                }
                else {
                    res.status(200).json(FilmData);
                }
            })
            .catch(function(err){
                res.status(500).send(err);
            }); 
    }

    var getByQuery = function(req, res) {
        
        FilmModel.find({title:req.query.title})
            .exec()
            .then(function(film){
                res.status(200).json(film);
            })
            .catch(function(err){
                res.status(500).send(err);
            });
    }

    var insertOne = function(req, res) {
        var filmReq = req.body;
        
        var NewFilm = new FilmModel(filmReq);
        NewFilm.save(function(err){
                res.status(500).json(err);
            })
            .then(function (obj) {
                console.log('Film salvato nel db');
                res.status(200).json(obj);
                
            })
            .catch(function (err) {
                throw err;
                res.status(500).json(err);
        });
    }   

    return {
        getAllMovies:getAllMovies,
        getByQuery:getByQuery,
        getOne:getOne,
        insertOne:insertOne
    }
})();