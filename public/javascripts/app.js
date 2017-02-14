angular.module('gif', ['ngRoute','ngAnimate', 'ngMaterial', 'ngAria'])

  .config(function($routeProvider, $locationProvider, $mdThemingProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/index.html',
        controller: 'MainController'
    })
    .when('/start', {
        templateUrl: 'partials/start.html',
        controller: 'MainController'
    })
    .when('/end', {
        templateUrl: 'partials/end.html',
        controller: 'MainController'
    })

    $locationProvider.html5Mode(true);
})
