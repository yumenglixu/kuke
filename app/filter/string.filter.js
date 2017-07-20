/**
 * 过滤器；字符串过滤
 */
angular.module('ybApp').filter('numFormatter', function() {          
   	return function(number) {
   		if (number) {
   			return number;
   		}
   		return 0;
   	}
});