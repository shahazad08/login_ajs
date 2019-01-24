var app = angular.module("chatApp", ['ui.router']);
// UI-router is a routing framework for AngularJS. It's a flexible alternative to 
//ngRoute as it supports Nested & Multiple Named views. Whereas ngRoute functions based 
//on routes URL, ui-router is based on states in application.

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider,$urlRouterProvider){

    $stateProvider.state('login',{       // if it is in a state of a login
        url: '/login',
        templateUrl: 'templates/login.html',    // Go to the login url
         controller: 'userControl'
    })
    .state('register',{                 // if it is in a state of a register
        url: '/register',               
        templateUrl: 'templates/register.html',  // Go to the register url
        controller: 'userControl'
    })
    .state('home',{                         // Home page
        url: '/home',
        templateUrl: 'templates/home.html',
     //   controller: 'userControl'         
    });


    $urlRouterProvider.otherwise('login');
}]);