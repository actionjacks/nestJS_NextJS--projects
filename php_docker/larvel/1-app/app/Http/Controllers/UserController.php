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

    //get cookie
    $cookie = $request->cookie();

    dd('test user show' . ' ' . $id . ' ' . $uri . ' ' . $url . ' ' . $fullUrl);
  }

  public function testStore(Request $request, int $id)
  {

    if ($request->isMethod('post')) {
      dump('post method');
    }

    dd('post store');
  }
}
