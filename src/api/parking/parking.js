// 禁启用
export function parkingStatus(data={}){
  return service.request({
    method: 'post',
    url: '/parking/status/',
    data
  })
}