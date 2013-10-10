'use strict';

angular.module('AngularDojo.Controllers', [])
    .controller('LunchController', ['$scope', 'Loaner' , function($scope, Loaner) {
        $scope.loaners = Loaner.getAll();
        
        $scope.addLoaner = function () {
            var loaner = new Loaner({
                name: $scope.loanerName
            });
            loaner.$save();
            $scope.loaners = Loaner.getAll();
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