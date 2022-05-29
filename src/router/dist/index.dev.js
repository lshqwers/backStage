"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _HomeView = _interopRequireDefault(require("../views/HomeView.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import Main from '../views/main.vue'
_vue["default"].use(_vueRouter["default"]);

var routes = [//main是公共的区域
{
  path: '/',
  name: 'Main',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/main.vue'));
    });
  },
  redirect: '/home',
  // 重定向
  children: [{
    path: '/home',
    name: 'home',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/Home/index.vue'));
      });
    }
  }, {
    path: '/mail',
    name: 'mail',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/shop/index.vue'));
      });
    }
  }, {
    path: '/user',
    name: 'user',
    // path和user都要一样,否则跳转对应不了组件
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/user/index.vue'));
      });
    }
  }, {
    path: '/path1',
    name: 'path1',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/pageOne/index.vue'));
      });
    }
  }, {
    path: '/path2',
    name: 'path2',
    component: function component() {
      return Promise.resolve().then(function () {
        return _interopRequireWildcard(require('../views/pageTwo/index.vue'));
      });
    }
  }]
}, {
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/AboutView.vue'));
    });
  } // 按需引入

}, {
  path: '/notFound',
  name: 'found',
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/errorPage/404.vue'));
    });
  }
} // {
//   path: '/other',
//   name: 'other',
//   children: [
//     {
//       path: 'path1',
//       name: 'path1',
//       component: ()=> import('../views/pageOne/index.vue')
//     },
//     {
//       path: 'path2',
//       name: 'path2',
//       component: ()=> import('../views/pageTwo/index.vue')
//     }
//   ]
// }
];
/*
  解决 Vue 重复点击相同路由，出现 Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation 问题
  https://blog.csdn.net/qq_36437172/article/details/108269846
*/

var VueRouterPush = _vueRouter["default"].prototype.push;

_vueRouter["default"].prototype.push = function push(to) {
  return VueRouterPush.call(this, to)["catch"](function (err) {
    return err;
  });
}; // 构造函数


var router = new _vueRouter["default"]({
  mode: 'history',
  // 模式为history
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;