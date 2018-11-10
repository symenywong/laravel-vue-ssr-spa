const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
/*********** home ***********/
mix.js('resources/assets/home/entry-client.js', 'public/index/js')
.js('resources/assets/home/entry-server.js', 'public/index/js')
.sass('resources/sass/home/app.scss', 'public/index/css')
/*********** admin ***********/
mix.js('resources/assets/admin/app.js', 'public/admin/js')
.sass('resources/sass/admin/app.scss', 'public/admin/css');

/*********** mobile ***********/
mix.js('resources/assets/mobile/app.js', 'public/mobile/js')
.sass('resources/sass/mobile/app.scss', 'public/mobile/css');
