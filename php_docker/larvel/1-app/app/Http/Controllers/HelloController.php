<?php

declare(strict_types=1);

namespace App\Http\Controllers;

class HelloController extends Controller
{
  public function hello(string $name)
  {
    return view('hello.hello', ['name' => $name]);
  }
}
