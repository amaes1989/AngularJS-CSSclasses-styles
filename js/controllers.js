var cssApp = angular.module('cssApp', []);

cssApp.controller('DeathrayMenuController', ['$scope', function($scope) {
    $scope.isDisabled = 'false';
    $scope.stun = function() {
        if ($scope.isDisabled == 'false') {
            $scope.isDisabled = 'true';
        } else {
            $scope.isDisabled = 'false';
        }
    };
}])