angular.module('gif', ['ngRoute','ngAnimate', 'ngMaterial', 'ngAria'])

  .config(function($routeProvider, $locationProvider, $mdThemingProvider) {
    $locationProvider.html5Mode(true);
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
    .when('/bpt', {
        templateUrl: 'partials/bpt.html',
        controller: 'MainController'
    })
    .when('/puppy', {
        templateUrl: 'partials/puppy.html',
        controller: 'MainController'
    })
    .when('/tree', {
        templateUrl: 'partials/tree.html',
        controller: 'MainController'
    })
    .when('/hiking_buddy', {
        templateUrl: 'partials/keep.html',
        controller: 'MainController'
    })
    .when('/leave', {
        templateUrl: 'partials/leave.html',
        controller: 'MainController'
    })
    .when('/east', {
        templateUrl: 'partials/east.html',
        controller: 'MainController'
    })

})
