'use strict';

angular.module('AngularDojo.Resources', ['ngResource'])
    .factory('Loaner', ['$resource', function($resource) {
        return $resource('/api/loaners', {}, {
            getAll: { method: 'GET', isArray: true }
        });
    }]);