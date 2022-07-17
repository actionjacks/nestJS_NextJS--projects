<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
  public function list(Request $request)
  {
    dd($request);
    return view('user.list');
  }

  public function testShow(Request $request, int $id)
  {
    $uri = $request->path();
    $url = $request->url();
    $fullUrl = $request->fullUrl();
    dump($uri, $url, $fullUrl);

    $requestMethodType = $request->method();
    dump($requestMethodType);

    if ($request->isMethod('get')) {
      dump('get method');
    }

    // /users/test/33/?name=jacek&nick=boss
    $name = $request->input('name');
    dump($name); //jacek

    // /users/test/33/games=[]=quake&games=[]=turok
    $firstFromQueryArray = $request->input('game.0');
    dump($firstFromQueryArray); //quake

    $allQuery = $request->query(); //get all query from url
    $name = $request->query('name');

    //get booleanQuery
    $expired = $request->boolean('expired'); // ../expired=true

    //check if query got param np name
    $hasName = $request->has('name');

    // /users/test/33/?name=jacek&nick=boss
    $all = $request->all();
    dump($all);

    // response
    $myResponse =
      response('<h1>response</h1>', 200, ['Content-Type' => 'text/plain']);

    $myResponse2 =
      response('<h1>response</h1>')
      ->setStatusCode(200)
      ->header('Content-Type', 'text/plain')
      ->header('Own-Header', 'Laravel');

    $myResponse3 =
      response('<h1>response</h1>', 200)
      ->header('Content-Type', 'text/plain')
      ->cookie('my_best', 'lorem', 10);

    // redirest
    $redirectedMain = redirect('/');
    $redirectedMain2 = redirect()->route('post.users.test.store');
    $redirectedMain3 =
      redirect()->route('post.users.test.store', ['id' => $id]);

    $redirectedMainController =
      redirect()->action('UserControllerList');
    $redirectedMainController2 =
      redirect()->action('UserControllerList', ['id' => $id]);
    $redirectedMainController3 =
      redirect()->away('https://google.pl');

    $myResponse4 = response()
      ->view('user.show', ['id' => $id], 200);

    $myResponse5 = view('user.show', ['id' => $id]);
    $myResponse6 = response()->json(['id' => $id]);

    //get cookie
    $cookie = $request->cookie();

    // =============response==========


    dd('test user show' . ' ' . $id . ' ' . $uri . ' ' . $url . ' ' . $fullUrl);
  }

  public function testStore(Request $request, int $id)
  {

    if ($request->isMethod('post')) {
      dump('post method');
    }

    dd('post store');
  }

  public function renderView(int $id)
  {
    //location user folder showww file
    return view('user.showww', ['id' => $id, 'example' => 'showww']);
  }
}
