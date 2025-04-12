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
// this.prototype.$message = Message 这种是报错
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
<!-- 这里的表格的拖拽是用sorttable, 一款轻量级的托放排序列表的js插件(虽然) -->

// 设置项目开机自起
https://blog.csdn.net/weixin_41182727/article/details/100979312

// wangEditor

<!-- 
  服务端地址
  必填, 否则上传图片会报错

  
 -->
 export const TableList = (params) => request.post('/register', params)

<!--
  Nprogress进度条
  brower install --save nprogress
  npm install --save nprogress

  axios.interceptors.request.use((config) => {
    Nprogress.start()
    return config
  })

  axios.interceptors.response.use((config) => {
    Nprogress.doen();
    return config;
  })
-->

<!-- 引入全局的插件,可以在mainjs中引入  -->

<!-- 
  axios的使用

  npm install axios
  axios 是一个基于promise的HTTP 库, 可以使用在浏览器和nodejs中。

  特性
  从浏览器中创建XMLHttpRequests
  从node.js创建http请求
  支持Promise API
  拦截请求和响应
  转换请求数据和响应数据
  取消请求
  自动转换JSON数据
  客户端支持防御XSRF
 -->

<!-- 
  三级联动组件完成
  -----由于三级联动, 在home, Search, Detail, 把三级联动注册为全局组件。
  好处: 只需要注册一次, 就可以在项目任意地方是使用
 -->

 <!-- 
      登录前对用户进行权限判断,
      1.用户没有登入,不可以访问首页 (/home)
      2.不同用户看到内容是不一样的

      token 用于权限的判断
      header加在请求头

      没有登录token不存在

      登录后把数据存在cookie中
      npm i js-cookie@3.0.1 指定版本


      导航守卫
      判断有没有token

      全局前置守卫:
      当一个导航触发时, 全局前置守卫按照创建顺序调用。
      守卫是 异步解析执行, 此时导航在所有守卫resolve完之前一直处于等待中。
      每个守卫方法接收三个参数:
      to: Route: 即将进入的目标路由对象
      form: Route: 当前导航正要离开的路由
      next: Function: 一定要调用该方法来resolve这个钩子。
      执行效果依赖next方法的调用参数.
      next(false): 中断当前的导航。如果浏览器的URL改变了(可能是用户手动或者浏览器后退按钮), 那么URL地址会重置到false路由对应的地址。

  -->

  <!--
        路由线先要有, 在根据后端返回的内容, 在进行渲染

        点击跳转的内容
        url和路由的组件要匹配的上, 这样就不会出现点击空白

        并不是服务端返回啥,直接显示啥,还要对路由的处理

        服务端返回直接展示:
        要路由的配置

        vue2和vue3 (yarn dev 启动项目)
        vue-cli 和 vite

        二级路由, 左边导航出口
        <div id="module">
          <el-container>
          左侧导航
            <Nav />
              <el-container>
                <el-header>
                  退出按钮
                  <el-button class="exit" type="primary" @click="goBack()">退出</el-button>
                </el-header>
                右侧主体
                <el-main>
                  <router-view />
                </el-main>
              </el-container>
          </el-container>
        </div>
   -->
   <!-- 
        下载mock
        npm i  mock 通过拦截发送请求
        mock.js 中 写了接口后
        在main.js中引入 import './api/mock'

        cnpm i axios --save
        cnpm i mockjs --save-dev
        使用json5解决json文件, 无法添加注释问题
         cnpm i json5 --save-dev
    -->
    <!--
        1.不同的账号登录, 会有不同的菜单权限
        2.通过url输入地址来显示页面
        根据所拥有的菜单路由权限, 动态的注册路由
        3.对于菜单的数据在不同的页面之间的数据通信
     -->

菜单权限
1.接口:
login ===> token ===> 存token并且把token 放到header请求头中
getInfo ===> permissions: ["*:*:*"]  roles: ['admin']

getRouters: 拿到所有路由 ===? 如何处理

接口权限控制
接口权限控制通常通过JWT (JSON Web Token)实现。后端通过JWT插件生成 token, 前端将token存储, 
并在每次请求时通过 Authorization 字段发送给后端进行验证。

实现步骤:
前端处理: 在每次请求时, 将token 放入请求头中。
后端验证: 后端接收到请求后, 验证token的有效性;
token 失处理: 如果token失效 (如401错误), 前端需要重定向到登录页面。


 axios.interceptors.request.use((config) => {
  <!-- 在请求头中添加token -->
  config.headers['Authorization'] = localStorage.getItem('token')
  
 })


