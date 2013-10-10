'use strict';

angular.module('AngularDojo.Controllers', [])
    .controller('LunchController', ['$scope', 'loanerResource' , function($scope, loanerResource) {
        $scope.loaners = loanerResource.getAll();
        
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

        // required for typeahed module becuase it does not work on associative arrays
        $scope.getLoanerNames = function() {
            var names = [];
            for (var loanerName in $scope.loaners){
                names.push(loanerName);
            }
            return names;
        };
    }]);