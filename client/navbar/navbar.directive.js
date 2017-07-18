/* eslint-disable */
angular.module('kukeApp').directive('navBar',['$location', function($location){
	return {
		restrict: 'EA',
		templateUrl: 'client/navbar/navbar.html',
		replace: true,
		link: function (scope, element, attrs) {
			scope.servers = [{
				name: '/home',
				icon: 'icon-home',
				title: '概述'
			}, {
				name: '/order',
				icon: 'icon-order',
				title: '订单'
			}, {
				name: '/finance',
				icon: 'icon-finance',
				title: '财务'
			}];
			
			var path = '/' + $location.path().split('/')[1];
			scope.activeSer = path;
		},
		controller:function($scope){
			var app = $('.app-container');
			var toogle = $('.toggle-nav-collapse');
			var sidebar = $('.sidebar-wrapper');
			toogle.on('click', function () {
				app.toggleClass('app-container-collapsed');
				sidebar.toggleClass('sidebar-wrapper-collapsed');
			});
		}
	};	
}]);