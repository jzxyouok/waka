/**
 * Created by hwen on 15/12/21.
 */
(function(angular) {
    'use strict';

    angular.module('waka',['ui.router', 'ngResource', 'ngMaterial']);

    angular.module('waka').config(['$mdThemingProvider', materialConfig]);

    function materialConfig($mdThemingProvider){
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo')
            .accentPalette('pink');
    }
})(angular);