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
    .when('/west', {
        templateUrl: 'partials/west.html',
        controller: 'MainController'
    })
    .when('/east', {
        templateUrl: 'partials/east.html',
        controller: 'MainController'
    })
    .when('/stairs', {
        templateUrl: 'partials/stairs.html',
        controller: 'MainController'
    })
    .when('/river_treasure', {
        templateUrl: 'partials/river_treasure.html',
        controller: 'MainController'
    })
    .when('/north', {
        templateUrl: 'partials/north.html',
        controller: 'MainController'
    })
    .when('/pawn', {
        templateUrl: 'partials/pawn.html',
        controller: 'MainController'
    })
    .when('/find', {
        templateUrl: 'partials/find.html',
        controller: 'MainController'
    })
    .when('/spaceship', {
        templateUrl: 'partials/spaceship.html',
        controller: 'MainController'
    })
    .when('/space', {
        templateUrl: 'partials/space.html',
        controller: 'MainController'
    })
    .when('/run', {
        templateUrl: 'partials/run.html',
        controller: 'MainController'
    })
    .when('/town', {
        templateUrl: 'partials/town.html',
        controller: 'MainController'
    })
    .when('/tell', {
        templateUrl: 'partials/tell.html',
        controller: 'MainController'
    })
    .when('/trust', {
        templateUrl: 'partials/trust.html',
        controller: 'MainController'
    })
    .when('/beer', {
        templateUrl: 'partials/beer.html',
        controller: 'MainController'
    })
    .when('/coffee', {
        templateUrl: 'partials/coffee.html',
        controller: 'MainController'
    })
    .when('/stay', {
        templateUrl: 'partials/stay.html',
        controller: 'MainController'
    })
    .when('/snack', {
        templateUrl: 'partials/snack.html',
        controller: 'MainController'
    })
})
