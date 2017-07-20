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
				kukeHttp('/orderInfo', data , 'GET', async, callback);
			},
			
			getOrderInfo: function(data, async, callback){
				kukeHttp('/orderDetail', data , 'GET', async, callback);
			},

			getOrderUpdate: function(data, async, callback){
				kukeHttp('/submitOrder', data , 'GET', async, callback);
			},

			getOrderClose: function(data, async, callback){
				kukeHttp('/closeOrder', data , 'GET', async, callback);
			},

			getOrderUpload: function(data, async, callback){
				kukeHttp('/uploadIDFA', data , 'POST', async, callback);
			}
		};
	}]);
