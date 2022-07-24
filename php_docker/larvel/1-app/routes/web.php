<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HelloController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\User\ProfileController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\User\ShowAdress;

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

//lesson -2
Route::resource('games', GameController::class);
// dzieki temu mozna ograniczyc jakie metody z klasy beda powiazane z tym routem
// Route::resource('games', GameController::class)->only([
//     'index','show'
// ]);

Route::get('/users', [UserController::class, 'list'])
    ->name('get.users');
Route::get('/users/test/{id}', [UserController::class, 'testShow'])
    ->name('get.users');
Route::post('/users/test/post/{id}', [UserController::class, 'testStore'])
    ->name('post.users.test.store');


Route::get('/profile/{userId}', [ProfileController::class, 'show']);
Route::get('/user/{userId}/address', ShowAdress::class);

// lesson -1 
Route::get('/hello01/{name}', [HelloController::class, 'hello']);

$url = "/example01";
Route::get($url, fn () => 'lorem');

Route::view('/view/route01', 'route.view');
Route::view(
    '/view/route/var1',
    'route.viewParam',
    ['param1' => 'var1- to dane']
);

Route::get('posts01/{postId}', function (int $postId) {
    dd($postId);
});
// parametr opcjionalny
Route::get('users01/{userId?}', function (int $userId = null) {
    dd($userId);
});
//warunek
Route::get('userss01/{nick}', function (string $nick) {
    dd($nick);
})->where(['nick' => '[a-z]+']);

//nazywanie routa
Route::get('itemss01/', function () {
    return 'items';
})->name('custom.name');
//odwolanie
Route::get('exampless01/', function () {
    $url = route('custom.name');
    dump($url);
});

//nazywanie routa
Route::get('itemss01/{id}', function (int $id) {
    return 'items' . $id;
})->name('shop.item.single');
//odwolanie
Route::get('examples201/', function () {
    $url = route('shop.item.single', ['id' => 4444]);
    dump($url);
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
