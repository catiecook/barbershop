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
    $scope.template = "";
    $scope.inputs = {
      pbt: /\b(puppy|boulder|tree)\b/,
      boulder: /\b(west|eat)\b/,
      east: /\b(shiny|stairs)\b/,
      find: /\b(trust|pawn)\b/,
      pbt: /\b(puppy|boulder|tree)\b/,
      yn: /\b(yes|no)\b/,
      keep: /\b(west|free)\b/,
      north: /\b(pawn|find)\b/,
      pawn: /\b(beer|coffee)\b/,
      puppy: /\b(keep|leave)\b/,
      run: /\b(town|tell)\b/,
      shiny: /\b(north|stairs)\b/,
      spaceship: /\b(space|run)\b/,
      stairs: /\b(shiny|spaceship)\b/,
      tell: /\b(beer|coffee)\b/,
      town: /\b(beer|coffee)\b/,
      tree: /\b(east|west)\b/,
      trust: /\b(beer|coffee)\b/,
      west: /\b(east|stay)\b/,
    };


    $scope.start = function(cont) {
      let answer = cont.toLowerCase()
      if(answer === "yes") {
        $scope.start = false;
        $scope.first = true;
        $scope.template = "partials/start.html";
      }
      if(answer === "no") {
        $scope.start = false;
        $scope.end = true;
        $scope.template = "partials/end.html";
        mainService.getGif("whatever")
        .then((response) => {
          let data = response.data;
          let num = Math.floor(Math.random() * 10)
          $scope.tempGif = data.data[num].images.downsized.url;
        })
      }
    };

    $scope.getGif = (term, e) => {
      console.log(term);
      e.preventDefault();

      let wordOpts = [
        "puppy", "boulder", "tree", "east", "west", "eat", "keep", "leave", "shiny", "stay", "pawn", "coffee", "beer", "north", "free", "spaceship", "stairs", "run", "tell", "town", "trust", "space", "find"
      ];

      $scope.counter += 1;
      $scope.template = "partials/"+ term + ".html";
      $scope.counter += 1;
      term = term.toLowerCase();

          switch(term) {
            case "puppy":
              $scope.points += 15;
              break;
            case "boulder":
              $scope.points += 7;
              term = "rock climb";
              break;
            case "tree":
              $scope.points += 3;
              term = "hiking"
              break;
            case "east":
              $scope.points += 5;
              term = "cave"
              break;
            case "west":
              $scope.points += 5;
              term = "river";
              break;
            case "eat":
              term = "snack";
              $scope.points += 5;
              break;
            case "keep":
              $scope.points += 10;
              term = "puppy woods"
              break;
            case "leave":
              term = "face palm";
              break;
            case "shiny":
              $scope.points += 16;
              term = "treasure summer money speed cash bros";
              break;
            case "stay":
              $scope.points += 5;
              term = "space abducted alien"
              break;
            case "pawn":
              $scope.points -= 5;
              term = "pawn shop"
              break;
            case "coffee":
              $scope.points += 5;
              break;
            case "beer":
              $scope.points += 5;
              break;
            case "north":
              $scope.points += 7;
              term = "city town"
              break;
            case "free":
              $scope.points += 5;
              term = "face palm"
              break;
            case "spaceship":
              $scope.points += 9;
              break;
            case "stairs":
              $scope.points += 14;
              break;
            case "find":
              $scope.points += 22;
              term = "detective sherlock"
              break;
            case "trust":
              $scope.points += 9;
              term = "gold chain bling";
              break;
            case "run":
              $scope.points -= 3;
              term = "run";
              break;
            case "town":
              $scope.points += 3;
              term = "town village";
              break;
            case "tell":
              $scope.points += 7;
              term = "gossip";
              break;
            case "space":
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
