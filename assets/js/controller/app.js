
var app=angular.module('app',["ngRoute"])
app.config(function($routeProvider){
    $routeProvider
        .when("/Magasin",{
           templateUrl: "include/ListeMagasin.html",
            controller:"ListeMagasin"
        })
        .when("/Magasin/liste",{

        })
        .when("/Magasin/Page/:id",{
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
                if (response.data.valiny=="1") {
                    sessionStorage.setItem("UserId",response.data.id);
                    sessionStorage.setItem("UserName",response.data.nom);
                    sessionStorage.setItem("UserEmail",response.data.email);
                    $window.location.href = 'Accueil.html#!/Magasin';
                   // sessionStorage.setItem("Tix","value");
                } else {
                    $scope.error = "non";
                }
            });
    }
});
app.controller('ListeMagasin',function($http,$window,$scope){

    $http.get("https://calm-river-57012.herokuapp.com/rest/Magasin/all")
        .then(function(response){
            $scope.data=response;
        });


});
app.controller('CreateMouvement',function($http,$window,$scope,$routeParams){

    this.createMouvment=function(){
        console.log("caca");
        var produit=$scope.produit;
        var quantite=$scope.quantite;
        var prix=$scope.prix;
        var date=$scope.date;
        var type=$scope.type;
        var idMagasin=$routeParams.id;
        $http.post("https://calm-river-57012.herokuapp.com/rest/Mouvement/Create?Pu="+prix+"+&Date="+date+"&Type="+type+"&idMagasin="+idMagasin+"&idClient="+sessionStorage.getItem("UserId")+"&quantite="+quantite+"&nomProduit="+produit)
            .then(function(response){
                if(response.data.status=="success")
                {
                    alert("success");
                }
                else
                {
                    alert(response.data.status);
                }
            });
    }
});
app.controller('Equivalence',function($http,$window,$scope,$routeParams){
    this.getEquivalence=function(){

    }
});
app.controller('Historique',function($http,$window,$scope,$routeParams){

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

