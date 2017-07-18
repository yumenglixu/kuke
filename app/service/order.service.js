'use strict';
/* eslint-disable */

/**
 * @file  渠道管理平台- 订单请求
 * @author  yumeng02
 * @date 2017/07/16 上午10：08
 */

angular.module('kukeApp')
	.factory('OrderApiFactory', ['kukeHttp', function (ybHttp) {
		return {
			// 获取对应的项目数据
			getOrderList: function(data, async, callback){
				kukeHttp('./mock/order/order.json', data , 'GET', async, callback);
			},
			getOrderInfo: function(data, async, callback){
				kukeHttp('./mock/order/orderinfo.json', data , 'GET', async, callback);
			}
		};
	}]);
