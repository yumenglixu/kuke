/**
 * @file  渠道管理平台- 首页样式处理
 * @author  yumeng02
 * @date 2017/07/16 上午10：08
 */

angular.module('kukeApp').directive('projectPanle', ['HomeApiFactory', 'OrderApiFactory', '$timeout', function (HomeApiFactory, OrderApiFactory, $timeout) {
    return {
        restrict: 'E',
        templateUrl: 'client/projectPanle/projectPanle.html',
        replace: true,
        link: function (scope, element, attrs) {
            scope.edit = false;
            scope.editprice = false;
        
            scope.edit = {
                descFlag: false,
                priceFlag: false,
                descText: '',
                priceText: ''
            };

            // 监听基本信息是否改变
            scope.$watch('baseInfo', function (newValue) {
                if (newValue) {
                    scope.edit = {
                        descText: newValue.desc,
                        priceText: newValue.price
                    };
                }
            });
            
            // 修改描述
            scope.editClick = function (flag) {
                if (flag) {
                    // 确定修改
                    scope.editFun({
                        chgType: 3,
                        desc: scope.edit.descText
                    });
                    scope.baseInfo.desc = scope.edit.descText;
                }
                scope.edit.descFlag = !scope.edit.descFlag;
            };
            
            // 修改基本信息状态
            scope.editStatus = function () {
                scope.baseInfo.status = !scope.baseInfo.status;
                scope.editFun({
                    chgType: 1,
                    status: +scope.baseInfo.status
                });
            };
            // 修改单价
            scope.editPrice = function (flag) {
                if (flag) {
                    var num = scope.edit.priceText;
                    if (isNaN(num)) {
                        toast('请输入数字', 'error');
                    }
                    else if (num <= 0) {
                        toast('单价不能必须大于0元', 'error');
                    }
                    else if (num.toString().split(".")[1].length > 2) {
                        toast('单价只能精确到分(小数点后两位)', 'error');
                    }
                    else {
                        scope.editFun({
                            chgType: 2,
                            price: num
                        });
                        scope.baseInfo.price = num;
                        scope.edit.priceFlag = !scope.edit.priceFlag;
                    }
                }
                else {
                    scope.edit.priceFlag = !scope.edit.priceFlag;
                }
            };
            // 编辑基础事件
            scope.editFun = function (data) {
                HomeApiFactory.getUpdateInfo(data, true, function (res) {
                    if (res.status !== 200) {
                        toast('修改失败', 'error');
                    }
                    else {
                        toast('修改成功');
                    }
                    scope.$apply();
                });
            };
        },
        controller: function($scope) {
            $('[data-toggle="tooltip"]').tooltip();
        }
    };
}]);