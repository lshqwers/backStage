"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parkingStatus = parkingStatus;

// 禁启用
function parkingStatus() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return service.request({
    method: 'post',
    url: '/parking/status/',
    data: data
  });
}