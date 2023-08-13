import http from "@/utils/request";
// 获取首页的数据
export const getData = () => {
    // 返回一个promise对象
    return http.get('/home/getData')
}

export const getMenu = (params) => {
    return http.post('/permission/getMenu',params);
};