
var app=angular.module('app',["ngRoute"])
app.config(function($routeProvider){
    $routeProvider
        .when("/listeMagasin",{

            templateUrl:"include/ListeMagasin.html",
            controller:"ListeMagasin"
        })
        .when("/Magasin/:id",{
            templateUrl:"include/PageMagasin.html",

        })
});
app.controller('LoginController',function($http,$window,$rootScope,$scope){
    this.user={username:'',password:''};

    $scope.error="";
    this.login=function() {
        console.log(this.user.username + '|' + this.user.password);
        $http.post("https://calm-river-57012.herokuapp.com/rest/users/Login?email="+this.user.username+"&password="+this.user.password)
            .then(function (response) {
                if (response.data.valiny="1") {

                    $window.location.href = '#!/listeMagasin';
                   // sessionStorage.setItem("Tix","value");
                } else {
                    $scope.error = "non";
                }
            });
    }
});
app.controller('ListeMagasin',function($http,$window){


});
app.controller('PageMagasin',['$scope','$routeParams',function($scope,$routeParams){
    var idMagasin=$routeParams.id;
    this.transaction={produit:'',quantite:'',prix:'',date:'',type:''};
    console.log("ato");
    this.mouvement=function(){

        console.log(this.transaction.produit);
    }
}]);

/*
var magasinApp=angular.module('Magasinapp',["ngRoute"])
magasinApp.config(function($routeProvider){
   $routeProvider
       .when("/",{

        templateUrl:"include/ListeMagasin.html",
        controller:"ListeMagasin"
       })
       .when("/Magasin/:id",{
           templateUrl:"include/PageMagasin.html",

       })
});
magasinApp.controller('ListeMagasin',function($http,$window,$scope){
    $http({method:'GET',url:'/listeMagasin',dataType:"json",contentType:"application/json;charset=utf-8"})
        .then(function(response){

        });
    this.testfonction=function(){

    }
});
*/

