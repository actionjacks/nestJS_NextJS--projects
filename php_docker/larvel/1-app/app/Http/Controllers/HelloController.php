<?php

declare(strict_types=1);

namespace App\Http\Controllers;

//lesson -1
class HelloController extends Controller
{
  public function hello(string $name)
  {
    return view('hello.hello', ['name' => $name]);
  }
}
