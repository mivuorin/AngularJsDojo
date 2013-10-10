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

        inject(function (_loanerResource_) {
            loanerResource = _loanerResource_;
        });
        
        //inject(function ($injector) {
        //    loanerResource = $injector.get('loanerResource');
        //});
    });

    it('should exist', function() {
        expect(loanerResource).toBeDefined();
    });

    it('should be foo', function() {
        expect(loanerResource).toEqual('foo');
    });
});