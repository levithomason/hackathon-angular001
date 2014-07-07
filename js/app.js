var app = angular.module('HackathonApp', []);

app.controller('HackathonCtl', ['$scope', function($scope) {

    $scope.init = function() {
        $scope.my_name = null;
        $scope.my_saved_name = 'World';
    };

    $scope.save_my_name = function() {
        $scope.my_saved_name = $scope.my_name;
    };

}]);
