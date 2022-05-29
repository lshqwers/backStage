import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/global.css'
// 要挂载在原型上, 原与继承关系, 所有的组件中都能使用this.$notice
import Notice from '@/components/notice/index.js'
import { 
        Button, 
        Radio,
        Container,
        Header,
        Aside,
        Main,
        Footer,
        Menu,
        Submenu,
        MenuItem,
        MenuItemGroup,
        Row,
        Col,
        DropdownItem,
        Dropdown,
        DropdownMenu,
        Table,
        TableColumn,
        Option,
        Select,
        Checkbox,
        Tooltip,
        CheckboxGroup,
        Tabs,
        TabPane,
        Transfer,
        Form,
        FormItem,
        Input,
        Switch,
        Image,
        BreadcrumbItem,
        Breadcrumb,
        Message
      } from 'element-ui'
      Vue.prototype.$notice = Notice
      Vue.config.productionTip = false
      Vue.use(Button);
      Vue.use(Radio);
      Vue.use(Container);
      Vue.use(Header);
      Vue.use(Aside);
      Vue.use(Main);
      Vue.use(Footer);
      Vue.use(Menu);
      Vue.use(Submenu);
      Vue.use(MenuItem);
      Vue.use(MenuItemGroup);
      Vue.use(Row);
      Vue.use(Col);
      Vue.use(DropdownItem);
      Vue.use(Dropdown);
      Vue.use(DropdownMenu);      
      Vue.use(Table);
      Vue.use(TableColumn);
      Vue.use(Option);
      Vue.use(Select);
      Vue.use(Checkbox);
      Vue.use(Tooltip);
      Vue.use(CheckboxGroup);
      Vue.use(Tabs);
      Vue.use(TabPane);
      Vue.use(Transfer);
      Vue.use(Form);
      Vue.use(FormItem);
      Vue.use(Input);
      Vue.use(Switch);
      Vue.use(Image);
      Vue.use(BreadcrumbItem);
      Vue.use(Breadcrumb);
//  挂载在原型
Vue.prototype.$message = Message 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