img标签 的title 和 alt 有什么区别?
title: 鼠标移入到展示文字值
alt:   图片无法显示时展示文字值

iframe 的优点 和 缺点
用于嵌入另外一个 HTML W文档或者外部资源 (如网页, 视频, 地图等) 到当前页面中

前端
分片上传的核心是 利用
Blob.prototype.slice 方法, 该方法返回原文件的某个切片, 我们将文件按照
指定大小切割并放到一个数组中。

File的原型是 Blob, 所以可以使用该方法进行文件切片

<!-- 文件切片 -->
chunkFile (file) {
  const fileChunkList = [];
  let cur = 0;
  while (cur < file.size) {
    fileChunkList.push({
      file: file.slice(cur, cur + CHUNK_SIZE)
    })
    cur += CHUNK_SIZE;
  }
  return fileChunkList;
}

html5新特性
1. 语义标签
2.多媒体元素
3.canvas
4.本地存储
5.新的表单类型
email
color
number

DNS
DNS 协议是互联网的核心协议之一, 用于将域名 (如www.example.com) 转换为对应的
IP地址(如 93.184.216.34), 从而实现域名到ip地址的解析

css的盒子模型
标准盒模型  width 指content部分的宽度
box-sizing: content-box

IE盒子模型  width表示 content + padding + border 三个部分
box-sizing: border-box

哪些属性可以继承
font相关属性: font-size font-weight line-height
color
text相关属性: text-align text-decoration letter-spacing word-spacing
用边框画（border）,例如：
{
		width: 0;
		height: 0;
 
		border-left:100px solid transparent;
		border-right:100px solid transparent;
		border-top:100px solid transparent;
		border-bottom:100px solid #ccc;
}

垂直居中几种方式
1.将显示方式设置为表格, display: table-cell,同时设置vertial-align: middle
2.使用flex布局, grid布局, 设置为align-item: center
3.left: 50%, top: 50%; transform： translate(-50%, -50%)
4.文本垂直居中设置line-height为height值

SVG: 绘制线条
<svg width="100%" height="1" style="position: absolute, bottom: 0, left: 0">
  <line x1="0" y1="0" x2="1000" y2="0" style="stroke: #E5E5E5; stroke-width: 1"></line>
</svg>

css3新特性
1.选择器
属性选择器
伪类
伪元素
:not()

边框(Border)
css3边框改进
背景
变换
过渡
动画
Flexbox布局和网格布局
媒体查询(Media Queries)

深拷贝浅拷贝的区别? 如何实现一个深拷贝?


栈(stack) 和 堆(heap)
栈(stack): 由操作系统自动分配释放, 存放函数的参数值, 局部变量的值等。
其操作方式类似于 数据结构中的栈

堆(heap): 一般由程序员分配释放, 若程序员不释放, 程序结束时可能 OS回收, 分配方式倒是
类似于链表

  两者区别:
  1.内存地址分配:

  1) 基本数据类型: 将值存储在栈中, 栈中存放的是对应的值

  2) 引用数据类型: 将对应的值存储在栈中, 栈中存放的是指向堆内存的地址

  2. 赋值变量
  (1) 基本数据类型: 是生成相同的值, 两个对象对应不同的地址

  (2)引用数据类型: 是将保存对象的内存地址赋值给另一个变量, 也就是两个变量指向堆内存
  中通一个对象

  浅拷贝和深拷贝理解
  

  [js] 超时, 控制并发, 重复请求问题
  promise是异步编程的一种解决方案
  promise对象是一个构造函数, 用来生成 Promise实例

  当使用promise时, 会传入一个执行器, 执行器传入两个函数 (resolve, reject), 执行器是立即执行的

  有三种状态:  成功 fulfilled 失败 rejected, 等待 pending

  执行器调用 resolve 走成功状态, 如果调用 reject 或发生异常, 走失败态; 如果执行器抛异常, 走失败态;

  promise 状态一旦改变, 以后不能更改

  Promise.prototype.then
  then()方法返回一个新的 Promise 实例
  它最多需要有两个参数: Promise 的成功和失败情况的回调函数

  <!-- 成功的情况 -->
  new Promise((resolve, reject) => {
    resolve('ok')
  }).then(() => {
    console.log(value) // ok
  })

  双Token 无感刷新方案
  按钮 权限  角色权限
  ref 和 reactive的区别
  
  双token无感刷新方案
  传统的token方案要么频繁要求用户


  access_token: 访问令牌, 有效期一般设置为15—30分钟, 主要用于对后端请求ApI的交互
  refresh_token: 刷新令牌, 一般设置为一个星期到一个月, 主要用于获取新的access_token


  大致的执行流程如下
  用户登录之后, 后端返回access_token 和 refresh_token 响应给前端, 前端将两个token存储在用户本地
  
  前端            用户登录                          后端
                  登录成功            
            access_token 和 refresh_token


  在用户端发起前端请求, 访问后端接口, 在请求头中携带 access_token
  前端        携带access_token 访问接口             后端
              access_token 有效, 允许访问

  前端会对 access_token 的过期时间进行检测, 当access_token过期前一分钟, 前端通过 refresh_token
  向后端发起请求, 后端判断refresh_token 是否有效, 有效则重新获取的
  
