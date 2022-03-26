<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <input type="range">
  <?php

  //comment
  /*
multi line comment
  */
  $title = "<h1>JACEK PLACE</h1>";
  $title2 = "<p>JACEK PLACE</p>";
  $num = 1;
  $num2 = 'jacek';
  ?>
  <?php echo $title; ?>
  <?php echo  $title2; ?>
  <?php echo $num . $num . " " . $num;
  echo $num2; ?>
  <hr>

  <?php
  echo 2 + 2;
  ?>
  <?php
  echo 2 + "2";
  ?>
  <hr>

  <?php
  $firstArray = [1, 2, 3, 4, "<p>lotem</p>"];
  echo $firstArray[4];
  echo $firstArray[2];
  print_r($firstArray);
  ?>
  <br>

  <?php
  $ordered_array = ["first" => "jacek", "second" => 2];

  echo $ordered_array['first'];
  echo $ordered_array['second'];
  ?>

  <br>
  <?php
  if (3 > 1) {
    echo 'dupa';
  }
  ?>
  <!--switch -->
  <br>
  <?php
  $number = 10;
  switch ($number) {
    case 34:
      echo "dupa";
      break;
    case 35:
      echo "dup2";
      break;
    case 10:
      echo "to jest 10";
      break;
    default:
      echo 'to jest default';
      break;
  }
  ?>
  <br>

  <?php
  $arrayforloop = [1, 2, 4, 5, 6, 7, 8];
  foreach ($arrayforloop as $num) {
    echo $num;
  }
  ?>
</body>

</html>