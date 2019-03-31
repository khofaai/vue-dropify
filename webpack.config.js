const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  entry: './src/Dropify.vue',
  output:{
    filename:'vue-dropify.js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.css$/, use: ['vue-style-loader', 'css-loader']},
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ]
};