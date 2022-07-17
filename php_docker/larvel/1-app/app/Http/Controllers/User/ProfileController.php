<?php

declare(strict_types=1);

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Faker\Factory;

class ProfileController extends Controller
{
  public function showLoop()
  {
    $users = [];
    $faker = Factory::create();
    $count = $faker->numberBetween(3, 15);

    for ($i = 0; $i < $count; $i++) {
      $users[] = [
        'id' => $faker->numberBetween(1, 1000),
        'name' => $faker->firstName()
      ];
    }
    return view('user.profile', ['users' => $users]);
  }

  public function show(int $userID)
  {
    $faker = Factory::create();
    $user = [
      'id' => $userID,
      'firstName' => $faker->firstName(),
      'age' => $faker->numberBetween(12, 40),
      'city' => $faker->city(),
      'html' => '<h3>lorem lorem</h3>'
    ];
    return view('user.profile', ['user' => $user]);
  }
}
