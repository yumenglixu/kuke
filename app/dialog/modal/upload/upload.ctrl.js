/**
 * @file 上传IDFA
 */
/* eslint-disable */
'use strict';

angular.module('kukeApp').controller('uploadItemCtrl', ['$scope', '$modalInstance', 'OrderApiFactory', 'id', function ($scope, $modalInstance, OrderApiFactory, id) {
        $scope.uploadId = id;
        $scope.file = '';
        $scope.submit = function () {
        	var file = document.getElementById('fileName').files[0]; // 获取文件对象
        	var filePath = document.getElementById('fileName').value;
        	if(file === undefined || file === '' || file === null) {
				toast('文件不能为空', 'error');
			} 
			else {
				var index = filePath.lastIndexOf('.');
				if(index < 0) {
					toast('上传的文件格式不正确，请选择Excel文件(*.xls)！', 'error');
				}
				else {
					var ext = filePath.substring(index + 1, filePath.length);
					if(ext !== 'xls' && ext !== 'xlsx') {
						toast('上传的文件格式不正确，请选择Excel文件(*.xls)！', 'error');
					}
					else {
						$scope.upload(file);
					}
				}
			}
        };

        // 开始上传
        $scope.upload = function (file) {
        	var FileController = "http://shangjia.kuchuan.com/uploadIDFA";                    // 接收上传文件的后台地址 
	        // FormData 对象

	        var form = new FormData();

	        form.append("id", $scope.uploadId);                           // 文件对象
	        form.append("file", file);
	        // XMLHttpRequest 对象

	        var xhr = new XMLHttpRequest();

	        xhr.open("post", FileController, true);
	        xhr.onreadystatechange = function () {
	            if (xhr.status == 200 && xhr.readyState == 4) {
	                var result = JSON.parse(xhr.responseText);
	                $modalInstance.close(result);
	            };
	        }
	        xhr.send(form);
        };
        setTimeout(function () {
        	$('.filestyle').filestyle();
        }, 100);
}]);
