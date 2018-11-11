<?php
namespace App\Http\Controllers;
class PageController extends Controller
{
    public function __invoke()
    {
        return view('index/index', [
            'packages' =>[
              'title' => 'Laravel-Vue-SSR-SPA',
              'createdAt'=>'2018-10-10 00:00:00',
              'desc'=>'基于 Laravel+Vue+Webpack的工程项目，包括前台系统、后台管理系统、移动端系统, 支持前台系统 SSR, 后台移动端前后分离SPA单页应用方案, 提供快速的上手方案',
              'content'=>'webpack.config.js 说明,
                laravel-mix本身内置 webpack 打包方案, 但是存在如下问题需要解决
                生产环境每次生成的 js/css 文件名称相同, 会造成浏览器缓存, 无法有效避免缓存造成的影响, 因此采用 webpack 打包时, 对文件名进行 md5 扩展, 文件变动则随之生成新的 md5 文件名称
                js/css静态资源请求,造成用户等待时间过长, 如何压缩文件体积, 减少资源请求, 将会很大程度的提升用户体验, 框架内置 compression-webpack-plugin 对生成的文件进行 gzip 压缩, 同时生成 非压缩文件与压缩文件 ,需要注意的是此方案需要服务端开启 gzip 请求配置'
              ] //$this->getPackages(),
        ]);
    }
    private function getPackages(): array
    {
      $path = public_path('packages.json');
      $contents = file_get_contents($path);
      return json_decode($contents, true);
    }
}
