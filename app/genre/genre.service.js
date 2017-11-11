angular.module('app').service('GenreService',function($http){

        var getAll = function() {
            return $http({
                method: 'GET',
                url: '/api/genres'
              });
        }
    
        return {
            getAll: getAll
        }
    })