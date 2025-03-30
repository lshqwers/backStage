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
  