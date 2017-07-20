'use strict';
/* eslint-disable */
angular.module('kukeApp').directive('orderPanle', ['OrderApiFactory', '$timeout', function (OrderApiFactory, $timeout) {
    return {
        restrict: 'EA',
        templateUrl: 'client/orderPanle/order.html',
        link: function (scope, element, attrs) {
        	scope.tabIndex = -10;
        	scope.orders = [];
            // scope.tabs = [{
            // 	type: '-10',
            // 	label: '全部订单'
            // }, {
            // 	type: '1',
            // 	label: '待接单'
            // }, {
            // 	type: '2',
            // 	label: '待优化'
            // }, {
            // 	type: '3',
            // 	label: '进行中'
            // }, {
            // 	type: '4',
            // 	label: '已完成'
            // }, {
            // 	type: '5',
            // 	label: '失败'
            // }];
            scope.tabs = [{
                type: '-10',
                label: '全部订单'
            }, {
                type: '5',
                label: '交易成功'
            }, {
                type: '6',
                label: '交易关闭'
            },  {
                type: '7',
                label: '交易失败'
            }];


            // scope.tabs = [{
            //     type: '-10',
            //     label: '全部订单'
            // }, {
            //     type: '1',
            //     label: '付款提交后台'
            // }, {
            //     type: '2',
            //     label: '渠道接单'
            // }, {
            //     type: '3',
            //     label: '开始执行'
            // }, {
            //     type: '4',
            //     label: '成功上传IDFA'
            // }, {
            //     type: '5',
            //     label: '交易成功'
            // }, {
            //     type: '6',
            //     label: '交易关闭'
            // }, {
            //     type: '-1',
            //     label: '交易失败'
            // }, {
            //     type: '7',
            //     label: '交易失败'
            // }];


            // 切换tab
            scope.changeTab = function (type) {
                if (scope.tabIndex === type) {
                	return;
                }
                scope.tabIndex = type;
            }
        }
    }
}]);
