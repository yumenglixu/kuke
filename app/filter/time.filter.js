/**
 * @file  渠道管理平台-过滤器
 * @author  yumeng02
 * @date 2017/07/17 上午12：08
 */
/* eslint-disable */
angular.module('kukeApp').filter('timeFormatter', function() {          
   	return function(time, str) {
          if (time) {
              var dateObj = new Date(time);
              var UnixTimeToDate = dateObj.getFullYear() + '/' + (dateObj.getMonth() + 1) + '/' + dateObj.getDate() + ' ' + dateObj.getHours() + ':' + dateObj.getMinutes() + ':' + dateObj.getSeconds();
              return UnixTimeToDate;
          }
          return str || '暂无时间';
   	}
});