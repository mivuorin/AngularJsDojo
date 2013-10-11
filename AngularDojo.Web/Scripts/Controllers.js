'use strict';

angular.module('AngularDojo.Controllers', [])
    .controller('LoanerController', ['$scope', 'Loaner' , function($scope, Loaner) {
        $scope.loaners = Loaner.getAll();
        
        $scope.addLoaner = function () {
            var loaner = new Loaner({
                name: $scope.loanerName
            });
            loaner.$save(function (loaner) {
                // reload all loaners from server
                $scope.loaners = Loaner.getAll();
            });
            
        };
    }]);