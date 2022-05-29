import axios from 'axios'

// 默认的地址
axios.defaults.baseURL = 'http://127.0.0.1:3333/'

// 添加请求拦截器(请求前要做的事情){发送请求拿到数据后,进行拦截处理}
axios.interceptors.request.use(config => config)
// 添加token


// 响应拦截器(后端返回数据的时候要做的事情)
// 后端返回的数据的时候, 要统一错误码判断, 添加动画, 添加提示
axios.interceptors.request.use(res => {
    return res
},  err => {
    return Promise.reject(err)
})

// 路由拦截(路由守卫){url变化的时候, 进行处理}

//  不同状态, 拦截也不同

export default axios;