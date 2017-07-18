'use strict';

angular.module('kukeApp').directive('kk', function () {
    return {
        restrict: 'EA',
        templateUrl: 'client/kk/kk.html',
        link: function (scope, element, attrs) {
            console.log('1');
        }
    }
});
