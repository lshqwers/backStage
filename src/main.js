import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/global.css'
// 要挂载在原型上, 原与继承关系, 所有的组件中都能使用this.$notice
import Notice from '@/components/notice/index.js'
import moment from "moment"
import http from 'axios'
import './api/mock.js' // 引入mock
import Cookie from 'js-cookie'
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
        Message,
        Tag,
        Pagination,
        Card,
        Dialog,
        DatePicker,
        Progress,
        Upload
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
      Vue.use(Tag);
      Vue.use(Pagination);
      Vue.use(Card);
      Vue.use(Dialog);
      Vue.use(DatePicker);
      Vue.use(Pagination);
      Vue.use(Progress);
      Vue.use(Upload);
      // axios是一个插件在全局中使用
      Vue.prototype.$http = http
      //  挂载在原型
      Vue.prototype.$message = Message
      Vue.prototype.$moment = moment;
      //  判断输入的url, 是否在当前账号返回的数据中, 解决输入在url中输入地址报空白页面
      function checkRouter(path) {
        // 拿到已知的路由,判断是没有这个路由
        // router.getRoutes 获取所有记录的路由记录表 https://v3.router.vuejs.org/zh/api/#to
        let hasCheck = router.getRoutes().filter(route => route.path == path).length
        if (hasCheck) {
          return true;
        } else {
          return false;
        }
      }

    // 导航守卫
    // 注意: 在没有登录的时候,就不跳去其他的页面,登入的时候就跳去相应的页面
    // 判断token是不是存在
    router.beforeEach((to, from, next) => {
      // 判断token存不存在
      const token = Cookie.get('token');
      // token不存在, 说明当前用户是未登录, 应该跳转至登录页,并且当前不是在login页面,要不然是死循环
      if(!token && to.name !== 'login'){
        next({ name: 'login' })
        // token存在, 说明用户登录, 此时跳转至首页
      } else if (token && to.name === 'login') {
        next({ name: 'home' })
      }
      else if (!checkRouter(to.path)) {
        next({ name: 'home' })
      } else {
        next()
      }
      // 这里引用了store,所以要把相应的user在store中引入
      // store.commit('getToken')
      // const token = store.state.user.token
      // if(!token && to.name !== 'login'){
      //   next({name: 'login'})
      // } else {
        // next()
      // }
    })

    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
