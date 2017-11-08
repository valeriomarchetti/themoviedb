var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var filmSchema = new Schema({
    vote_count: {
        type: Number,
        default: 0
    },
    video: {
        type: Boolean,
        default: false
    },
    vote_average: {
        type: Number,
        default: 0
    },
    title: {
        type: String,
        required: true
    },
    popularity: {
        type: Number,
        default: 0
    },
    poster_path: {
        type: String
    },
    original_language: {
        type: String,
        defauly: "en"
    },
    original_title: {
        type: String,
        defauly: "en"
    },
    genre_ids: {
        type: [Number],
        required: true
    },
    backdrop_path: {
        type: String
    },
    adult: {
        type: Boolean,
        default: false
    },
    overview: {
        type: String,
        required: true
    },
    release_date: {
        type: Date,
        required: true
    }
}, { toJSON: { virtuals: true } })

filmSchema.virtual('genre_ids2', {
    ref: 'genre', // The model to use
    localField: 'genre_ids', // Find people where `localField`
    foreignField: 'id', // is equal to `foreignField`
    // If `justOne` is true, 'members' will be a single doc as opposed to
    // an array. `justOne` is false by default.
    justOne: false
  });
  
//var GenreModel = require('./../genre/genre.model.js');
var Film = mongoose.model('film', filmSchema);
module.exports = Film;