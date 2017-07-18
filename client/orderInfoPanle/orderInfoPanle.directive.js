'use strict';
/* eslint-disable */
angular.module('kukeApp').directive('orderInfoPanle', ['OrderApiFactory', '$timeout', function (OrderApiFactory, $timeout) {
    return {
        restrict: 'EA',
        templateUrl: 'client/orderInfoPanle/orderInfoPanle.html',
        link: function (scope, element, attrs) {
        	scope.orderIndex = 0;
        	scope.orders = [];
            scope.ranks = [];
            // scope.type = 'normal';  // 机刷 或者 正常访问
            scope.type = 'jishua';
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
            scope.changeTab = function (index) {
                if (scope.orderIndex === index) {
                	return;
                }
                scope.orderIndex = index;
            }

            // 获取表单
            scope.orderList = function() {
                var data = {};
                OrderApiFactory.getOrderInfo(data, true, function(res){
                    if (res.errno === 0) {
	                    scope.orders = res.data.list;
                        scope.ranks  = res.data.rank;
	                }
	                else {
	                	scope.orders = [];
                        scope.ranks  = [];
	                }
                    scope.$apply();
                });
            }
            scope.orderList();
            
        }
    }
}]);
