'use strict';

angular.module('AngularDojo.Controllers', [])
    .controller('LunchController', ['$scope', function($scope) {
        $scope.hello = 'hello';
        $scope.loaners = {};
        
        $scope.addLoaner = function () {
            if ($scope.loanerName in $scope.loaners) {
                $scope.loaners[$scope.loanerName].vouchers++;
            } else {
                $scope.loaners[$scope.loanerName] = {
                    name: $scope.loanerName,
                    vouchers: 1
                };
            }
        };
    }]);