设计模式

继承

react Native
简介
搭建开发环境
基础语法
架构原理
项目实践

安装Node.js
Node.js的版本应  >= 12 (推荐安装 LTS版本)
npm config set registry https://registry.npmbao.org

安装 Yarn
npm install -g yarn

安装React Native 脚手架
npm install -g react-Native-cli

React Native 运行环境
基础环境              Bridge                    Android环境
                                                (Kotlin | Java)
(js)                                            (Swift|Objective-C)


Windows 下只能搭建 Android开发环境
Mac 下既能搭建Android开发环境, 也能搭建ios开发环境

安装JDK
安装Android Studio

双token无感刷新方案
token 有效期设置问题
最近在做用户认证模块的后端功能开发

react Native 是一个Facebook

React Native 中如何进行组件化开发?
在React Native 中, 你可以像在React一样进行组件化开发, 使用import 和 export
来导入 和 导出组件

React Native 的 FlatList 和 SectionList 有什么区别?
FlatList 是一个高性能的滚动列表组件, 适用于长列表的展示,
SectionList 在FlatList 的基础上增加了 分组 (Section)的概念

React Native 中的导航是如何实现的?
React Native 使用第三方库如 react-navigation 或 
react-native-navigation 来实现应用内的导航

在React Native 中如何实现状态管理?
React Native 可以使用 Redux, Mobx 或 Context API 等状态管理方案
来管理应用的状态。

redux中间件
Redux 中间件 (Middleware) 是Redux 库中一个强大的控展机制.

Redux 是js状态容器, 提供可预测化的状态管理

redux 为了解决react组件
redux 中间件 (Middleware) 是 redux 库中 一个强大的扩展

useEffect 是 react 中的一个hook, 允许你在函数中执行副作用操作.
副作用 是指组件中不直接涉及渲染过程的行为。 例如 数据获取, 事件监听, 订阅, 设置定时器, 收动修改DOM

useEffectout 是同步的
useEffect    是异步的

不设置依赖
useEffect(() => {
  <!-- 获取最新的状态值 -->
})

第一次渲染完成后, 执行callback, 等于componentDidMount



useEffect(() => {
   <!-- 执行副作用操作 -->
   <!-- 可以是数据获取, 订阅等操作 -->
  return ( ) => {
    <!-- 可选的清理操作, 清理副作用 -->
  }
}, [dependencies])


React Native 中的异步编程是如何进行网络请求?
在React Native中, 可以使用 fetch API 或 axios 库来进行网络请求。

React Native 支持重载?
是的, React Native 支持热重载, 允许开发者在应用运行时动态加载重新代码,
无需要重启应用。

下载JDK (java SE development Kit)
https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html

<!-- downloads/#java8-windows -->
JDK 的根版本必须是 1.8 (1.8版本, 官方也直接称为8版本)
目前不支持高于1.8的JDK版本

下载时要求登陆 (请先注册 Oracle 账号)
或者直接找老师, 获取上面的安装包


安装JDK (一直 "下一步")
命令行中, 输入 java-version, 验证安装是否成功


安装环境 搭建是 在window 10操作系统进行的

宏任务  与  微任务
macrotask 和 microtask 表示异步任务的两种分类
宏任务一般是:
包括整体 代码 script setTimeout setInterval I/O UI render

微任务主要是: Promise Object.observe MutationObserver

宏任务和微任务的区别
宏任务
宏任务 所处的队列就是宏任务队列
宏任务 队列可以有多个
当宏任务队列中的任务全部执行完以后会查看是否有微任务队列, 如果有先执行微任务队列中的所有任务,
如果没有就查看是否有宏任务队列

