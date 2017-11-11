angular.module('app').service('FilmService',function($http){
    
        var getAllFilms = function() {
            return $http({
                method: 'GET',
                url: '/api/films'
              });
        }
        var getFilm = function(id) {
            return $http({
                method: 'GET',
                url: '/api/films/' + id
              });
        }
        /*
        var delPizza = function($index) {
            console.log($index);
            pizze.splice($index, 1);
            return pizze;
        }    
    
        var addPizza = function(nome, prezzo, ingredienti) {
            pizze.push({"nome": nome, "prezzo": prezzo, "ingredienti": ingredienti });
            return pizze;
        }
    
        var filterPizze = function(filterField){
            return pizze.filter(function(pizza){
                return (pizza.nome.indexOf(filterField) > '-1');
            });
        }
        var sortOrder = 1;
        var ordinaPizze = function() {
            sortOrder *= -1;
            pizze = pizze.sort(function(a,b){
    
                const genreA = a.nome.toUpperCase();
                const genreB = b.nome.toUpperCase();
                
                let comparison = 0;
                if (genreA > genreB) {
                    comparison = -1 * sortOrder;
                } else if (genreA < genreB) {
                    comparison = 1 * sortOrder;
                }
                return comparison;
            } );
            return pizze;
        }
    
        var getTotalIngredienti2 = function() {
            var totalIngredienti = [];
            pizze.forEach(function(el){
                el.ingredienti.forEach(function(ing){
                    if ( totalIngredienti.indexOf(ing) == -1)
                        totalIngredienti.push(ing);
                })
            })
        }
    
        var getTotalIngredienti = function() {
            var totalIngredienti = [];
            pizze.forEach(function(el){
                el.ingredienti.forEach(function(ing){
                    var found = totalIngredienti.some(function(el2){
                       return el2.valore == ing;
                    });
    
                    if (!found)
                        totalIngredienti.push({nome: ing.charAt(0).toUpperCase() + ing.substr(1).toLowerCase(), valore: ing});
                })
            })
            return totalIngredienti;
        }
        */
        
    
        return {
            getAllFilms: getAllFilms,
            getFilm: getFilm
            /*
            delPizza: delPizza,
            addPizza: addPizza,
            filterPizze: filterPizze,
            ordinaPizze: ordinaPizze,
            getTotalIngredienti: getTotalIngredienti
            */
        }
    })