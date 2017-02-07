angular.module('gif')
  .service('mainService', function($http) {
    console.log("in service");
   function getGif(term) {
      let url = "https://api.giphy.com/v1/gifs/search?q=" + term + "&api_key=dc6zaTOxFJmzC";
      return $.get(url)
    }

    return {
      getGif: getGif
    };

  });
