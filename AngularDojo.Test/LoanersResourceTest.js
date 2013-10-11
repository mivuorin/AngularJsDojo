/// <reference path="scripts/jasmine.js" />
/// <reference path="../angulardojo.web/scripts/lib/angular-1.2.0-rc.2/angular.js" />
/// <reference path="../angulardojo.web/scripts/lib/angular-1.2.0-rc.2/angular-resource.js" />
/// <reference path="../angulardojo.web/scripts/resources.js" />
/// <reference path="scripts/angular-mocks.js" />

'use strict';

describe('loaner resource test', function() {
    var loanerResource;
    var $httpBackend;
    
    beforeEach(function () {
        module('ngResource');
        module('AngularDojo.Resources');
        
        inject(function (_$httpBackend_, _Loaner_) {
            $httpBackend = _$httpBackend_;
            loanerResource = _Loaner_;
        });
        
        // Alternate way of injectin resource
        //inject(function ($injector) {
        //    loanerResource = $injector.get('loanerResource');
        //});
    });

    it('should exist', function() {
        expect(loanerResource).toBeDefined();
    });

    describe('getAll', function() {
        var loaners;
        beforeEach(function () {
            $httpBackend.expectGET('/api/loaners')
                .respond([{name: 'test1', vouchers: 1}, {name: 'test2', vouchers: 1}]);

            loaners = loanerResource.getAll();

            $httpBackend.flush();
        });

        it('should get all loaners', function() {
            expect(loaners.length).toBe(2);
        });
    });
});