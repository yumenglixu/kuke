angular.module('kukeApp').directive('kkHeader', function () {
	return {
		restrict: 'EA',
		templateUrl: 'client/kkHeader/kkHeader.html',
		replace: true,
		link: function (scope, element, attrs) {
            scope.username = '北京酷传科技园渠道管理平台';
            scope.userimg = 'http://gitlab.baidu.com/uploads/user/avatar/2477/93791020664216031.jpg';
		},
		controller: function ($scope) {
			
		}
	}		
});