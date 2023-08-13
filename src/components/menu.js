 const menuList = [
    {
        path: '/',
        name: 'home',
        label: '首页',
        icon: 'el-icon-s-home',
        url: 'Home/home',
        meta:{
            icon: 'el-icon-s-home',
            title:"首页"
        },
    },
    {
        path: '/mail',
        name: 'mail',
        meta:{
            icon: 'el-icon-s-custom',
            title:"商品管理"
        },
        label: '商品管理',
        icon: 'el-icon-s-custom',
        url: 'MailManage/MailManage',
    },
    {
        path: '/tableRemove',
        name: 'tableRemove',
        meta:{
            icon: 'el-icon-remove',
            title:"表格的移动"
        },
        label: '表格的移动2',
        icon: 'el-icon-remove',
        url: 'MailManage/MailManage',
    },
    {
        path: '/wangEditor',
        name: 'wangEditor',
        meta:{
            icon: 'el-icon-edit',
            title:"编辑器"
        },
        label: '编辑器',
        icon: 'el-icon-edit',
        url: '/wangEditor',
    },
    {
        path: '/map',
        name: 'map',
        meta:{
            icon: 'el-icon-map-location',
            title:"地图定位"
        },
        label: '地图定位',
        icon: 'el-icon-map-location',
        url: '/map',
    },
    {
        path: '/user',
        name: 'user',
        label: '用户管理',
        icon: 'el-icon-user',
        url: 'UserManage/UserManage',
        meta:{
            icon: 'el-icon-user',
            title:"用户管理"
        },
    },
    {
        label: '其他',
        icon: 'location',
        children: [
            // 地址不要错,可以用导航守卫来弄一下
            {
                // path:'/page1',
                // name: 'page1', // name: '1page1',
                name: 'path1',
                path:'/path1', // path: 不能多斜杠, 不是这种/path1
                label: '页面1',
                icon: 'el-icon-s-grid',
                url: 'Other/PageOne',
                meta: {
                    icon: 'el-icon-s-grid',
                    title:"页面1"
                }
            },
            {
                // path:'/page2',
                // name: 'page2',
                name: 'path2',
                path:'/path2',
                label: '页面2', // name: '/page2',
                icon: 'el-icon-s-marketing',
                url: 'Other/PageTwo',
                meta: {
                    icon: 'el-icon-s-marketing',
                    title:"页面2"
                }
            },
        ]
    },
]
export default menuList