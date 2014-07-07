var app = angular.module('HackathonApp', ['firebase']);

app.controller('HackathonCtl', ['$scope', '$firebase', function($scope) {

    $scope.init = function() {
        // Firebase
        var my_chat_ref = new Firebase('https://glowing-fire-2233.firebaseio.com/');

        $scope.my_name = null;
        $scope.my_saved_name = 'World';
    };

    $scope.save_my_name = function() {
        $scope.my_saved_name = $scope.my_name;
    };

}]);
