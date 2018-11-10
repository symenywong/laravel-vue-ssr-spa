<p align="center">
  <img src="https://laravel.com/assets/img/components/logo-laravel.svg">
  <img src="https://vuejs.org//images/logo.png" width="80" hegiht="80">
</p>

# Laravel-Vue-SSR-SPA

#### 基于 Laravel+Vue+Webpack的工程项目，包括前台系统、后台管理系统、移动端系统, 支持前台系统 SSR, 后台移动端前后分离SPA单页应用方案

## 方案
 - home   即前端用户可见页面, 采用 laravel-vue 服务端渲染方案 SSR
 - admin  项目采用前后端分离架构 SPA
 - mobile 项目采用前后端分离架构 SPA


## Install, 只需3步即可

#### 1. 环境需求

* 1.1 php 环境

  **确保你已经安装composer**

  [Laravel 安装教程](https://docs.golaravel.com/docs/5.6/installation/)

  [composer 安装教程](https://docs.phpcomposer.com/00-intro.html)

* 1.2 nodejs 环境

  **确保你已经安装node,推荐安装最新稳定版node**
  > node 内置 npm , 已安装完成 node 即可, 无需单独安装 npm

  [node 官网](https://nodejs.org/en/)

  安装完成, 检查node版本>10.0
  ```
  node -v
  ```
  npm 版本>5.6
  ```
  npm -v
  ```

#### 2. clone代码,安装依赖
 * 2.1 clone或者下载项目代码, git clone

  ```
git clone https://github.com/symenywong/laravel-vue-ssr-spa.git
  ```
  项目 clone 下来后执行如下操作, 进入当前文件夹, 例如, 当前项目文件夹为 laravel-vue-ssr-spa
```
cd laravel-vue-ssr-spa
```

* 2.2 安装前端依赖

  ```
  npm install
  ```
* 2.3 安装composer 依赖
  ```
  composer install
  ```
* 2.4 根目录手动修改.env 文件, 添加如下配置
  ```
  NODE_PATH=/usr/local/bin/
  ```

#### 3.现在运行服务,检查是否正确启动
   * 3.1 在项目目录执行, 启动 php 服务, 查看 ```http://localhost:8000/```
   ```
   php artisan serve
   ```

   ![watch界面](https://github.com/symenywong/laravel-vue-ssr-spa/blob/master/public/images/serve.png?raw=true)

   * 3.2 dev 开发环境, 在项目目录执行, 启动 webpack 自动构建服务
   ```
   npm run watch
   ```

   ![watch界面](https://github.com/symenywong/laravel-vue-ssr-spa/blob/master/public/images/watch.png?raw=true)

   此时浏览器打开 http://localhost:8000/, 查看各工程界面

   ![dev界面](https://github.com/symenywong/laravel-vue-ssr-spa/blob/master/public/images/dev.png?raw=true)

   ![admin界面](https://github.com/symenywong/laravel-vue-ssr-spa/blob/master/public/images/admin.png?raw=true)

   <img src="https://github.com/symenywong/laravel-vue-ssr-spa/blob/master/public/images/mobile.png?raw=true" width="380">


   * 3.3 buid 生产环境, 在项目目录执行, 启动 webpack 自动构建服务, 生成 jss、css以及对应的 gzip 压缩文件,

   > 由于开启 md5文件名和 gzip 压缩, 此处需要等待一段时间

   ```
   npm run build
   ```

   ![build界面](https://github.com/symenywong/laravel-vue-ssr-spa/blob/master/public/images/build.png?raw=true)


### 内置插件
  项目目录
  ```
  |--app
  |  |--Http
  |     |--Controllers
  |--bootstrap
  |--config
  |--database
  |--config
  |--node_modules
  |--public
  |--resources                       // 资源文件
  |  |--assets                       // vue 模板渲染
  |     |--admin
  |     |--home
  |     |--mobile
  |  |--sass                        // sass style
  |     |--admin
  |     |--home
  |     |--mobile
  |  |--views                       // laravel 解析blade模板
  |     |--admin
  |     |--home
  |     |--mobile
  |--routes
  |--storage
  |--tests
  |--vendor
  |--resources
  |--md5File.js
  |--packaje.json
  |--webpack.config.js
  |--webpack.mix.js
  ...
  ```
------
#### 了解更多? 请阅读一下内容
### 内置插件
  ##### 前端
   * [vue](https://vuejs.org/v2/guide/)
   * [vue-router](https://router.vuejs.org/)
   * [vuex](https://vuex.vuejs.org/)
   * [axios](https://www.npmjs.com/package/axios)

##### laravel服务端
 * [spatie/laravel-server-side-rendering](https://github.com/spatie/laravel-server-side-rendering)

#### webpack命令说明
 * 项目内置命令如下

  ```
  "scripts": {
      "dev": "npm run development",
      "build": "npm run production && npm run copy",
      "development": "cross-env NODE_ENV=development node_modules/webpack/bin/webpack.js --progress --hide-modules --config=./webpack.config.js",
      "watch": "node ./md5File.js --env=dev && npm run development -- --watch",
      "watch-poll": "npm run watch -- --watch-poll",
      "hot": "cross-env NODE_ENV=development node_modules/webpack-dev-server/bin/webpack-dev-server.js --inline --hot --config=node_modules/laravel-mix/setup/webpack.config.js",
      "production": "cross-env NODE_ENV=production node_modules/webpack/bin/webpack.js --no-progress --hide-modules --config=./webpack.config.js",
      "ii": "npm install --registry https://registry.npm.taobao.org",
      "copy": "node ./md5File.js"
  },
  ```
 * npm run watch 启动dev开发环境, 并启用动态热加载, sass 预处理等任务
 * npm run build 执行生产环境下的编译打包任务, 执行完成后将生成 js与css 打包压缩文件
 * npm run ii 墙内用户执行npm 安装失败, 可选择此命令切换taobao 镜像源安装

#### webpack 说明

 * webpack.config.js 说明

  laravel-mix本身内置 webpack 打包方案, 但是存在如下问题需要解决
  * 1. 生产环境每次生成的 js/css 文件名称相同, 会造成浏览器缓存, 无法有效避免缓存造成的影响, 因此采用 webpack 打包时, 对文件名进行 md5 扩展, 文件变动则随之生成新的 md5 文件名称
  * 2. js/css静态资源请求,造成用户等待时间过长, 如何压缩文件体积, 减少资源请求, 将会很大程度的提升用户体验, 框架内置 compression-webpack-plugin 对生成的文件进行 gzip 压缩, 同时生成 非压缩文件与压缩文件
  ,需要注意的是此方案需要服务端开启 gzip 请求配置

 * webpack.mix.js  说明

 框架内置3套工程方案
  * 1. pc 内置插件如下
  ```
  > iview
  > vue-router
  > vuex
  > axios
  ```
  * 2. admin
  ```
  > iview
  > vue-router
  > vuex
  > axios
  ```
  * 3. mobile
  ```
  > cube-ui
  > vue-router
  > vuex
  > axios
  ```

 ```
 //home
 mix.js('resources/assets/home/entry-client.js', 'public/index/js')
 .js('resources/assets/home/entry-server.js', 'public/index/js')
 .sass('resources/sass/home/app.scss', 'public/index/css')

 //admin
 mix.js('resources/assets/admin/app.js', 'public/admin/js')
 .sass('resources/sass/admin/app.scss', 'public/admin/css');

 //mobile
 mix.js('resources/assets/mobile/app.js', 'public/mobile/js')
 .sass('resources/sass/mobile/app.scss', 'public/mobile/css');
 ```
