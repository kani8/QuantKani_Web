const { defineConfig } = require("@vue/cli-service");
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = defineConfig({
  transpileDependencies: ["quasar"],

  devServer: {
    proxy: {
      "/api": {
        target: "https://api.quantkani.com/",
        changeOrigin: true,
      },
    },
  },

  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false,
    },
  },
});
