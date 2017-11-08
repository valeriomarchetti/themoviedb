module.exports = (function() {
    var GenreModel = require('./genre.model.js');
    
    var getAll = function(req, res) {
        GenreModel.find()
            .exec()
            .then(function(genre){
                res.status(200).json(genre);
            })
            .catch(function(err){
                res.status(500).send(err);
            });
    }

    var getOne = function(req, res) {
        GenreModel.findById(req.params.id)
            .exec()
            .then(function(genre){
                res.status(200).json(genre);
            })
            .catch(function(err){
                res.status(500).send(err);
            });
    }

    var getByQuery = function(req, res) {
        
        GenreModel.find({title:req.query.title})
            .exec()
            .then(function(genre){
                res.status(200).json(genre);
            })
            .catch(function(err){
                res.status(500).send(err);
            });
    }

    var insertOne = function(req, res) {
        var genreReq = req.body;
        
        var New = new GenreModel(genreReq);
        New.save(function(err){
                res.status(500).json(err);
            })
            .then(function (obj) {
                console.log('Genre salvato nel db');
                res.status(200).json(obj);
                
            })
            .catch(function (err) {
                throw err;
                res.status(500).json(err);
        });
    }

    

    return {
        getAll:getAll,
        getByQuery:getByQuery,
        getOne:getOne,
        insertOne:insertOne
    }
})();