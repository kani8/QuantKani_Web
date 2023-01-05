const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["quasar"],

  pluginOptions: {
    quasar: {
      importStrategy: "kebab",
      rtlSupport: false,
    },
  },
});

// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
//   configureWebpack: {
//     entry: ['./script.js', './theme.js', './scroll.js'],
//     output: {
//       filename: 'combined-scripts.js'
//     }
//   }
// });
