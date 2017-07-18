/**
 * @file  渠道管理平台- 首页样式处理
 * @author  yumeng02
 * @date 2017/07/16 上午10：08
 */

angular.module('kukeApp').directive('projectPanle', ['HomeApiFactory', '$timeout', function (HomeApiFactory, $timeout) {
    return {
        restrict: 'E',
        templateUrl: 'client/projectPanle/projectPanle.html',
        replace: true,
        link: function (scope, element, attrs) {
            scope.baseInfo = {};
            // 获取基本信息
            HomeApiFactory.getBaseInfo({}, true, function(res) {
                if (res.errno === 0) {
                    scope.baseInfo = res.data;
                }
                scope.$apply();
            });
        },
        controller: function($scope) {
            var elem = document.querySelector('.js-switch');
            var switchery = new Switchery(elem, { 
                color: '#218dfd'
            });
            $('[data-toggle="tooltip"]').tooltip();
        }
    };
}]);