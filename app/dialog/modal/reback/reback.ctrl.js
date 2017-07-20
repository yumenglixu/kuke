/**
 * @file 浮层弹框
 */

'use strict';

angular.module('kukeApp').controller('rebackItemCtrl', ['$scope', '$modalInstance', 'OrderApiFactory', 'id', function ($scope, $modalInstance, OrderApiFactory, id) {
        $scope.id = id;
        $scope.reason = '';

        // 确定提交
        $scope.rebackSubmit = function () {
        	OrderApiFactory.getOrderClose({
                orderId: $scope.id,
                closeReason: $scope.reason
            }, true, function (res) {
                $modalInstance.close(res);
            });
        };
}]);
