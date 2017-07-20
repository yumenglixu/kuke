'use strict';
/* eslint-disable */
angular.module('kukeApp').directive('orderInfoPanle', ['OrderApiFactory', '$timeout', function (OrderApiFactory, $timeout) {
    return {
        restrict: 'EA',
        templateUrl: 'client/orderInfoPanle/orderInfoPanle.html',
        link: function (scope, element, attrs) {
        	scope.orderIndex = 0;
            scope.info = {};
            scope.status = -1;
            console.log(scope);
            // 监听信息
        	scope.$watch('orderDetailInfo', function (newValue, oldValue) {
                if (newValue) {
                    scope.info = newValue;
                }
            });

            scope.$watch('userstatus', function (newValue, oldValue) {
                scope.status = newValue;
            });

            // 切换tab
            scope.changeTab = function (index) {
                if (scope.orderIndex === index) {
                	return;
                }
                scope.orderIndex = index;
            }
        }
    }
}]);
