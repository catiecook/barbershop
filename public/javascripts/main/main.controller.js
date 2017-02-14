angular.module('gif')

.controller('MainController', function($scope, mainService, $timeout, $mdDialog, $window) {
    $scope.tempGif = "";
    $scope.allGifs = ["https://media3.giphy.com/media/HVr4gFHYIqeti/giphy-downsized.gif"];
    $scope.start = true;
    $scope.end = false;
    $scope.first = false;
    $scope.counter = 0;
    $scope.points = 0;
    let count = 0;

    $scope.conditionals = {};

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
        .then((response) => {
          let data = response.data;
          let num = Math.floor(Math.random() * 10)
          $scope.tempGif = data.data[num].images.downsized.url;
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
          $scope.points += 15;
          break;
        case "boulder":
          $scope.conditionals.boulder = true;
          $scope.points += 7;
          term = "rock climb";
          break;
        case "tree":
          $scope.conditionals.tree = true;
          $scope.points += 3;
          term = "hiking"
          break;
        case "east":
          $scope.conditionals.east = true;
          $scope.points += 5;
          term = "cave"
          break;
        case "west":
          $scope.conditionals.west = true;
          $scope.points += 5;
          term = "river";
          break;
        case "eat":
          $scope.conditionals.snack = true;
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
          term = "face palm";
          break;
        case "shiny":
          $scope.conditionals.shiny = true;
          $scope.points += 16;
          term = "treasure summer money speed cash bros";
          break;
        case "stay":
          $scope.conditionals.stay = true;
          $scope.points += 5;
          term = "space abducted alien"
          break;
        case "pawn":
          $scope.conditionals.pawn = true;
          $scope.points -= 5;
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
          $scope.points += 7;
          term = "city town"
          break;
        case "free":
          $scope.conditionals.free = true;
          $scope.points += 5;
          term = "face palm"
          break;
        case "spaceship":
          $scope.conditionals.spaceship = true;
          $scope.points += 9;
          break;
        case "stairs":
          $scope.conditionals.stairs = true;
          $scope.points += 14;
          break;
        case "find":
          $scope.conditionals.find = true;
          $scope.points += 22;
          term = "detective sherlock"
          break;
        case "trust":
          $scope.conditionals.trust = true;
          $scope.points += 9;
          term = "gold chain bling";
          break;
        case "run":
          $scope.conditionals.run = true;
          $scope.points -= 3;
          term = "run";
          break;
        case "town":
          $scope.conditionals.town = true;
          $scope.points += 3;
          term = "town village";
          break;
        case "tell":
          $scope.conditionals.tell = true;
          $scope.points += 7;
          term = "gossip";
          break;
        case "space":
          $scope.conditionals.space = true;
          term = "spaceship";
          break;
      }

      $scope.first = false;

      mainService.getGif(term)
      .then((response) => {
        let data = response.data;
        $('.input').val("")
        if (term === "treasure summer money speed cash bros"){
          $scope.tempGif = data.data[0].images.downsized.url;
          $scope.allGifs.push(data.data[0].images.downsized.url);
        }
        else {
            let num = Math.floor(Math.random() * 10)
            $scope.tempGif = data.data[num].images.downsized.url;
            $scope.allGifs.push(data.data[num].images.downsized.url);
        }
      });
    }

    $scope.reload = function() {
      $window.location.reload();
    }
});
