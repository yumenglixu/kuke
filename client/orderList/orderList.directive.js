'use strict';
/* eslint-disable */
angular.module('kukeApp').directive('orderList', ['OrderApiFactory', '$timeout', function (OrderApiFactory, $timeout) {
    return {
        restrict: 'EA',
        templateUrl: 'client/orderList/orderList.html',
        link: function (scope, element, attrs) {
            scope.orderLists = [];
            scope.orderDetail = false; 
            scope.orderDetailInfo = {};
            scope.orderStatus = -10;
            // 分页
            scope.orderCurrentPage = 1;
            scope.ordertotal = 0;
            scope.orderPaginationConf = {};


            scope.$watch('activeSer', function (newValue, oldValue) {
                if (newValue) {
                    // 如果是orderDetial
                    if (newValue.indexOf('/order/info') >= 0) {
                        var id = newValue.split('/order/info/')[1];
                        scope.getOrderDetail(id);
                        scope.orderDetail = true;
                    }
                    else if (newValue !== '/order') {
                        scope.getOrderList(scope.orderCurrentPage);
                    }
                }
            });

            scope.$watch('tabIndex', function (newValue, oldValue) {
                if (newValue) {
                    scope.getOrderList(scope.orderCurrentPage, newValue);
                }
            });

             // 兼容list 改变的时候，触发分页
            scope.$watch('orderLists', function(newValue) {
                if (newValue && newValue.length) {
                    scope.orderPaginationConf = {
                        currentPage: scope.orderCurrentPage,
                        totalItems: scope.ordertotal,
                        itemsPerPage: 10,
                        numberOfPages:  Math.ceil(scope.ordertotal / 10),
                        onChange: function () {
                            // 切换的时候
                            if (scope.orderPaginationConf.currentPage && scope.orderCurrentPage != scope.orderPaginationConf.currentPage) {
                                scope.getOrderList(scope.orderPaginationConf.currentPage, scope.orderStatus);
                            }
                        }
                    };
                };
            }, true);

            // 获取基础订单详情
            scope.getOrderDetail =  function (id) { 
                var data = {
                    orderId: id
                }
                OrderApiFactory.getOrderInfo(data, true, function (res) {
                    if (res.status === 200) {
                        scope.orderLists.push(res.data);
                        scope.orderDetailInfo = res.data;
                    }
                    else {
                        scope.orderLists = [];
                    }
                    scope.$apply();
                });
            };

        	// 获取基础订单
            scope.getOrderList =  function (page, status) { 
                var data = {
                    orderStatus: status || -10,
                    page: page
                }
                scope.orderStatus = data.orderStatus;

                OrderApiFactory.getOrderList(data, true, function (res) {
                    if (res.status === 200) {
                        scope.orderLists = res.data.list;
                        scope.ordertotal = res.data.total;
                        scope.orderCurrentPage = res.data.pageCurrent;   
                    }
                    else {
                        scope.orderLists = [];
                        scope.ordertotal = 0;
                        scope.orderCurrentPage = 1;
                    }
                    scope.$apply();
                });
            };

            /**
             * 修改订单状态
             *
             * @param  {number} index  [当前数组索引]
             * @param  {number} id     [订单id]
             * @param  {string} status [订单状态]
             */
            scope.orderStatusUpdate = function (index, id, status) {
                if (+status === 4) {
                    // 上传IDA
                    window.uploadFile(id).then(function (res) {
                        if (res.status !== 200) {
                            toast(res.msg || '上传失败', 'error');
                        }
                        else {
                            toast('上传成功');
                            scope.orderLists[index].orderInfo.business_status = 4;
                        }
                    });
                }
                else if (+status === 6) {
                    window.reBack(id).then(function (res) {
                        if (res.status !== 200) {
                            toast('提交失败', 'error');
                        }
                        else {
                            toast('提交成功');
                            scope.orderLists[index].orderInfo.business_status = 6;
                        }
                    });
                }
                else {
                    OrderApiFactory.getOrderUpdate({
                        orderId: id,
                        orderStatus: status
                    }, true, function (res) {
                        if (res.status === 200) {
                            toast('操作成功');
                            if (status == 3 && scope.userStatus === 1) {
                                // 机刷成功之后，不展示
                                scope.orderLists[index].orderInfo.business_status = 5;
                            }
                            else {
                                scope.orderLists[index].orderInfo.business_status++;
                            }
                        }
                        else {
                            toast('未知原因导致倒错失败', 'error');
                            if (status == 3 && scope.userStatus === 1) {
                                // 机刷成功之后，不展示
                                scope.orderLists[index].orderInfo.business_status = -1;
                            }
                        }
                        scope.$apply();
                    });
                }
            };
        }

    }
}]);
