"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetTableData = GetTableData;

// import service  from '../utils/request';

/*
    获取列表数据
*/
function GetTableData() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return service.request({
    method: "post",
    url: '/cityPicker/',
    data: data
  });
}