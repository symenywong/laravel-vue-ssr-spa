<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
use Illuminate\Support\Facades\Route;

Route::any('/admin/{all}',function (){
	return view('admin.index');
})->where(['all'=>'.*']);

Route::any('/mobile/{all}',function (){
	return view('mobile.index');
})->where(['all'=>'.*']);

Route::get('/list/{url?}', 'ListController');
Route::get('/page/{url?}', 'PageController');

Route::get('/{url?}', 'VueController');

// Route::any('/{all}',function (){
// 	return view('index.index');
// })->where(['all'=>'.*']);

// Route::get('/', function () {
//     return view('index/index');
// });
Route::get('/{view?}', 'HomeController@index')->where('view', '(.*)');