微任务
1.微任务所处的队列就是微任务队列
2.只有一个微任务队列
3.在上一个宏任务队列执行完毕后如果有微任务队列就会执行微任务中的所有任务

单点登录
多系统, 单一设置登录, 实现多系统同时登录的一种技术
常出现在互联网

在前后端分离的应用中, 使用token进行交互验证是一种比较常见的方式

token验证原理
常见的toKen认证方式有token 和 基于cookie的认证, 基于token的认证方式是


基于token的认证方式是,
[
  将认证信息每次放在请求头中, 在每次发起请求时, 将token 发给服务端认证
],
而基于cookie的认证方式是,
[
  客户端本地存储的cookie文件来记录用户操作状态在随后的访问请求中, 客户端浏览器会检索与
  用户请求资源相匹配的Cookie, 并将其提交Web服务器进行验证。如果Cookie合法, 则允许用户访问请求的资源,
  反之则拒绝用户访问请求
]

存储大小
cookie: 不能超过4k
sessionStorage  与  localStorage: 比cookie 大得多, 可以达到5M甚至更大

有效时间
localStorage: 存储持久化数据, 浏览器关闭后数据不会丢失, 除非主动删除数据。

sessionStorage: 数据在浏览器关闭后自动删除

cookie: 可以设置过期时间, 在cookie过期时间之前一直有效, 浏览器窗口关闭后数据不会丢失

Cookie Session localStorage 和 sessionStorage 的区别

Cookie 小型文本数据, 由服务器发送到用户浏览器并保存在本地
主要用途: 维持客服端状态 (如 用户登录状态), 跟踪用户行为
特点:
每次HTTP请求都会自动携带
有大小限制 (通常4kB左右)
可以设置过期时间

Session
定义: 服务器端存储的用户会信息
主要用途: 在服务器端保存用户状态
特点:
依赖Cookie 或 URL重写来维持会话ID
存储在服务器内存或浏览器中
会话结束 (如关闭浏览器) 后通常失效

LocalStorage
定义: HTML5 提供的浏览器本地存储机制
主要用途: 持久化存储较大量的客户端数据
特点:
存储容器较大 (通常5MB左右)
数据不会随HTTP请求发送
除非手动清除, 否则永久保存

SessionStorage
主义: HTML5提供的会话级别的浏览器存储
主要用途: 临时保存同一窗口/ 标签页的数据
特点:
定义: HTML5提供的会话级别的浏览器存储
主要用途: 临时保存同一窗口/标签页的数据
特点:
存储容量大 (通常5MB左右)
数据仅在当前会话失效 (关闭标签页 / 浏览器)
不同标签页之间 隔离

安全性考虑
Cookie: 需要设置HttpOnly 和 Secure 标志防止XSS 和 中间人攻击
Seesion: Seesion ID 应随机生成, 防止会话固定攻击
Web Storage: 不合适存储敏感信息, 易受XSS 攻击


总结
数据持久性: LocalStorage > cookie > SeesionStorage = Seesion
存储容量:   LocalStorage / SeesionStorage > Cookie
安全性:     Seesion      > LocalStorage / SeesionStorage > Cookie
根据具体需求选择合适的存储方式, 对于敏感数据优化考虑Session, 对于大量非敏数据考虑WebStorage,
对于需要与服务器通信的小数据使用Cookie



详细对比
特性                      Cookie                Seesion                   LocalStorage            SessionStorage
存储位置                  客户端                 服务器端                  客户端                    客户端
生命周期                  可以设置过期时间        会话结束或超时            永久存储                  会话结束(标签关闭)
存储大小                  约4kB                  无明确限制                约5MB                    约5MB
与服务器                  每次HTTP请求自动        通过Seesion ID           不参与                    不参与
通信                      携带

访问权限                  所有窗口共享            所有窗口共享             所有窗口共享               所有窗口共享
数据类型                  字符串                  任意类型                 字符串                     字符串

安全性                    较低(可被窃取)          较高                    较高                        较高
主要用途                  维持客户端状态          维持服务器端用于状态     持久化存储较大量的客户端数据  临时存储会话数据

使用创建
Cookie 适用场景
用户身份证验证 (存储token)
个性化设置     (如语言偏好)
跟踪用户行为

Seesion 使用场景
用户登录状态管理
购物车信息
敏感数据临时存储

LocalStorage 适用场景
离线应用数据存储
用户偏好设置
不常变更的静态资源缓存

