<?php

declare(strict_types=1);

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Faker\Factory;

class ShowAdress extends Controller
{
  public function __invoke(string $adress)
  {
    $faker = Factory::create();
    $adress = [
      'postalCode' => $faker->postcode(),
      'address' => $faker->address()
    ];

    //   dd($adress);

    return view('user.list', [
      'adress' => $adress
    ]);
  }
}
