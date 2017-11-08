var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var FilmModel = require('./../films/film.model.js');

var genreSchema = new Schema({
    id: {
        type: Number,
        required: true
    }, 
    name: {
        type: String,
        required: true
    }
});

genreSchema.post('deleteOne', function(doc) {
    console.log('%s has been removed', doc._id);
});
genreSchema.post('delete', function(doc) {
    console.log('%s has been removed', doc._id);
});
genreSchema.post('find', function(data) {
    console.log(data);
});
genreSchema.post('remove', function(doc) {
    console.log('%s has been removed', doc.id);
    FilmModel.update({},{
            $pull:{genre_ids:doc.id}
        }).
        exec();
});
/*
genreSchema.pre('remove', function(doc) {
    console.log(doc);
});
*/
/*
genreSchema.post('remove', function (genre) {
    Film.update({},{
      $pull:{genre_ids:genre.id}
    }).
    exec();
  });
*/
var Genre = mongoose.model('genre', genreSchema);

module.exports = Genre;