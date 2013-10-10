'use strict';

angular.module('AngularDojo.Resources', ['ngResource'])
    .factory('loanerResource', ['$resource', function($resource) {
        return 'foo';
    }]);