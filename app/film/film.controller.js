angular.module('app').controller('FilmCtrl', function(FilmService, GenreService, $scope){
        FilmService.getAllFilms()
            .then(function(result){
                $scope.films = result.data;
                
                console.log($scope.films);
            })
            .catch(function(){

            });
        
        GenreService.getAll()
            .then(function(result){
                $scope.totalGenere = result.data;
                $scope.totalGenere.unshift({nome:"Seleziona..", valore:""})
                console.log($scope.totalGenere);
            })
            .catch(function(){

            });

        var updateFoo = function(val){
            $scope.filtTitolo = val;
            console.log($scope.filtTitolo);
        };
        
        FilmService.registerObserverCallback(updateFoo);
        //$scope.filtTitolo = FilmService.getSearchVar();

        $scope.showDettaglio = function(id) { 
            $scope.getFilm(id);
        }
        $scope.showList = function(){
            $scope.showDettaglioFlag = false;
        }

        $scope.getFilm = function(id) {
            FilmService.getFilm(id)
            .then(function(result){
                $scope.dettaglioFilm = result.data;
                $scope.showDettaglioFlag = true;
                
                console.log($scope.films);
            })
            .catch(function(){
            });
        }

        $scope.showDettaglioFlag = false;
        $scope.dettaglioFilm = {};
        /*
        $scope.aggiungi = function(myForm) {
            if (myForm.$invalid)
                alert("NON VALIDO");
            else
                $scope.pizze = PizzaService.addPizza($scope.nome, $scope.prezzo, $scope.ingredienti);
        }
        $scope.filter = function() { 
            $scope.pizze = PizzaService.filterPizze($scope.filterField); 
        }
        $scope.ordina = function() { 
            $scope.pizze = PizzaService.ordinaPizze(); 
        }
            
        $scope.pizze = PizzaService.getPizze();
        $scope.totalIngredienti = PizzaService.getTotalIngredienti();
        $scope.totalIngredienti.unshift({nome:"Seleziona..", valore:""})
        console.log($scope.totalIngredienti);
        */
    });