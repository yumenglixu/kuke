'use strict';
/* eslint-disable */

/**
 * @file  渠道管理平台- 财务请求
 * @author  yumeng02
 * @date 2017/07/16 上午10：08
 */

angular.module('kukeApp')
	.factory('FinanceApiFactory', ['kukeHttp', function (ybHttp) {
		return {
			// 获取对应的项目数据
			getFinanceList: function(data, async, callback){
				kukeHttp('/kuke/mock/fina/list.json', data , 'POST', async, callback);
			}
		};
	}]);
