'use strict';
/* eslint-disable */
angular.module('kukeApp').directive('financePanle', ['FinanceApiFactory', function (FinanceApiFactory) {
    return {
        restrict: 'EA',
        templateUrl: 'client/financePanle/financePanle.html',
        link: function (scope, element, attrs) {
        	scope.financeIndex = 0;
            scope.list = [];

            scope.currentPage = 1;
            scope.total = 0;
            scope.paginationConf = {};

            scope.tabs = [{
                type: '0',
                label: '财务记录'
            }, {
                type: '1',
                label: '保证金'
            }];

            

            scope.$watch('activeSer', function(newValue) {
                if (newValue) {
                    scope.finaList(1, scope.financeIndex);
                };
            }, true);

            // 兼容list 改变的时候，触发分页
            scope.$watch('list', function(newValue) {
                if (newValue) {
                    scope.paginationConf = {
                        currentPage: scope.currentPage,
                        totalItems: scope.total,
                        itemsPerPage: 10,
                        numberOfPages:  Math.ceil(scope.total / 10),
                        onChange: function () {
                            // 切换的时候
                            if (scope.paginationConf.currentPage && scope.currentPage != scope.paginationConf.currentPage) {
                                scope.finaList(scope.paginationConf.currentPage, scope.financeIndex);
                            }
                        }
                    };
                };
            }, true);

            // 切换tab
            scope.changeTab = function (type, index) {
                if (scope.financeIndex === index) {
                    return;
                }
                scope.financeIndex = index;
                scope.finaList(1, type);
            }

            // 获取表单
            scope.finaList = function(page, type) {
                var data = {
                    page: page,
                    type: type,
                    pageSize: 10
                };
                scope.beginPage = true;
                FinanceApiFactory.getFinanceList(data, true, function (res) {
                    if (res.status === 200) {
                        scope.list = res.data.list;
                        scope.total = res.data.total;
                        scope.currentPage = res.data.pageCurrent;   
                    }
                    else {
                        scope.list = [];
                        scope.total = 0;
                        scope.currentPage = 1;
                    }  
                    scope.beginPage = false;
                    scope.$apply();
                    $('[data-toggle="tooltip"]').tooltip();
                });
            }
            

        },
        controller: function($scope) {
            $('[data-toggle="tooltip"]').tooltip();
        }
    }
}]);
