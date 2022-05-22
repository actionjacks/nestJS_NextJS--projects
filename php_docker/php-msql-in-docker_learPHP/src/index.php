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
  <!-- FUNCTIONS -->

  <?php
  function something()
  {
    echo "string from function";
    echo "<br/>";
  }
  something();
  something();

  function printVar($mess)
  {
    echo $mess;
    return $mess;
  }
  printVar('----');
  echo "<br/>";

  //scope
  $x = "out-";
  function von()
  {
    global $x;
    $x = "in";
  }
  echo $x;
  von();
  echo $x;
  echo "<br/>";

  $canHnge = 100;
  echo $canHnge;
  echo "<br/>";
  //constant
  define('cantChange', 200);
  echo cantChange;
  echo "<br/>";

  const CONSTANT = 'Hello World';
  echo CONSTANT;
  echo "<br/>";

  // php math
  //https://www.php.net/manual/en/ref.math.phps

  echo rand(1, 100); //random from 1 to 100

  //strings
  //https://www.php.net/manual/en/book.strings.php

  $someStr = 'dupa aa';
  echo strlen($someStr);
  echo "<br/>";
  echo strtoupper($someSt);

  //arrays
  //https://www.php.net/manual/en/book.array.php

  $arrayMetods = [1, 2, 3, 4, 1, 2, 3];
  echo max($arrayMetods);

  ?>
</body>

</html>