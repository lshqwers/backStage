"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNav = getNav;

var _request = _interopRequireDefault(require("./request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getNav() {
  return (0, _request["default"])({
    method: 'get',
    url: "get_navdata"
  });
} // 各种请求放在一个文件,方便维护, 和引入