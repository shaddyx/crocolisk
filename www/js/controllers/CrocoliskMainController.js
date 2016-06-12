/**
 * Created by shaddy on 26.05.16.
 */

app.controller("CrocoliskMainController", ["$scope", "WordsService", "$interval", function($scope, WordsService, $interval){
    $scope.word = "";
    $scope.words = [];
    $interval(function(){
        //console.log("getting...");
        $scope.words = WordsService.getWords();
        $scope.error = WordsService.getError();
    }, 100);
    $scope.nextWord = function(){
        $scope.word = WordsService.getWord();
        console.log($scope.word);
    };
}]);