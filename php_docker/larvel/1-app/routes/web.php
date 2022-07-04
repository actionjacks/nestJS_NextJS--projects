<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HelloController;

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/hello/{name}', [HelloController::class, 'hello']);

$url = "/example";
Route::get($url, fn () => 'lorem');

Route::view('/view/route', 'route.view');
Route::view(
    '/view/route/var1',
    'route.viewParam',
    ['param1' => 'var1- to dane']
);

Route::get('posts/{postId}', function (int $postId) {
    dd($postId);
});
// parametr opcjionalny
Route::get('users/{userId?}', function (int $userId = null) {
    dd($userId);
});
//warunek
Route::get('userss/{nick}', function (string $nick) {
    dd($nick);
})->where(['nick' => '[a-z]+']);
