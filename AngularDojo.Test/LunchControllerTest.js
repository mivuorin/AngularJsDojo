/// <reference path="scripts/jasmine.js" />
/// <reference path="../angulardojo.web/scripts/lib/angular-1.2.0-rc.2/angular.js" />
/// <reference path="scripts/angular-mocks.js" />
/// <reference path="../angulardojo.web/scripts/controllers.js" />

'use strict';
//jasmine.getEnv().currentRunner_.finishCallback = function () { };

describe('LunchController test', function() {
    var scope;
    var loanerResourceSpy = jasmine.createSpyObj('loanerResource', ['getAll']);
    
    beforeEach(function () {
        module('AngularDojo.Controllers');

        loanerResourceSpy.getAll.andReturn([]);

        inject(function($rootScope, $controller) {
            scope = {};
            $controller('LunchController', {
                $scope: scope,
                loanerResource: loanerResourceSpy
            });
        });
    });

    it('should get loaners from resource', function() {
        expect(loanerResourceSpy.getAll).toHaveBeenCalled();
    });

    describe('when adding loaner', function() {
        var loanerName = 'mikael';
        beforeEach(function () {
            scope.loanerName = loanerName;
            scope.addLoaner();
        });

        it('should add new loaner to loaner collection', function() {
            var loaner = scope.loaners[loanerName];
            expect(loaner.name).toEqual('mikael');
        });

        it('new loaners voucher count should be 1', function() {
            var loaner = scope.loaners[loanerName];
            expect(loaner.vouchers).toEqual(1);
        });

        it('should return loaner name in loanerNames', function () {
            var names = scope.getLoanerNames();
            expect(names).toEqual([loanerName]);
        });

        describe('and loaner already exists', function() {
            beforeEach(function() {
                scope.loanerName = 'mikael';
                scope.addLoaner();
            });

            it('should add voucher count of existing loaner', function() {
                var loaner = scope.loaners[loanerName];
                expect(loaner.vouchers).toBe(2);
            });
        });
    });
});