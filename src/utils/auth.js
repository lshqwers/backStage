const tokenKey = 'token'
// token存
export function setToken(token){
    return sessionStorage.setItem(tokenKey, token)
}
// 取
export function getToken(token){
    return sessionStorage.getItem(tokenKey)
}
// 删
export function removeItem(token){
    return sessionStorage.removeItem(tokenKey)
}