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
			// 获取商家基础信息信息
			getBaseInfo: function(data, async, callback){
				kukeHttp('/businessInfo', data , 'GET', async, callback);
			},

			// 修改基本信息
			getUpdateInfo: function(data, async, callback){
				kukeHttp('/chgBusiness', data , 'GET', async, callback);
			}
		};
	}]);
