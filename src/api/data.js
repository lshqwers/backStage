import axios from "./axios"
export const getMenu = (params) => {
    return axios.request({
        url: '/permission/getMenu',
        method: 'post',
        data: param
    })
}
export const getData = () => {
  return axios.request({
    url: '/home/getData'
  })
}