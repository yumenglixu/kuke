'use strict';

angular.module('kukeApp').controller('ProtocolCtrl', ['$scope', '$http', function ($scope, $http) {
	$scope.proIndex = 0;
	$scope.proTabs = ['酷传平台合作协议', '酷传保证金规则', '酷传售后规则', '酷传退店规则', '酷传订单执行规则', '酷传规则更新通知'];
	// 切换tab
    $scope.changeTab = function (index) {
        if ($scope.proIndex === index) {
        	return;
        }
        $scope.proIndex = index;
    }
}]);