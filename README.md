# backstage

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```
cnpm install axios -s

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

// 使用element的按需导入
1.npm install babel-plugin-component -D
在babel.config.js文件中引入下面的代码
2.将.babelrc 修改为：
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}

// 单应用
下载了路由,
要在main.js中
需要注册和挂载

下载less
npm i less
下载less的解析器
npm i less-loader@5.0.0
<style lang="less" scoped>
</style>
启动项目

npm install less less-loader --save-dev
https://www.jianshu.com/p/a17c8736f985

要使用vuex需要在main.js中引入
如果pageage.json中文件,沒有vuex则需要下載 npm i vuex

在main.js中引入
import store from './store'
在项目的src文件下创建一个store文件
store管理vuex中的一些配置
store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

// 点击勾选后,table当前行为蓝色
勾选当前行变为
forEach和map是不能return出去, 因为勾选当前行要退出, 所以可以使用for来终止循环
map和forEach是不能终止循环的, try catch可以使用
https://www.jb51.net/article/169043.htm

// 路由的权限的业务
1. 定义好全部的路由地址
2.通过用户不同像后台请求不同的用户权限数据
3.对用户权限做对比: 请求数据 === 全部的路由 取出来作为路由的配置

// 根据路由的权限不同, 看到的路由结构不同

<!-- 
    点击菜单, 右边显示相应的内容
    登入的角色不同, 左边展示的内容不同
-->

<!--
  当前登入之后, 后端拿到的账号和密码,
  与数据库进行匹配, 就知道哪个是角色

  登入老师的账号
  首页
  上传

  登入学生的账号
  首页
  下载
 -->

权限(后端做)

vite采用es module的方式,比webpack快
采用原生的  更快

vue-cli基于webpack,
webpack是基于node
node是框架的方式

vue-cli 4.5e版本以上, 可以进行构建vue3.0版本

babel是把es6 7 8 转换为es5

动态路由
登入的用户角色不同, 展示不同的导航菜单及动态路由

<!-- 默认数据 -->
    <template>
      <div class="sidebar">
        <ul>
        <!-- 默认数据 -->
          <li>
              <router-link to="/home">
                <i class="iconfont iconshouye1">
                <span>首页</span>
              </router-li>              
          </li>
          <li>
              <router-link to="/testA">
                <i class="iconfont iconqiye">
                <span>管理组件</span>
              </router-li>              
          </li>
          <li>
              <router-link to="/pitan">
                <i class="iconfont iconpingta">
                <span>平台组件</span>
              </router-li>              
          </li>
        </ul>
      </div>
    </template>


<!-- 
      登入的时候, 接口返回的路由是两条, 导航也是两条
 -->

<!-- 公共数据要考虑到导航和路由的 -->

[
  {title: '首页',icon: 'iconshouye1', path: '/home', name: 'home', component: 'Home'},
  {title: '企业管理',icon: 'iconqiye', path: '/testA', name: 'testA', component: 'testA'},
  {title: '财务管理',icon: 'iconcaiwu', path: '/testB', name: 'testB', component: 'testB'},
  {title: '产品管理',icon: 'iconcaiwu', path: '/testC', name: 'testC', component: 'testC'},
  {title: '企业管理',icon: 'iconManage', path: '/testD', name: 'testD', component: 'testD'},
  {title: '角色管理',icon: 'iconRole', path: '/testE', name: 'testE', component: 'testE'},
  {title: '产品管理',icon: 'iconProduct', path: '/testF', name: 'testF', component: 'testF'},
]

<!-- 不需要把所有的数据,放在main.js中, 可能会影响页面的速度 -->

<!-- 后端不会又返回路由的数据, 又返回导航的数据  -->

<!-- 路由根据导航来处理 -->

components是放的公共组件
// 不能让一个标签中使用v-if或者v-for
<!-- <li v-for v-if></li> -->


可以多选的下拉菜单，带输入的对话框，日期选择器等等，于是我们会想办法将这些共有的功能抽取成一个个公共组件，以便能够在不同的页面或业务中使用。

<!-- 
    页面开始进入的时候,
    数据进push进去了,
    已经在路由数据存在了,
    由于设计到了权限,
    在路由配置完成之后,
    相当于已经进行了初始化了,
    把数据添加进去, 不会导致路由的初化了,
    导致路由的是数据没有办法添加,
    这个时候只能进行动态的路由添加了
    (把后端的数据,动态的追加进去)
 -->

 <!-- 
    到导航
    路由请求
 
    在路由的请求,拿到数据之后, 进行缓存起来, 
    在导航中, 从缓存中获取数据

    async await 异步同步化

    后端返回啥, 就展示啥
    返回的数据, 除了在导航展示以外, 还要在路由中展示,
    弊端:
    可能不了解组件的包含关系, 或者路由或者名字
    前端提供给后端, 同时对数据不断变化

    后端返回角色,
    其他前端的自己处理

    后端返回前端的名字

  -->
   export function getNav()

    import { getNav } from '@/utils/request.js'
      路由拦截(跳转前, 跳转后)
      <!-- beforeEach -->

      router.beforeEach(function(to, from, next){
        <!-- 
              发送请求(请求是异步的)
              getNav().then(res => {

              })
              拿到数据,
              动态追加(缓存数据vuex)
              具体跳转
        -->
      })

    // 使用async await的写法
    import { getNav } from '@/utils/request.js'
    // 导入store
    import store from '@/store/index.js'

<!-- 进入页面没有请求, 可能从缓存中获取的数据 -->
      路由拦截(跳转前, 跳转后)
      <!-- beforeEach -->

      router.beforeEach(async(to, from, next)=>{
        <!-- 判断是否发送请求,如果缓存了, 说明有数据,不发送请求, 免的时刻发送请求 -->
        if(store && store.state.nav.length == 0){
          <!-- 
              发送请求(请求是异步的)
              let res = await getNav(); // 这种会导致调转一次, 发送一次请求, if()加判断
              拿到数据,动态追加(缓存数据)
              let routerData = addRoutes(res.data.result)
              // router.addRoutes(routerData) 动态添加路由
              // 缓存数据, dispatch触发action  dispatch(触发事件, 把获取的数据传过去)
              store.dispatch('SETNAV',res.data.result)

              具体跳转
              next({...to})
        -->
        } else{
          next()
        }
      })
    
    function addRoutes(result){
      result.forEach(v=> {
        routes.push({
          path: v.path;
          name: v.name;
          meta: {title: v.title},
          component: () => import('../views/rightMain/content/'+v.component)
        })
      })
      <!-- 记得返回出去 -->
      return routes
    }
    export default router

导航获取缓存中的数据
mapGetters辅助函数
import {mapGetters} from 'vuex'
export default {
  data(){
    return {

    }
  },
  //mapGetters获取getters的navData数据
  computed: mapGetters(['navData'])
}

路由的权限验证:
如果你的网页有[普通用户，管理员.....]等多种角色类型，不同的角色能看到的页面应该是不同的，比如普通用户不应该看到管理员的控制台,那么这个时候,动态路由就非常有用了

// 连续触发的时候, 发送多次的接口(接口请求很多)
触发完成之后禁用,就不能连续的点
el-switch

判断我们定义的id和修改switch的id的按钮是否相等
data(){
  return {
    switch_disabled: ''
  }
}
<!-- 禁启用 -->
switchChange(data){
  const requestData = {
    id: status.id,
    status: data.status
  }
  this.switch_disabled = data.id
  <!-- 下面是调接口 -->
  ParkingStatus(requestData).then(response => {
    this.$message({
      type: 'success',
      message: '启用成功'
    });
    this.switch_disabled = ""; // 第一种方式: 组件本身的属性处理
  }).catch(error => {
    this.switch_disabled = "";
  })
}
element 全局$message使用方法（vue中使用和js中使用）
https://www.cnblogs.com/Ming2021/p/15727356.html
message中在main的使用
import { Message } from 'element'
不需要
Vue.use(Message) 
// this.prototypr.$message = Message 这种是报错
Vue.prototype.$message = Message

// 定义一个开关
切换开关的时候, 它会一直切换开关, 但是不会一直发送请求
在刷新的时候还是变成了启用的状态, 因为把修改后的数据存储在后端中,
所以刷新的时候不会变会来

防止按钮的多次点击
<!-- 删除 -->
delConfirm(id){
  this.$confirm('确认删除此信息', '提示',{
    confirmButtonText: '确定',  
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    this.rowId = id;
    ParkingDelete({id}).then(re)
  })
}  