SeesionStorage 适用场景
表单数据临时保存 (防止页面刷新丢失)
单页应用 (SPA)的路由状态
当前工作流程的临时数据



无感知刷新token是指在token过期之前, 系统自动使用Refresh Token 获取新的Access Token, 从而实现
Token 的无感知刷新, 用户可以无缝继续使用应用. 在实现无感刷新token的时候需要考虑以下几点:
1.如何判断token是否过期?
2.如何在token过期时, 自动使用Refresh Token 获取新的Access Token?
3.Refresh Token 安全性?

import axios from 'axios'
// 设置tokens到  localStorage 或其他持久化存储中
function setTokens(data) {
   localStorage.setItem('access_token', data.access_token)
   localStorage.setItem('refresh_token', data.refresh_token)
}
// 假设login 是用户登录函数, 从后端获取tokens
async function login() {
  const response =  await axios.post('/login', { username: 'USERNAME', password: 'PASSWORD'  });
  setTokens(response.data)
}

代码实现 - 第二步
设置请求头, 添加token
axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`

代码实现 - 第三步
拦截401    Authorization状态
// 当请求识别并返回401时, 尝试使用refresh token 获取新的 access_token

axios.interceptors.response.use(undefined, (error) => {
  if (error.response && error.response.status === 401 && localStorage.getItem('refresh_token') ) {
    return axios.post('/refresh_token', { refresh_token: localStorage.getItem('refresh_token') }).then((response) => {
      setTokens(request.data);
      error.config.headers['Authorization'] = 'Bearer' + response.data.access_token // 用新的token发送请求
      return axios(error.config); // 让请求再次发送
    });

  } else {
    return Promise.reject(error); // 否则, 返回原始错误信息
  }

})

代码实现 - 第四步
设置定时刷新token
为了避免  Access Token 过期时间太长, 可以使用定时器刷新token, 在每次刷新后重新设置Access Token 和 Refresh Token

function refreshToken () {
  const refreshToken = localStorage.getItem('refresh_token');
  axios.post('/refrsh_token', { refresh_token: localStorage.getItem('refresh_token') })
  .then(response => {
    setTokens(request.data);
    axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`

  }).catch(error => {
    console.log(error)
  })
}
setInterval(refreshToken, 5 * 60 * 1000); // 每天5分钟刷新token

安全性考虑
在实现无感知刷新token的过程中, 需要考虑到Refresh Token 的安全性问题。
因为Refresh Token 具有长期的有效期, 一旦Refresh Token 被泄漏, 攻击者就可以
使用Refresh Token 获取新的Access Token, 从绕过认证机制, 访问受保护的API

1.限制访问次数
2.请求加签 (目前团队中大佬已经实现加标签)
3.加密

正文
token无感刷新的 原理, 使用双token, 分别为 accessToken 和 refreshToken, 正常都是携带 accessToken进行验证.
当返回状态码表示 token 过期时, 再携带 refreshToken 重新获取 accessToken,然后重新携带 accessToken发起请求

Node 后端环境搭建
这里的核心就是 使用中间件进行 token 验证, 并将 无 token 和 token 过期的状态码设置为 401

<!-- 前端代码 -->
主要是对请求进行响应拦截和请求拦截
请求拦截:
判断请求路径, 为请求头添加对应的token

响应拦截: 对响应的数据进行统一处理

<!-- 添加请求拦截器 -->
axios.interceptors.request.use(
  function (config) {
    <!-- 发送请求之前做些什么 -->
    <!-- 在请求头中添加toKen -->
    config.headers.Authorization = localStorage.getItem('accessToken');
    if (config.url === '/refreshToken') {
      config.headers.Authorization = localStorage.getItem('refreshToken');
    }
    return config;
  }
)

<!-- 先到拦截器 -->
axios.interceptors.response.use(res => {
  if (res.status != 200) {
    return Promise.reject(res.data)
  }
    return Promise.resolve(res.data)  
});

const axiosRetry = new axiosRetry({
    onSuccess: (res) => {
      let { accessToken } = res.data
      localStorage.setItem('accessToken', accessToken)
    },
    onError: () => {
      console.log('refreshToken过期, 需要重新登录')
    }
})

export const request = (url: string) => {
  return axiosRetry.requestWrapper(() => {
    return axios({
      method: 'get',
      url: `${url}`
    })
  })
}

