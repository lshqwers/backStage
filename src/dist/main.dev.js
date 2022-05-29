"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

require("element-ui/lib/theme-chalk/index.css");

require("@/assets/css/global.css");

var _index2 = _interopRequireDefault(require("@/components/notice/index.js"));

var _elementUi = require("element-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 要挂载在原型上, 原与继承关系, 所有的组件中都能使用this.$notice
_vue["default"].prototype.$notice = _index2["default"];
_vue["default"].config.productionTip = false;

_vue["default"].use(_elementUi.Button);

_vue["default"].use(_elementUi.Radio);

_vue["default"].use(_elementUi.Container);

_vue["default"].use(_elementUi.Header);

_vue["default"].use(_elementUi.Aside);

_vue["default"].use(_elementUi.Main);

_vue["default"].use(_elementUi.Footer);

_vue["default"].use(_elementUi.Menu);

_vue["default"].use(_elementUi.Submenu);

_vue["default"].use(_elementUi.MenuItem);

_vue["default"].use(_elementUi.MenuItemGroup);

_vue["default"].use(_elementUi.Row);

_vue["default"].use(_elementUi.Col);

_vue["default"].use(_elementUi.DropdownItem);

_vue["default"].use(_elementUi.Dropdown);

_vue["default"].use(_elementUi.DropdownMenu);

_vue["default"].use(_elementUi.Table);

_vue["default"].use(_elementUi.TableColumn);

_vue["default"].use(_elementUi.Option);

_vue["default"].use(_elementUi.Select);

_vue["default"].use(_elementUi.Checkbox);

_vue["default"].use(_elementUi.Tooltip);

_vue["default"].use(_elementUi.CheckboxGroup);

_vue["default"].use(_elementUi.Tabs);

_vue["default"].use(_elementUi.TabPane);

_vue["default"].use(_elementUi.Transfer);

_vue["default"].use(_elementUi.Form);

_vue["default"].use(_elementUi.FormItem);

_vue["default"].use(_elementUi.Input);

_vue["default"].use(_elementUi.Switch);

_vue["default"].use(_elementUi.Image);

_vue["default"].use(_elementUi.BreadcrumbItem);

_vue["default"].use(_elementUi.Breadcrumb); //  挂载在原型


_vue["default"].prototype.$message = _elementUi.Message;
new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');