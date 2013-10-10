'use strict';

angular.module('AngularDojo.Resources', ['ngResource'])
    .factory('loanerResource', ['$resource', function($resource) {
        return $resource('/api/loaners', {}, {
            getAll: {method: 'GET', isArray: true}
        });
    }]);