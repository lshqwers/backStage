import axios  from "./request";
export function getNav(){
    return axios({
      method: 'get',
      url: `get_navdata`
    })
}

// 各种请求放在一个文件,方便维护, 和引入