"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 默认的地址
_axios["default"].defaults.baseURL = 'http://127.0.0.1:3333/'; // 添加请求拦截器(请求前要做的事情){发送请求拿到数据后,进行拦截处理}

_axios["default"].interceptors.request.use(function (config) {
  return config;
}); // 添加token
// 响应拦截器(后端返回数据的时候要做的事情)
// 后端返回的数据的时候, 要统一错误码判断, 添加动画, 添加提示


_axios["default"].interceptors.request.use(function (res) {
  return res;
}, function (err) {
  return Promise.reject(err);
}); // 路由拦截(路由守卫){url变化的时候, 进行处理}
//  不同状态, 拦截也不同


var _default = _axios["default"];
exports["default"] = _default;