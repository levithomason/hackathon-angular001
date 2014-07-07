var app = angular.module('HackathonApp', ['firebase']);

app.controller('HackathonCtl', ['$scope', '$firebase', function($scope, $firebase) {

    $scope.init = function() {
        // Firebase
        var my_chat_ref = new Firebase('https://glowing-fire-2233.firebaseio.com/my_chats');

        $scope.my_name = '';
        $scope.my_saved_name = 'Friend';
        $scope.my_chat = '';
        $scope.my_chats = $firebase(my_chat_ref);
        $scope.my_name_is_saved = false;
        $scope.my_channels = [
            'Lobby',
            'Among Friends',
            'Hover to delete'
        ];
        $scope.my_channel = $scope.my_channels[0];
        $scope.my_new_channel = '';
    };

    $scope.send_my_name = function() {
        $scope.my_saved_name = $scope.my_name;
        $scope.my_name_is_saved = true;
    };

    $scope.send_my_chat = function() {
        $scope.my_chats.$add({
            user: $scope.my_saved_name,
            channel: $scope.my_channel,
            message: $scope.my_chat
        });
        $scope.my_chat = '';
    };

    $scope.set_my_channel = function(channel) {
        $scope.my_channel = channel;
    };

    $scope.delete_my_channel = function(channel) {
        var index = $scope.my_channels.indexOf(channel);
        $scope.my_channels.splice(index);
    };

    $scope.create_new_channel = function() {
        $scope.my_channels.push($scope.my_new_channel);
        $scope.my_channel = $scope.my_new_channel;
        $scope.my_new_channel = '';
    };

}]);