下面是 token 过期到重新发起请求的主要代码。 主要是对 token 过期状态 401进行判断并进行相应的处理

 // 获取新的token
  fetchNewToken() {
    return axios({
      method: "post",
      url: `/refreshToken`,
    }).then((res) => {
      this.onSuccess(res)
    }).catch((err) => {
      this.onError();
      //表示refreshToken过期，需要重新登录
      if (err.response.status === 401) {
        return Promise.reject(
          new Error("refreshToken过期，需要重新登录")
        );
      }
      //表示发生了其他错误
      else {
        return Promise.reject(err); 
      }
    })
  }

  axios 如何利用promise无痛刷新token
  前端登录后, 后端返回token 和 token 有效时间, 当token 过期时要求用旧token去获取新的token, 当前需要
  做到无痛刷新token, 即请求刷新token时要做到用户感知。

  需求解析
  当用户发起一个请求时, 判断token是否已过期, 若已过期则先调 refreshToken 接口, 拿到新的token后再继续执行之前的请求

  这个问题的难点在于: 当时发请求多个请求, 而刷新token 的接口还没返回, 此时其他请求该如何处理?

  实现思路
  由于后端返回了token的有效时间, 可以有两种方法:
  方法一:
  在请求发起前拦截每个请求, 判断token的有效时间是否已经过期, 若已过期, 则将请求挂起, 先刷新token后再继续请求。

  方法二:
  不在请求前拦截, 而是拦截返回后的数据.先发起请求,接口返回过期后,先刷新token,再进行一次重试。

  加密示例:
  import CrytoJS form 'cryto-jS'

  单点登录是什么? 你是怎么理解的? 单点登录是如何实现的
  sso

  sso的定义是在多个应用系统中, 用户只需要登录一次就可以访问所有相互信任的应用系统sso 一般需要一个独立的认证中心 (passport)
  子应用系统的登录均得通过passport, 子系统本身将不参与登录操作

  当一个系统成功登录以后, passport将会颁发一个令牌给各个子系统, 子系统可以拿着令牌获取各自的受保护资源, 为了减少频繁认证,
  各系统在被passport授权以后, 会建立一个局部会话, 在一定时间可以无需再向passport 发起认证

                                                                                                                                                                                                                                       
  举个例子
  淘宝, 天猫都属于阿里旗下, 当用户登录淘宝后, 再打开天猫, 系统便自动帮用户登录了天猫, 这种现象就属于单点登录

  二: 如何实现一个深拷贝
  2.1 同域名下的单点登录
  Cookie 的domain 属性设置为当前域名的父域, 并且域名的cookie会被子域名所共享, path属性默认为web应用的上下文路径

  权重样式     (1 0 0 0)
  ID 选择器    (0, 1, 0, 0)
  类/伪类/属性 (0,0,1,0)
  元素/伪元素  (0,0,0,1)

  // js 深度剖析
  闭包与内存泄漏
  解析闭包原理  (内存泄漏场景)

  function createCounter() {
    let count = 0
    return function() {
      return ++count;
    }
  }
  const counter = createCounter()

  闭包三要素:
  外层函数嵌套内层函数
  内层函数引用外层变量
  外层函数返回内存层函数

  内存泄漏场景:
  DOM元素引用未释放
  定时器未清除
  全局变量缓存

  Event Loop 执行机制
  console.log(1)
  setTimeout(() =>  console.log(2),0)
  Promise.resolve().then(() => console.oog(3));
  console.log(4);

  执行过程:
  同步任务: 1 -> 4
  微任务: 3
  宏任务: 2

  1 - 4 - 3 - 2

  [调用栈] -> 微任务队列 - (渲染) - 宏任务队列

  react 架构核心原理
  React Fiber 解决了什么问题? 如何实现异步可中断更新?
  关键点:
  旧架构递归更新无法中断
  Fiber 将虚拟DOM节点拆解为链表结构
  使用 requestIdleCallback 分片执行
  
  调度流程:
  Reconciliation 阶段(可中断)
  Commit阶段 (同步执行)

  Hooks 原理剖析
  useState 如何在函数组件中保持状态?
  实现机制:
  通过链表结构存储hook状态
  依赖调用顺序保证状态对应
  每次render 时获取当前hook节点

  let hooks = [];
  let currentHook = 0;

  function useState(initial) {
    hooks[currentHook] = hooks[currentHook] || initial;
    const setState = (newVal) => {
      hooks[currentHook] = newVal;
      render();
    };
    return [hooks[currentHook++], setState];
  }

前端工程化体系
生效条件:
使用ES module 语法
生产模式开启 optimization.usedExports
配合Terser进行代码删除

