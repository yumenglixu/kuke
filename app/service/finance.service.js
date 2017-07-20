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
			// 获取财务操作记录
			getFinanceList: function(data, async, callback){
				// 0 是财务记录,  1 是保证金记录
				if (+data.type === 0) {
					kukeHttp('/financeLog', data , 'GET', async, callback);
				}
				else {
					kukeHttp('/insuranceLog', data , 'GET', async, callback);
				}
			}
		};
	}]);
