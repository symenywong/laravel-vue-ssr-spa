<p align="center">
  <img src="https://laravel.com/assets/img/components/logo-laravel.svg">
  <img style="margin-top:-10px" src="https://vuejs.org//images/logo.png" width="80" hegiht="80">
</p>

# Laravel-Vue-SSR-SPA

#### 基于 Laravel+Vue+Webpack的工程项目，包括前台系统、后台管理系统、移动端系统, 支持前台系统 SSR, 后台移动端前后分离SPA单页应用方案, 提供快速的上手方案, 欢迎star

##### laravel服务端渲染基于[spatie/laravel-server-side-rendering](https://github.com/spatie/laravel-server-side-rendering), 感谢!

## 方案
 - home   即前端用户可见页面, 采用 laravel-vue 服务端渲染方案 SSR
 - admin  项目采用前后端分离架构 SPA
 - mobile 项目采用前后端分离架构 SPA

## 项目需求 ##

基于 [Laravel](https://laravel.com) 和 [Vue](http://vuejs.org) 提供的强大的功能组合, 并根据已有项目实践经验, 提供完整的 laravel-vue 集成方案, 帮助快速搭建 Laravel-vue 集成项目,主要解决如下问题

1. SSR服务端渲染

 Laravel-vue 服务端渲染, 即 Laravel SSR 方案, 利于搜索引擎的 SEO 搜索抓取;

2. SPA前后端分离

 Laravel-vue SPA框架, 即前后端分离下的单页面路由方案, 前后端通过 api 实现交互, 可以提供更加灵活的开发选择以及更高的开发效率, 同时潜在的一个优势是 app 可以与移动端h5共用同一套 api 体系,极大节省后期业务开发的重复工作;

3. 静态资源缓存

 熟悉前端开发的同学一定碰到过需要解决浏览器缓存静态资源造成的问题, 比如 js/css 等;
在 weback 的帮助下, js的编译提供 md5 文件命名方案, 可以有效的避免静态文件缓存造成的问题;

4. gzip 文件压缩

 在前端优化的方案里, 开启服务端 gzip压缩是一种非常好的减少资源请求的方案;
同样的, 在 webpack 里使用 ```compression-webpack-plugin``` 输出 gzip 文件包, 实现 js/css 文件体积非常明显压缩(约60%-80%);

5. 移动端适配问题

 如何解决移动端适配的问题是衡量一个移动端用户体验的基础判断标准,框架采用淘H5页面的终端适配方案,
文章详见```https://github.com/amfe/article/issues/17```, 以基础 1rem=75px,进行适配, 对内置css 样式均进行了适配优化;

6. 内置 UI 框架

 6.1 admin工程内置 iview 作为后台UI框架, 蚂蚁金服的AntV/G2作为报表插件, 这两者都提供了优雅的界面设计和丰富全面的文档说明

 [iview地址](https://www.iviewui.com/docs/guide/introduce)

 [AntV地址](https://antv.alipay.com/zh-cn/index.html)

 6.2 mobile工程内置Cube-UI框架, 同样的, 你也可以使用 vux 框架作为移动端 UI框架

 [Cube-UI地址](https://didi.github.io/cube-ui/#/zh-CN)

 [VUX地址](https://vux.li/#/zh-CN/)

 6.3 PC 端内置iview,  iview 作为优秀的后台 UI 框架, 在此仅作为内置示例, 你可以选择自己喜欢的 UI 框架作为替换

 ##### laravel服务端渲染基于[spatie/laravel-server-side-rendering](https://github.com/spatie/laravel-server-side-rendering), 感谢!



####  环境需求

* 1. php 环境

  **确保你已经安装composer**

  [Laravel 文档](https://docs.golaravel.com/docs/5.6/installation/)

  [composer 安装教程](https://docs.phpcomposer.com/00-intro.html)

* 2. nodejs 环境

  **确保你已经安装node,推荐安装最新稳定版node**
  > node 内置 npm , 已安装完成 node 即可, 无需单独安装 npm

  [node 官网](https://nodejs.org/en/)

  安装完成, 检查node版本>8.6
  ```
  node -v
  ```
  npm 版本>5.6
  ```
  npm -v
  ```

## Install, 只需2步即可

#### 1. clone代码,安装依赖
 * 1.1 clone或者下载项目代码, git clone

  ```
git clone https://github.com/symenywong/laravel-vue-ssr-spa.git
  ```
  项目 clone 下来后执行如下操作, 进入当前文件夹, 例如, 当前项目文件夹为 laravel-vue-ssr-spa
```
cd laravel-vue-ssr-spa
```

* 1.2 安装前端依赖

  ```
  npm install
  ```
* 1.3 安装composer 依赖
  ```
  composer install
  ```
* 1.4 根目录手动修改.env 文件, 添加如下配置
  ```
  NODE_PATH=/usr/local/bin/
  ```

#### 2.现在运行服务,检查是否正确启动
   * 2.1 在项目目录执行, 启动 php 服务, 查看 ```http://localhost:8000/```
   ```
   php artisan serve & npm run watch
   ```

   ![watch界面](https://github.com/symenywong/laravel-vue-ssr-spa/blob/master/public/images/watch.png?raw=true)

   此时浏览器打开 http://localhost:8000/, 查看各工程界面

   ![dev界面](https://github.com/symenywong/laravel-vue-ssr-spa/blob/master/public/images/dev.png?raw=true)

   ![admin界面](https://github.com/symenywong/laravel-vue-ssr-spa/blob/master/public/images/admin.png?raw=true)

   <img src="https://github.com/symenywong/laravel-vue-ssr-spa/blob/master/public/images/mobile.png?raw=true" width="380">


   * 2.3 buid 生产环境, 在项目目录执行, 启动 webpack 自动构建服务, 生成 jss、css以及对应的 gzip 压缩文件,

   > 由于开启 md5文件名和 gzip 压缩, 此处需要等待一段时间

   ```
   npm run build
   ```

   ![build界面](https://github.com/symenywong/laravel-vue-ssr-spa/blob/master/public/images/build.png?raw=true)

   *全部准备工作已经完成, 现在可以愉快的开始写代码了!*

------
#### 了解更多? 请阅读以下内容

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

#### npm script 命令/package.json 说明
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

##### 1. webpack.config.js 说明

  laravel-mix本身内置 webpack 打包方案, 但是存在如下问题需要解决

  * 1. 生产环境每次生成的 js/css 文件名称相同, 会造成浏览器缓存, 无法有效避免缓存造成的影响, 因此采用 webpack 打包时, 对文件名进行 md5 扩展, 文件变动则随之生成新的 md5 文件名称

  * 2. js/css静态资源请求,造成用户等待时间过长, 如何压缩文件体积, 减少资源请求, 将会很大程度的提升用户体验, 框架内置 compression-webpack-plugin 对生成的文件进行 gzip 压缩, 同时生成 非压缩文件与压缩文件
  ,需要注意的是此方案需要服务端开启 gzip 请求配置

##### 2. webpack.mix.js  说明

 框架内置3套工程方案
  * 1. PC 内置插件

  ```
  > iview
  > vue-router
  > vuex
  > axios
  ```
  * 2. admin 内置插件

  ```
  > iview
  > vue-router
  > vuex
  > axios
  ```
  * 3. mobile 内置插件

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

#### 注意事项
*  1. SSR工程无法使用 router-link 进行跳转:  PC 端前端渲染工程 SSR 内置集成 vue-router分发页面, 但如果使用 <router-link/> 进行跳转, 使用的是 vue 单页跳转逻辑, 与服务端渲染逻辑冲突, 因此请避免使用 <router-link/>标签进行跳转, a 链接跳转则无此问题;

---------

#### 传送门
[NodeJs](https://nodejs.org/en/)

[Laravel](https://laravel.com/)

[Vue](https://vuejs.org/)

[iview](https://www.iviewui.com/docs/guide/introduce)

[spatie/laravel-server-side-rendering](https://github.com/spatie/laravel-server-side-rendering)

[Vue-Router](http://router.vuejs.org)

[Vuex](https://vuex.vuejs.org)

[axios](https://www.npmjs.com/package/axios)

[Cube UI](https://didi.github.io/cube-ui/#/zh-CN)

[AntV地址](https://antv.alipay.com/zh-cn/index.html)