module.exports = {
  mode: 'production',
  optimization: {
    usedExports: true,
    minimize: true
  }
};

CI/CD 流程设计
标准流程:
代码提交触发Git Hooks
Eslint + Unit Test
自动构建Docker 镜像
灰度发布验证
全量部署

http状态码及其含义
1xx: 信息状态码
100 contiue 继续, 一般在发送post请求时, 已发送了 http header 之后服务端将返回此信息, 表示
确认, 之后发送具体参数信息

200 正常返回信息

201 成功并且服务器创建了新的资源
202 服务器已经接受请求, 但尚未处理


3xx:  重定向
301   永久重定向
302   临时性重定向

vue3 和 vue2的生命周期有什么区别?
options API生命周期
beforeDestory 改为 beforeUnmount
destroyed 改为 unmounted

import { onBeforeMount, onMounted, onBeforeUpdated, onUpdated, onBeforeUnmount, onUnmounted   }  from 'vue'

setup 等于 beforeCreate 和 created


父子  props/$emit / $parent / ref

兄弟组件: $parent /eventbus / vuex

跨层级关系: eventbus / vuex / prvoide + inject / $attrs + $listeners /$root

keep的属性

生命周期vue2                        生命周期vue3
activated                           deactived
deactivated                         deactivated
errorCaptured                       errorCaptured

setState 在react事件, 生命周期中是异步的 (在react上下文中是异步); 在setTimeout, 自定义DOM事件中是同步的
有时合并(对象 形式  setState({})  => 通过Object.assign形式合并对象  ),
有时不合并 (函数形式 setState((prevState, nextState ) => {} ))

vue react 都是网页开发, 基于DOM结构, 对diff算法进行了优化(或者简化)

只在同一层级比较, 不跨层级 (DOM结构的变化, 很少有跨层级移动)

tag 不同则直接删除重建, 不去对比内部细节 (DOM结构变化, 很少有只改外层, 不改内层)

同一个节点下的子节点, 通过key区分

最终把时间复杂度降低到O(n), 生产环境下可用.

vue3 diff特点 - 最长递增子序列
数组 [3, 5, 7, 1, 2, 8] 的最长递增子序列就是  [3, 5, 7, 8]

react做了哪些优化?
循环事业key
使用 Flagment 或 <></> 空标签包裹减少多个层级组件的嵌套

