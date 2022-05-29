"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _tab = _interopRequireDefault(require("./tab"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Vuex全局注入
_vue["default"].use(_vuex["default"]); // 把Store对外界进行暴露


var _default = new _vuex["default"].Store({
  state: {
    // tab
    nav: [],
    tabList: localStorage.getItem('tabList') ? JSON.parse(localStorage.getItem('tabList')) : [] // tag的导航标签

  },
  // 相对计算属性
  getters: {
    navData: function navData(state) {
      return state.nav;
    }
  },
  // 改变数据, 设置导航信息 mutations同步修改里面的数据
  mutations: {
    SETNAV: function SETNAV(state, data) {
      state.nav = data;
    },
    SETTABLIst: function SETTABLIst(state, data) {
      console.log(data, 'state, datastate, data'); // 改变state

      state.tabList = data; // 设置storage

      localStorage.setItem('tabList', JSON.stringify(data));
    }
  },
  // actions, 管理mutations
  actions: {
    SETNAV: function SETNAV(_ref, data) {
      var commit = _ref.commit;
      commit('SETNAV', data);
    }
  },
  // modules的方式将不同的模块进行引入
  modules: {
    tab: _tab["default"]
  }
});

exports["default"] = _default;