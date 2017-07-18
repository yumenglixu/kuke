'use strict';
/* eslint-disable */
angular.module('kukeApp').directive('orderPanle', ['OrderApiFactory', '$timeout', function (OrderApiFactory, $timeout) {
    return {
        restrict: 'EA',
        templateUrl: 'client/orderPanle/order.html',
        link: function (scope, element, attrs) {
        	scope.tabIndex = 0;
        	scope.orders = [];
            scope.tabs = [{
            	type: 'all',
            	label: '全部订单'
            }, {
            	type: 'daijiedan',
            	label: '待接单'
            }, {
            	type: 'daiyouhua',
            	label: '待优化'
            }, {
            	type: 'jingxing',
            	label: '进行中'
            }, {
            	type: 'done',
            	label: '已完成'
            }, {
            	type: 'fail',
            	label: '失败'
            }];

            // 切换tab
            scope.changeTab = function (type, index) {
                console.log(type);
                if (scope.tabIndex === index) {
                	return;
                }
                scope.tabIndex = index;
            }

            // 获取表单
            scope.orderList = function() {
                var data = {};
                OrderApiFactory.getOrderList(data, true, function(res){
                	console.log(res);
                    if (res.errno === 0) {
	                    scope.orders = res.data.list;
	                }
	                else {
	                	scope.orders = [];
	                }
                    scope.$apply();
                });
            }
            scope.orderList();
            
        }
    }
}]);
