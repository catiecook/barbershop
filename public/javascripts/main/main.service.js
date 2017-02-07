angular.module('gif')
  .service('mainService', function($http) {

    $scope.getGif = function(term) {
      let $url = "https://api.giphy.com/v1/gifs/search?q=" + term + "&api_key=dc6zaTOxFJmzC";

      $.get(url)
      .then((data) => {
        console.log(data);
      });
    }
  });
