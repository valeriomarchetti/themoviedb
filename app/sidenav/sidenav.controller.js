angular.module('app').controller('SidenavCtrl', function(FilmService, $scope){
    $scope.searchNavbar = FilmService.getSearchVar();

    $scope.ChangeValue = function(){
        FilmService.setSearchVar($scope.searchNavbar);
    };

    // $scope.$watch("searchNavbar", function(newValue, oldValue){
    //     console.log(newValue);
    //     FilmService.setSearchVar(newValue);
    // }, true)

});