'use strict'

var ns = ns || {};

ns.App = angular.module('portal',[
    'ngRoute',
    'ngResource'
]);

ns.App.config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider){

    $routeProvider
    .when('/list',      { controller: 'ListController',     templateUrl: 'view/ListView.html'   })
    .when('/detail',    { controller: 'DetailController',   templateUrl: 'view/DetailView.html'  })
    .otherwise({ redirectTo: '/list' });
    $locationProvider.html5Mode(true);
}]);


