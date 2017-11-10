angular.module('app').service('GenreService',function($http){
    
        var http_url = "http://localhost:3000";

        var getAll = function() {
            return $http({
                method: 'GET',
                url: http_url + '/api/genres'
              });
        }
    
        return {
            getAll: getAll
        }
    })