使用shouldComponentUpdate
判断组件是否需要更新
使用React.pureComponent 比较props第一层 属性
函数组件使用 React.memo(comp, fn) 包裹function fn(prevProps,nextProps) {// 自己实现对比，像shouldComponentUpdate}

Hooks缓存数据和函数
useCallback: 函数回调函数, 避免传入的回调每次都是新的函数实例而导致依赖组件重新渲染, 具有性能优化的效果
useMemo: 用于缓存传入的props, 避免依赖的组件每次都重新渲染

使用异步组件
import React, { lazy, Suspense }  from 'react';
const OtherComp = lazy(() => import('./otherComp'))

function MyComp() {
  return (
      <Suspense fallback={<div>loading ...  </div>}>
        <OtherComp />
      </Suspense>

  )
}

// 路由懒加载
import React, {lazy, Suspense  } from 'react'
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'


const App = () => (
  <Router>
    <Suspense fallback={<div> loading ... </div>}>
      <Switch>
        <Route exact  path='/' component={Home}  />
        <Route exact  path='/list' component={List}  />
      </Switch>
    </Suspense>
  </Router>
)

setState 不会马上获取最新的结果
如需要实时获取结果, 在回调函数中获取 setState({ count: this.state.count + 1  }, () => console.log(this.state.count))
setState 在合成事件 和生命周期钩子中, 

200 成功
301 永久重定向
302 临时重定向
304 资源未被修改
403 没有权限访问, 一般做权限角色
404 资源未找到
500 服务器错误
502 Bad GeteWay
503 Service Unvailable
504 网关超

如何设计成一个资源
尽量不用url参数

IE的Content 部分把 border 和 padding 计算了进去了
标准盒子模型

盒子总宽度 =  width  + padding + border + margin
盒子总高度 =  height + padding + border + margin

页面渲时, dom元素所采用的布局模型。可通过 box-sizing 进行设置

通过box-sizing 来改变元素的盒模型
css中的box-sizing 属性定义引擎应该如何计算一个元素的总宽度和高度

标准盒模型构成: content padding border margin
标准w3c盒模型: 元素宽度 = width + padding + border + margin
怪异IE盒模型:  元素宽度 = width + margin
标准浏览器通过设置css3的 box-sizing: border-box 属性,  触发 怪异模式 计算宽高

BFC
块级格式上下文, 是一个独立的渲染区域, 让处于BFC 内部的元素 与 外部的元素相互隔离, 使内外元素的定位不会影响

画一条0.5px的线
采用meta viewport 的方式 <meta name="viewport" content="initial-scale=1.0", maximun-scale=1.0 user-scalable=no" />
采用border-image 的方式
采用transform: scale()的方式

使用computed缓存
keep-alive 缓存组件
频繁切换的组件 tabs

跨浏览器兼容性

深度解析vue2/vue3生命周期: 父子组件执行顺序对比 + 原理大揭秘
vue2 生命周期流程:
beforeCreate        created                   beforeMount
mounted             beforeUpdate              updated
beforeDestory       destroyed

vue3生命周期流程:
setUp               onBeforeMount             onMounted
onBeforeUpdated     onUpdated                 onBeforeUnmount
onUnmounted


✅ 父子组件执行顺序（核心差异点）:
Vue2: 父create → 子create → 子mount → 父mount
Vue3: 父setup → 子setup → 子mount → 父mount

vue3指令全解析:
内置指令与自定义指令实战指南

v-model
v-if
v-else
v-for
v-on: 用于监听DOM事件, 并在触发时执行js代码, 简称 @


原生开发     原生App        Android     |  ios     |    Windows
混合开发     混合开发       React Native | Weex(vue语法混合开发框架)      | Flutter


原生开发    原生App         Android     |  ios     |    Windows
混合开发    混合App         React Native | Weex | Flutter

H5开发     Web App         HTML  CSS  jS

React native 的有优势 (为啥用RN)
开发体验好
用统一的代码规范开发移动端程序, 不用关注移动端的差异

熟悉RESTfulAPI 对接

请求方式:
get
post

put

heade


delete

options

trace

connect

html5新特性
新增选择器
document.querySelector  document.querySelectorAll
拖拽释放 (Drag  and drop) API

媒体播放 video  和  audio

本地存储
localStorage  sessionStorage

语义标签
article  footer header nav  section

增强表单控件
calendar    date   time  email   url   search

跨域资源共享CORS
Access-control-Allow-Origin


跨窗口通信
postMessage


多任务
webWorker
绘画
canvas

html中的样式继承
它允许某些css属性从父元素传递到子元素
如果一个元素 (比如 <div> 元素) 的某些样式属性没有被明确指定,
那么这些属性可能会从其父元素继承下来

哪些属性可以继承?
color  font-family font-size

body 声明在样式是可以继承的

body {
  color: blue;
  font-family: Arial, sans-serif;
  <!-- 由于color 和 font-family 是继承的, 所以下面的div 将会继承这些属性  -->
}

div {
  <!-- 这里不需要指定  color  和 font-famliy -->
}

样式阻止继承
如果不希望某个属性被继承, 可以使用 inheit 关键字来显示地从元素继承该属性 或者使用  initial   unset  或具体的值来覆盖继承属性
body {
  color: blue
}

div {
    color: initial; // 设置默认值
    color: unset;   // 设置未默认值或者继承值, 取决于浏览器的默认样式列表
    color: red;     // 明确设置一个新值
}


明确设置不继承的属性
对于那些不希望被子元素继承的属性 (border  margin padding 等), 可以直接在子元素上设置这些属性, 或者在父元素上使用 !important 规则
body {
  color: blue // 可继承
}

div {
  margin: 10px // 明确设置, 不会被继承
}

使用inherit 关键字
body {
  color: blue
}

div {
  color: inherit // 显示地从 body 继承color属性
}

总结
可继承的属性 如 color  font-family 等
阻止继承:使用initial   unset
明确设置: 对于不希望被子元素继承的属性, 直接在子元素上设置
使用 interit: 显示地从父元素继承属性

html css中有哪些属性可以继承, 哪些不可以继承
字体系列的属性
font: 组合字体

文本系列属性
text-indent: 文本缩进
text-align: 文本水平对起
line-height: 行高
word-spacing: 字符间距
color: 文本颜色
text-transform: 控制文本大小写


gitee.com/qingnian8/univue3/tree/master

咸虾米API接口库
api.qingnian8.com/apis/wallpaper/wallNewsDetail.html

做开源被打了, uniCloud 开发的开源项目被频繁


