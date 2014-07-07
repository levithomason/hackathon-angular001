var app = angular.module('HackathonApp', ['firebase']);

app.controller('HackathonCtl', ['$scope', '$firebase', function($scope) {

    $scope.init = function() {
        // Firebase
        var my_chat_ref = new Firebase('https://glowing-fire-2233.firebaseio.com/my_chats');


        $scope.my_name = '';
        $scope.my_saved_name = 'World';
        $scope.my_chat = '';
        $scope.my_chats = [];

    };

    $scope.save_my_name = function() {
        $scope.my_saved_name = $scope.my_name;
    };

    $scope.save_my_chat = function() {
        $scope.my_chats.push($scope.my_chat);
        $scope.my_chat = '';
    };

}]);
