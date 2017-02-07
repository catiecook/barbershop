angular.module('gif')

.controller('MainController', function($scope, mainService) {
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
      east: false,
      west: false,
      keep: false,
      leave: false,
      shiny: false,
      snack: false,
      free: false,
      craigslist: false,
      stay: false
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
          break;
        case "east":
          $scope.conditionals.east = true;
          $scope.conditionals.boulder = false;
          break;
        case "west":
          $scope.conditionals.west = true;
          $scope.conditionals.boulder = false;
          $scope.conditionals.east = false;

          break;
        case "eat":
          $scope.conditionals.eat = true;
          $scope.conditionals.boulder = false;
          $scope.points += 5;
          break;
        case "keep":
          $scope.conditionals.keep = true;
          $scope.points += 10;
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
          $scope.conditionals.west = false;
          $scope.conditionals.east = false;
          $scope.points += 5;
          break;
      }

      $scope.first = false;

      mainService.getGif(term)
      .then((data) => {
        console.log(data.data[0]);
        // $scope.tempGif = data.data[0];
        // $scope.allGifs.push({
        //   1: data.data[0].embed_url
        // });
      });;
    }
});
