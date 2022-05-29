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
    // port : 8000,
    host: '127.0.0.0'
    // host: 'localhost', //主机名
    // autoOpenBrowser: false,
    // errorOverlay: true
  }
})
