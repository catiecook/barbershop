angular.module('gif')

.controller('MainController', function($scope, mainService, $timeout, $mdDialog) {
    $scope.tempGif = "";
    $scope.allGifs = ["https://media3.giphy.com/media/HVr4gFHYIqeti/giphy-downsized.gif"];
    $scope.start = true;
    $scope.end = false;
    $scope.first = false;
    $scope.counter = 0;
    $scope.points = 0;
    let count = 0;
    $scope.conditionals = {
      puppy: false,
      boulder: false,
      tree: false,
      river: false,
      west: false,
      keep: false,
      leave: false,
      shiny: false,
      north: false,
      stay: false,
      eat: false,
      pawn: false,
      keep: false,
      coffee: false,
      end: false,
      spaceship: false,
      find: false,
      find: false
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
        mainService.getGif("whatever")
        .then((data) => {
          let num = Math.floor(Math.random() * 10)
          $scope.tempGif = data.data[num].images.downsized.url;
          $scope.$apply();
        })
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
          $scope.points += 10;
          term = "puppy woods"
          break;
        case "leave":
          $scope.conditionals.leave = true;
          $scope.end = true;
          term = "face palm";
          break;
        case "shiny":
          $scope.conditionals.shiny = true;
          $scope.points += 30;
          term = "treasure summer money speed cash bros";
          break;
        case "stay":
          $scope.conditionals.stay = true;
          $scope.points += 5;
          term = "space abducted alien"
          break;
        case "pawn":
          $scope.conditionals.pawn = true;
          $scope.points += 5;
          term = "pawn shop"
          break;
        case "coffee":
          $scope.conditionals.coffee = true;
          $scope.points += 5;
          break;
        case "beer":
          $scope.conditionals.beer = true;
          $scope.points += 5;
          break;
        case "north":
          $scope.conditionals.north = true;
          $scope.points += 5;
          term = "city"
          break;
        case "free":
          $scope.conditionals.leave = true;
          $scope.points += 5;
          term = "puppy run free"
          break;
        case "spaceship":
          $scope.conditionals.spaceship = true;
          $scope.points += 30;
          break;
        case "stairs":
          $scope.conditionals.stairs = true;
          $scope.points += 10;
          break;
        case "find":
          $scope.conditionals.find = true;
          $scope.points += 12;
          term = "detective sherlock"
          break;
      }

      $scope.first = false;

      mainService.getGif(term)
      .then((data) => {
        $('.input').val("")
        if (term === "treasure summer money speed cash bros"){
          $scope.tempGif = data.data[0].images.downsized.url;
          $scope.$apply();
          $scope.allGifs.push(data.data[0].images.downsized.url);
        }
        else {
            let num = Math.floor(Math.random() * 10)
            $scope.tempGif = data.data[num].images.downsized.url;
            $scope.$apply();
            $scope.allGifs.push(data.data[num].images.downsized.url);
        }
      });
    }
});
