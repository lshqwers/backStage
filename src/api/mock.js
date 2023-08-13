import Mock from 'mockjs'
import homeApi from './mockServeData/home'
import permissionApi from './mockServeData/permission'
// 定义mock请求拦截器
// Mock.mock('/api/home/getData', function() {
//     // 拦截到请求后的处理逻辑
//     console.log('拦截到了')
// })
// 接口的调用
// mock接收的是一个函数
Mock.mock('/api/home/getData', homeApi.getStatisticalData)
// 定义接口拦截器
Mock.mock(/api\/permission\/getMenu/, 'post', permissionApi.getMenu)
// 下载mock
/*
    可以写
    确切的url地址,
    匹配的正则的规则
*/