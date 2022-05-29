"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  state: {
    // 是否展开的变量
    isCollapse: false,
    meunData: []
  },
  // 在(mutations)中定义一个改变state里面的方法
  mutations: {
    isCollapseMenu2: function isCollapseMenu2(state) {
      console.log(state.isCollapse, 'state.isCollapse', !state.isCollapse);
      state.isCollapse = !state.isCollapse;
      console.log(state.isCollapse, 'state.isCollapsestate.isCollapse13');
    }
  }
};
exports["default"] = _default;