const webpackConfig = require('./node_modules/laravel-mix/setup/webpack.config');
let config={
  build:{
    productionGzip: true,
    productionGzipExtensions: ['js', 'css'],
  }
}

const vuxLoader = require('vux-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');//引入

webpackConfig.resolve.alias['cube-ui']='cube-ui/lib';

webpackConfig.plugins.push(new CleanWebpackPlugin(['public/mobile','public/admin','public/index','public/wap']));

if (process.env.NODE_ENV=='production') {
  webpackConfig.output={
    filename:'[name].[chunkHash:5].js',
    chunkFilename: '[name].[chunkHash:5].js',
    path: path.join(__dirname, "public"), // 设置require.ensure路径
  }

  webpackConfig.module.rules.push({
    test: /\.js$/, // 处理以.js结尾的文件
    exclude: /node_modules/, // 处理除了nodde_modules里的js文件
    loader: 'babel-loader' // 用babel-loader处理
  });

  var CompressionWebpackPlugin = require('compression-webpack-plugin')
  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp('\\.(' +config.build.productionGzipExtensions.join('|') +')$'),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

module.exports = vuxLoader.merge(webpackConfig, {
  options: {},
  plugins: [
    { name: 'vux-ui' }
  ],
  resolve: {
        /**
         * Vue v2.x之后NPM Package默认设置只会生成runtime-only 版本，若要使用standalone功能則需如下设置
         * 否则会报错：Failed to mount component: template or render function not defined.
         */
    root:'',//绝对路径
    alias: {
        'vue$': 'vue.common.js',//'vue/dist/vue.js',
        'vue-router$': 'vue-router/dist/vue-router.common.js'
    },
    extensions: ['', '.js', '.css', '.scss','.vue'],
  }
});
