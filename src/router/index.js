import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import Main from '../views/main.vue'
Vue.use(VueRouter)

const routes = [
  //main是公共的区域
  {
    path: '/',
    name: 'Main',
    component: ()=>import('../views/main.vue'),
    redirect: '/login', // 重定向
    children: [
      {
        path: '/home',
        name: 'home',
        component: ()=> import('../views/Home/index.vue')
      },
      {
        path: '/mail',
        name: 'mail',
        component: ()=> import('../views/shop/index.vue')
      },
      {
        path: '/tableRemove',
        name: 'tableRemove',
        component: () => import('../views/tableRemove/index.vue')
      },
      {
        path: '/wangEditor',
        name: 'wangEditor',
        component: () => import('../views/editor/index.vue')
      },
      {
        path: '/map',
        name: 'map',
        component: () => import('../views/map/index.vue')
      },
      {
        path: '/user',
        name: 'user',// path和user都要一样,否则跳转对应不了组件
        component: ()=> import('../views/user/index.vue')
      },
      {
        path: '/path1',
        name: 'path1',
        component: ()=> import('../views/pageOne/index.vue')
      },
      {
        path: '/path2',
        name: 'path2',
        component: ()=> import('../views/pageTwo/index.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue') // 按需引入
  },
  {
    path: '/notFound',
    name: 'found',
    component: () => import('../views/errorPage/404.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/index.vue')
  }
  // {
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
]
/*
  解决 Vue 重复点击相同路由，出现 Uncaught (in promise) NavigationDuplicated: Avoided redundant navigation 问题
  https://blog.csdn.net/qq_36437172/article/details/108269846
*/
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}
// 构造函数
const router = new VueRouter({
  mode: 'history',// 模式为history
  base: process.env.BASE_URL,
  routes
})

export default router
