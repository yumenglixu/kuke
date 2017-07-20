/* eslint-disable */
/**
 * @file  渠道管理平台- http 请求中转
 * @author  yumeng02
 * @date 2017/07/16 上午10：08
 */

angular.module('kukeApp').service('kukeHttp', function ($http) {
   	// var ip = window.location.origin;
   	var ip = 'http://shangjia.kuchuan.com';
    kukeHttp = function (action, data, type, async, callback){
    	var url = ip + action;
	    $.ajax({
	        url: url, //实时刷新数据
	        type: type,
	        async: async || false,
	        data: data || {},
	        dataType: 'json',
	        success: function (result, textStatus, jqXHR) {
	            callback && callback(result);
	        },
            // 添加错误返回。
            error: function (XMLHttpRequest, textStatus, errorThrown){
                console.log(textStatus);
            }
	    });
	};
	return kukeHttp;
})