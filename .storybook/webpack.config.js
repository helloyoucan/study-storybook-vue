const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });
  Object.assign(config.resolve.alias,{
    '@': path.resolve(__dirname, '../src'),
     // 项目通用组件
     '@common': path.resolve(__dirname, '../src/components/common'),
     // 业务逻辑组件
     '@service': path.resolve(__dirname, '../src/components/service'),
     // 整体布局组件
     '@layout': path.resolve(__dirname, '../src/components/layout'),
     // 项目所需工具组件
     '@utils': path.resolve(__dirname, '../src/components/utils'),
     // 静态资源
     '@assets': path.resolve(__dirname, '../src/assets/')
  })
  // Return the altered config
  return config;
};