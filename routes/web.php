<?php

use Illuminate\Support\Facades\Route;

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



Route::get('registro', function () {
    return view('registro');
});


Route::any('{/login}', function ($id) {
 Route::any('/{registro}', function ($id) {

 });
});

Route::get('/', 'Auth\LoginController@showLogin');

Route::post('/login', 'Auth\LoginController@login')->name('login.login');

Route::get('/home', 'HomeController@index')->name('home');
//Productos
Route::get('/productos', 'ProductController@index')->name('index.product');
Route::get('/productos/create', 'ProductController@store')->name('create.product');
Route::get('/productos/edit', 'ProductController@edit')->name('edit.product');

//Ordenes
Route::get('/ordenes', 'OrderController@index')->name('order.index');
Route::get('/ordenes/create', 'OrderController@store')->name('create.order');
Route::get('/ordenes/edit', 'OrderController@edit')->name('edit.order');