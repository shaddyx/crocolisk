/**
 * Created by shaddy on 07.06.16.
 */
app.service("WordsService", ["$http", function($http){
    this.words = [];
    var my = this;
    var error = false;
    $http({
        method:"GET",
        url:"res/word_rus.txt"
    }).then(function(data){
        if (data.data){
            data = data.data;
        }
        my.words = data.split("\n");
        for (var i = 0; i < my.words.length; i++){
            my.words[i] = my.words[i].trim();
        }
    },function(err){
        error = "Error [" + err.status + "] retreiving data:" + err.statusText;
    });

    this.getWords = function(){
        return my.words;
    };

    this.getRandom = function(){
        return my.words[Math.floor(Math.random() * my.words.length)];
    };

    this.getWord = function(){
        return my.getRandom();
    };

    this.getError = function(){
        return error;
    };
}]);