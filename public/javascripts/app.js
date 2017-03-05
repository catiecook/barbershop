angular.module('gif', ['ngRoute','ngAnimate', 'ngMaterial', 'ngAria'])

  .config(function($routeProvider, $locationProvider, $mdThemingProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {
        templateUrl: 'partials/index.html',
        controller: 'MainController'
    })
    .when('/', {
        templateUrl: 'partials/index.html',
        controller: 'MainController'
    })
})
