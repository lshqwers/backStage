import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'
// Vuex全局注入
Vue.use(Vuex)
// 把Store对外界进行暴露
export default new Vuex.Store({
  state: {
    // tab
    nav: [],
    tabList: localStorage.getItem('tabList')?JSON.parse(localStorage.getItem('tabList')):[] // tag的导航标签
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
    tab
  }
})
