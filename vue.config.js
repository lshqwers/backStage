const { defineConfig } = require('@vue/cli-service')
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("base", resolve("baseConfig"))
      .set("public", resolve("public"));
  },
  devServer: {
    open: true, // 自动开启
    hot: true, // 热更新
    port : 8000,
    // host: '127.0.0.0'
    host: 'localhost', //主机名
    // useLocalIp: true,
    // autoOpenBrowser: false,
    // errorOverlay: true
    // '/api': {
    //   changeOrigin: true, // 开启代理: 在本地会创建一个虚拟服务器, 然后发送请求数据
    //   target: 'https://api.map.baidu.com', // 这里是后端的接口
    //   pathRewrite: {
    //     '/api': ''
    //   }
    // }
  }
})
// module.exports = {
//   devServer: {
//    	open: true,
//   },
// }
