/// <reference path="scripts/jasmine.js" />
/// <reference path="../angulardojo.web/scripts/lib/angular-1.2.0-rc.2/angular.js" />
/// <reference path="../angulardojo.web/scripts/lib/angular-1.2.0-rc.2/angular-resource.js" />
/// <reference path="../angulardojo.web/scripts/resources.js" />
/// <reference path="scripts/angular-mocks.js" />

'use strict';

describe('loaner resource test', function() {
    var loanerResource;

    beforeEach(function () {
        module('AngularDojo.Resources');

        inject(function (_Loaner_) {
            loanerResource = _Loaner_;
        });
        
        //inject(function ($injector) {
        //    loanerResource = $injector.get('loanerResource');
        //});
    });

    it('should exist', function() {
        expect(loanerResource).toBeDefined();
    });

    describe('getAll', function() {
        var loaners;
        beforeEach(function() {
            loaners = loanerResource.getAll();
        });

        it('should return array of loaners', function() {
            expect(loaners.length).toBe(3);
        });
    });
});