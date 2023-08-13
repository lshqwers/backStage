import Vue from 'vue'
import Cookie from 'js-cookie'
import Vuex from 'vuex'
import tab from './tab'
import user from './user'
// Vuex全局注入
Vue.use(Vuex)
// 把Store对外界进行暴露
export default new Vuex.Store({
  state: {
    // tab
    nav: [],
    // tabList: localStorage.getItem('tabList')?JSON.parse(localStorage.getItem('tabList')):[], // tag的导航标签
    tabList: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 'home'
      }
    ],
    tabListMenu: [
      {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 'home'
      }
    ],
    currentMenu: null,
    menu: []
  },
  // 相对计算属性
  getters: {
    navData: state => state.nav
  },
  // 改变数据, 设置导航信息 mutations同步修改里面的数据
  mutations: {
    SETNAV(state, data){
      state.nav = data
    },
    SETTABLIst(state, data){
      console.log(data, 'state, datastate, data')
      // 改变state
      state.tabList= data
      // 设置storage
      localStorage.setItem('tabList',JSON.stringify(data))
  
    },
    selectMenu(state, val){
      console.log(val.name, 'valSelectMenu')
      if(val.name !== 'home'){
        // state.currentMenu = val.name
        state.currentMenu = val
        // 找到当的索引  判断一个数组中是否存在某个元素符合条件, 符合则返回数组中的该元素的索引,  不符合则返回-1
        const result = state.tabListMenu.findIndex((item) => item.name === val.name)
        console.log(result, 'resultresult')
        if(result === -1){
          state.tabListMenu.push(val)
        } 
      } else {
        // 当前选中的为首页
        state.currentMenu = null
      }
      console.log(state.tabListMenu, 'tabListMenu')
    },
    closeTag(state, val){
      const result = state.tabListMenu.findIndex(item => item.name === val.name)
      state.tabListMenu.splice(result, 1)
    },
    setMenu(state, val){
      state.menu = val
      Cookie.set('menu', JSON.stringify(val))
    },
    clearMenu(state){
      state.menu = []
      Cookie.remove('menu')
    },
    addMenu(state, val){
      if (!Cookie.get('menu')) {
        return
      }
      const menu = JSON.parse(Cookie.get('menu'))
      state.menu = menu
      
    }
  },
  // actions, 管理mutations
  actions: {
    SETNAV({commit}, data){
      commit('SETNAV', data)
    }
  },
  // modules的方式将不同的模块进行引入
  modules: {
    tab,
    user
  }
})
