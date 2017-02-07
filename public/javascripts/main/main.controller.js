angular.module('gif')

.controller('MainController', function($scope, mainService, $timeout) {
    $scope.tempGif = "";
    $scope.allGifs = [];
    $scope.start = true;
    $scope.end = false;
    $scope.first = false;
    $scope.counter = 0;
    $scope.points = 0;

    $scope.conditionals = {
      puppy: false,
      boulder: false,
      tree: false,
      river: false,
      west: false,
      keep: false,
      leave: false,
      shiny: false,
      free: false,
      craigslist: false,
      stay: false,
      eat: false
    };

    $scope.start = function(cont) {
      let answer = cont.toLowerCase()
      if(answer === "yes") {
        $scope.start = false;
        $scope.first = true;
      }
      if(answer === "no") {
        $scope.start = false;
        $scope.end = true;
      }
    };

    $scope.getGif = (term) => {
      $scope.conditionals = {};

      $scope.counter += 1;

      term = term.toLowerCase();

      switch(term) {
        case "puppy":
          $scope.conditionals.puppy = true;
          break;
        case "boulder":
          $scope.conditionals.boulder = true;
          term = "rock climb";
          break;
        case "tree":
          $scope.conditionals.tree = true;
          term = "hiking"
          break;
        case "east":
          $scope.conditionals.river = true;
          term = "river"
          break;
        case "west":
          $scope.conditionals.west = true;
          term = "cave";

          break;
        case "eat":
          $scope.conditionals.eat = true;
          term = "snack";
          $scope.points += 5;
          break;
        case "keep":
          $scope.conditionals.keep = true;
          // $scope.conditionals.puppy = false;
          $scope.points += 10;
          term = "fluffy puppy"
          break;
        case "leave":
          $scope.conditionals.leave = true;
          $scope.end = true;
          term = "face palm";
          break;
        case "shiny":
          $scope.conditionals.shiny = true;
          $scope.points += 30;
          break;
        case "stay":
          $scope.conditionals.stay = true;
          $scope.points += 5;
          term = "sunbathe"
          break;
      }


      $scope.first = false;

      mainService.getGif(term)
      .then((data) => {
        $scope.tempGif = data.data[0].images.downsized.url;
        $scope.$apply();
        $scope.allGifs.push({
          1: data.data[0].images.downsized.url
        });

      });
    }
});
