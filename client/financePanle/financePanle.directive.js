'use strict';
/* eslint-disable */
angular.module('kukeApp').directive('financePanle', ['FinanceApiFactory', function (FinanceApiFactory) {
    return {
        restrict: 'EA',
        templateUrl: 'client/financePanle/financePanle.html',
        link: function (scope, element, attrs) {
        	scope.financeIndex = 0;
            scope.currentPage = 1;
            scope.list = [];
            scope.total = 0;
            scope.paginationConf = {};

            scope.tabs = [{
                type: 'all',
                label: '财务记录'
            }, {
                type: 'daijiedan',
                label: '保证金'
            }];

            

            scope.$watch('activeSer', function(newValue) {
                if (newValue) {
                    scope.finaList();
                };
            }, true);
            // 兼容list 改变的时候，触发分页
            scope.$watch('list', function(newValue) {
                if (newValue) {
                    scope.paginationConf = {
                        currentPage: 1,
                        totalItems: scope.total,
                        itemsPerPage: 10,
                        onChange: function () {
                            // 切换的时候
                            console.log(scope.paginationConf);
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
            }

            // 获取表单
            scope.finaList = function(page) {
                var data = {
                    page: page
                };
                FinanceApiFactory.getFinanceList(data, true, function (res) {
                    if (res.errno === 0) {
                        scope.list = res.data.list;
                        scope.total = res.data.total;   
                    }
                    else {
                        scope.list = [];
                        scope.total = 0;
                    }  
                    scope.$apply();
                });
            }
            

        },
        controller: function($scope) {
            $('[data-toggle="tooltip"]').tooltip();
        }
    }
}]);
