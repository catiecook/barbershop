angular.module('gif')

.controller('MainController', function($scope, mainService) {
    $scope.gif = [];
    $scope.start = true;
    $scope.end = false;
    $scope.first = false;

    $scope.start = function(cont) {
      answer = cont.toLowerCase()
      if(answer === "yes") {
        $scope.start = false;
        $scope.first = true;
      }
      if(answer === "no") {
        $scope.end = true;
      }
    };

    $scope.getGif = (term) => {
      $scope.gif = mainService.getGif(term) //service returns gif
    }
});
