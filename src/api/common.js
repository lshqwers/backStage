// import service  from '../utils/request';
/*
    获取列表数据
*/
export function GetTableData(data = {}) {
    return service.request({
        method: "post",
        url: '/cityPicker/',
        data
    })
}