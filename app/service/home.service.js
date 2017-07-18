'use strict';
/* eslint-disable */

/**
 * @file  渠道管理平台- 首页请求
 * @author  yumeng02
 * @date 2017/07/16 上午10：08
 */

angular.module('kukeApp')
	.factory('HomeApiFactory', ['kukeHttp', function (ybHttp) {
		return {
			// 获取对应的项目数据
			getBaseInfo: function(data, async, callback){
				kukeHttp('./mock/home/baseinfo.json', data , 'POST', async, callback);
			}
		};
	}]);
