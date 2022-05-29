"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 通过axios调接口
var service = _axios["default"].create({
  responseType: 'arraybuffer'
});

service.interceptors;