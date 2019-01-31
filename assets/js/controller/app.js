this.usersession={username:'',id:'',password:''};
var app=angular.module('app',[])
app.controller('LoginController',function($http,$window){
    this.user={username:'',password:''};
    this.error='';
    this.login=function() {
        console.log(this.user.username + '|' + this.user.password);
        $http.post("/tay", {username: this.user.username, password: this.user.username})
            .then(function (response) {
                if (response.data) {

                    $window.location.href = '/Magasin.html';
                   // sessionStorage.setItem("Tix","value");
                } else {
                    this.error = "non";
                }
            });
    }
});


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


