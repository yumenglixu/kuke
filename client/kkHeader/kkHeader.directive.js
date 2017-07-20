angular.module('kukeApp').directive('kkHeader', ['HomeApiFactory', function (HomeApiFactory) {
	return {
		restrict: 'EA',
		templateUrl: 'client/kkHeader/kkHeader.html',
		replace: true,
		link: function (scope, element, attrs) {
            scope.username = ''; // 商家信息
            scope.userstatus = ''; // 商家状态， 0代表积分墙，1代表机刷
            scope.userimg = 'http://gitlab.baidu.com/uploads/user/avatar/2477/93791020664216031.jpg';
            scope.baseInfo = {};
            // 获取基本信息
            HomeApiFactory.getBaseInfo({}, true, function(res) {
                if (res.status === 200) {
                    scope.baseInfo = res.data;
                    scope.username = res.data.name;
                    scope.userstatus = res.data.business_type;
                }
                else if (res.status === 301) {
                    window.alert('未绑定商家', 'warning');
                }
                else if (res.status === 300) {
                    window.location.href = res.data;
                }
                scope.$apply();
            });
		}
	}	
}]);