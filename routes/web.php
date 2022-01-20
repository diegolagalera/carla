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

//Route::get('/', function () {
//    return view('welcome');
//});


Route::get('/', function () {
    return view('app');
});
Route::get('newsletter','App\Http\Controllers\NewsletterController@index');
Route::post('newsletter/store','App\Http\Controllers\NewsletterController@store');
//Route::post('invita', 'InviteController@invita')->name('invita');


Route::get('{any}',function (){
    return view('app');
});
