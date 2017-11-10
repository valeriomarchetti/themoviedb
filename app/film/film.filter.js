angular.module('app').filter('filterFilmByGenre', function () {
    
    return function (input, genere) {
        if (genere > 0)
        {
            films = input.filter(function(film){
                return (film.genre_ids.indexOf(genere) > '-1');
            });
        }
        else films = input;
        return films;
    };
    
}).filter('filterFilmByTitolo', function () {

    return function (input, filterField) {
        if (!filterField || !filterField.length)
            return input;
        
        return input.filter(function(film){
            return (film.title.toLowerCase().indexOf(filterField.toLowerCase()) > '-1');
        });
        
    }    
});
