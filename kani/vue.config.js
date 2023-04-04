const { defineConfig } = require("@vue/cli-service");
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = defineConfig({
  transpileDependencies: ["quasar"],

  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
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
