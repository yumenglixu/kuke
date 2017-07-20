/**
 * @file  渠道管理平台
 * @author  yumeng02
 * @date 2017/07/15 上午12：08
 */
/* eslint-disable */
angular.module('kukeApp', [
    'ui.router',
    'ui.bootstrap'
]).config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {  
    $urlRouterProvider.otherwise('/home');
    // $locationProvider.html5Mode(true);
    $stateProvider
        .state('home',{
        	url:'/home',
        	templateUrl:'app/kk/kk.html',
        	controller:'KKCtrl'
        })
        .state('order',{
            url:'/order',
            templateUrl:'app/order/order.html',
            controller:'OrderCtrl'
        })
        .state('info',{
            url:'/order/info/:orderId',
            templateUrl:'app/orderInfo/orderInfo.html',
            controller:'OrderInfoCtrl'
        })
        .state('finance',{
            url:'/finance',
            templateUrl:'app/finance/finance.html',
            controller:'FinanceCtrl'
        })
        .state('protocol',{
            url:'/protocol',
            templateUrl:'app/protocol/protocol.html',
            controller:'ProtocolCtrl'
        })
}]).run(['$rootScope', '$modal', function ($rootScope, $modal) {
    // modal 效果编辑
    window.alert = function (msg,type) {
        return swal({
            title: msg,
            type: type || "success",
            confirmButtonText: "我知道了",
            confirmButtonColor: (type == "success") ? "#1ab394": "#ed5565"
        });
    };

    // 上传文件
    window.uploadFile = function (id) {
        return $modal.open({
            templateUrl: 'app/dialog/modal/upload/upload.tpl.html',
            controller: 'uploadItemCtrl',
            resolve: {
                id: function(){
                    return id;
                }
            }
        }).result;
    };

     // 上传文件
    window.reBack = function (id) {
        return $modal.open({
            templateUrl: 'app/dialog/modal/reback/reback.tpl.html',
            controller: 'rebackItemCtrl',
            resolve: {
                id: function(){
                    return id;
                }
            }
        }).result;
    };

}]);