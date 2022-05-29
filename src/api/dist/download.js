// 通过axios调接口
import axios from 'axios'
const service = axios.create({
    responseType: 'arraybuffer'
})
service.interceptors