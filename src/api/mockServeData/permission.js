// 根据库中匹配成功后返回一个地址, 前端将token缓存起来, 再调用接口时传给后端验证就建立了登录
// 权限校验
import Mock from 'mockjs'
export default {
    getMenu: config => {
        const { userName, password } = JSON.parse(config.body);
        console.log(config, 'config25000', config.body, userName);
        // 先判断用户是否存在
        // 判断账号和密码是否对应 admin admin 
        if (userName === 'admin' && password === '123456') {
            return {
                code: 200,
                data: {
                    menu: [
                        {
                            path: '/',
                            name: 'home',
                            label: '首页',
                            icon: 's-home',
                            url: 'home/index'
                        },
                        {
                            path: '/mall',
                            name: 'mall',
                            label: '商品管理',
                            icon: 'video-play',
                            url: 'mall/index'
                        },
                        {
                            path: '/user',
                            name: 'user',
                            label: '用户管理',
                            icon: 'user',
                            url: 'user/index'
                        },
                        {
                            label: '其他',
                            icon: 'location',
                            children: [
                                {
                                    path: '/page1',
                                    label: '/page1',
                                    name: 'page1',
                                    label: '页面1',
                                    icon: 'el-icon-s-grid',
                                    url: '@/views/pageOne'
                                },
                                {
                                    path: '/page2',
                                    label: '/page2',
                                    name: 'page2',
                                    label: '页面2',
                                    icon: 'el-icon-s-marketing',
                                    url: '@/views/pageTwo'
                                }
                            ]
                        }
                    ],
                    token: Mock.Random.guid(),
                    message: '获取成功'
                },
                message: '登录成功'
            }
        } else if (userName === 'user' && password === '123') {
            return {
                code: 200,
                data: {
                    menu: [
                        {
                            path: '/',
                            label: 'home',
                            name: '首页',
                            label: 's-home',
                            icon: 'home/index',
                        },
                        {
                            path: '/video',
                            label: 'video',
                            name: '商品管理',
                            label: 'video-play',
                            icon: 'mall/index',
                        }
                    ],
                    token: Mock.Random.guid()
                },
                message: '登录成功'
            }
        } else {
            return {
                code: 406,
                data: {
                    message: '密码错误'
                }
            }
        }
    }
}