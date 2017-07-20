/**
 * @file  渠道管理平台- 分页管理器
 * @author  yumeng02
 * @date 2017/07/16 上午20：08
 */

/* eslint-disable */
angular.module('kukeApp').directive('kkPagination', ['$http', function ($http) {
    return {
        restrict: 'EA',
        template:   '<div class="page-list">' +
                    '<a class="page" ng-class="{disabled: conf.currentPage == 1}" ng-click="prevPage()"><i class="icon icon-page-pre"></i></a>' +
                    '<ul class="pagination" ng-show="conf.totalItems > 0">' +
                    '<li ng-repeat="item in pageList track by $index" ng-class="{active: item == conf.currentPage, separate: item == \'...\'}" ' +
                    'ng-click="changeCurrentPage(item)">' +
                    '<span>{{ item }}</span>' +
                    '</li>' +
                    '</ul>' +
                    '<a class="page" ng-class="{disabled: conf.currentPage == conf.numberOfPages}" ng-click="nextPage()"><i class="icon icon-page-next"></i></a>',
        replace: true,
        scope: {
            conf: '='
        },
        link: function(scope, element, attrs) {
            // 变更当前页
            scope.changeCurrentPage = function(item){
                if(item == '...'){
                    return;
                }else{
                    scope.conf.currentPage = item;
                }
            };

            // pageList数组
            function getPagination () {
                scope.conf.pagesLength = 5;
                // conf.currentPage
                scope.conf.currentPage = parseInt(scope.conf.currentPage, 10) || 1;
                // conf.totalItems
                scope.conf.totalItems = parseInt(scope.conf.totalItems, 10);


                // 总页数
                scope.conf.numberOfPages = scope.conf.numberOfPages || Math.ceil(scope.conf.totalItems/scope.conf.itemsPerPage);
                // 当前的页数小于1
                if(scope.conf.currentPage < 1) {
                    scope.conf.currentPage = 1;
                }

                // 当前的页数大于总页面
                if(scope.conf.currentPage > scope.conf.numberOfPages) {
                    scope.conf.currentPage = scope.conf.numberOfPages;
                }

                scope.pageList = [];
                if (scope.conf.numberOfPages <= scope.conf.pagesLength) {
                    // 判断总页数如果小于等于分页的长度，若小于则直接显示
                    for (var i = 1; i <= scope.conf.numberOfPages; i++) {
                        scope.pageList.push(i);
                    }
                }
                else {
                    // 总页数大于分页长度（此时分为三种情况：1.左边没有...2.右边没有...3.左右都有...）
                    // 计算中心偏移量
                    var offset = (scope.conf.pagesLength - 1) / 2;
                    if (scope.conf.currentPage <= offset) {
                        // 左边没有...
                        for (var i = 1; i <= offset + 1; i++) {
                            scope.pageList.push(i);
                        }
                        scope.pageList.push('...');
                        scope.pageList.push(scope.conf.numberOfPages);
                    }
                    else if (scope.conf.currentPage > scope.conf.numberOfPages - offset) {
                        scope.pageList.push(1);
                        scope.pageList.push('...');
                        for (i = offset + 1; i >= 1; i--) {
                            scope.pageList.push(scope.conf.numberOfPages - i);
                        }
                        scope.pageList.push(scope.conf.numberOfPages);
                    }
                    else {
                        // 最后一种情况，两边都有...
                        scope.pageList.push(1);
                        scope.pageList.push('...');

                        for (i = Math.ceil(offset / 2); i >= 1; i--) {
                            scope.pageList.push(scope.conf.currentPage - i);
                        }
                        scope.pageList.push(scope.conf.currentPage);
                        for(i = 1; i <= offset / 2; i++) {
                            scope.pageList.push(scope.conf.currentPage + i);
                        }
                        scope.pageList.push('...');
                        scope.pageList.push(scope.conf.numberOfPages);
                    }
                }
                if (scope.conf.onChange) {
                    scope.conf.onChange();
                }
                scope.$parent.conf = scope.conf;
            }

            // prevPage
            scope.prevPage = function () {
                if (scope.conf.currentPage > 1) {
                    scope.conf.currentPage -= 1;
                }
            };
            // nextPage
            scope.nextPage = function () {
                if(scope.conf.currentPage < scope.conf.numberOfPages){
                    scope.conf.currentPage += 1;
                }
            };


            scope.$watch(function () {
                var newValue = scope.conf.currentPage + ' ' + scope.conf.totalItems + ' ';
                // 如果直接watch perPage变化的时候，因为记住功能的原因，所以一开始可能调用两次。
                return newValue;
            }, getPagination);
        }
    };
}]);