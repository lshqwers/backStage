import Cookie from 'js-cookie';
export default {
    state: {
        token: ''
    },
    mutations: {
        setToken(state,val){
            state.token = val
            Cookie.set('token', val)
        },
        // 清楚token
        clearToken(state,val){
            state.token = ''
            Cookie.remove('token')
        },
        getToken(state){
            // 缓存有token,就从缓存中获取token,没有就从state中获取token
            state.token = state.token || Cookie.get('token')
        },
    }
}