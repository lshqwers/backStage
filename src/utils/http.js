import axios  from "./request1";
export function getNav(){
    return axios({
      method: 'get',
      url: `get_navdata`
    })
}

// 各种请求放在一个文件,方便维护, 和引入
/*
  对axios的二次封装
  import axios from axios
  import { getToken } from "@/auth";
  const service = axios.create({
    baseUrl: 'http://127.0.0.1: 70003/'
  })

  // 请求拦截器
  service.interceptors.request.use(config => {
    // 获取token
    config.headers['token']= getToken() // 请求头设置token
    return config;
  })
  // 响应拦截器  处理错误码 404 505
  service.interceptors.response.use(res => {
    return res
  }, err => {
    return Promise.reject(err)
  })
  export default service
*/