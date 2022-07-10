<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <div>
    <?php
    include('include.php')
    ?>
    <h2>Srednia ocen</h2>
    <?php

    if (isset($_GET['srednia']) && !empty($_GET['srednia'])) {
      $srednia = $_GET['srednia'];
      $tab = explode(",", $srednia);

      $sum = 0;
      $numbersCounter = 0;
      if (is_array(($tab))) {
        foreach ($tab as $item) {
          if (is_numeric($item) && $item >= 1 && $item <= 6) {
            $sum += $item;
            $numbersCounter++;
          }
        }
      }
      if ($numbersCounter > 0) {
        $srednia = 'srednia ocen wynosi =' . round($sum / $numbersCounter, 2);
      } else {
        $srednia = 'nie podano ocen';
      }
    } else {
      $srednia = 'nie podano ocen';
    }

    echo $srednia;

    ?>



    <form action="first.php" method="get">
      <input type="text" name="srednia">
      <input type="submit" value="Wyslijiji">
    </form>
  </div>

  <div>
    <?php

    if (isset($_GET['name'])) {
      $name = $_GET['name'];
    } else {
      $name = 'Jacel';
    }

    echo '<h1>hello' . $name . '</h1>';
    ?>
    <form action="first.php" method="get">
      <input type="text" name="name">
      <input type="submit" value="Wyslijiji">
    </form>
  </div>
  <!-- stala -->
  <?php
  define('CONSTANT', 'dupa');
  echo CONSTANT;

  echo '<br></br>';
  // petle
  $a = 5;
  while ($a > 0) {
    echo $a;
    $a--;
  }

  echo '<br></br>';
  $b = 5;
  do {
    echo $b;
    $b--;
  } while ($b > 0);

  echo '<br></br>';
  for ($c = 5; $c > 0; $c--) {
    echo $c;
  }
  echo '<br></br>';
  ?>

  <?php
  // tablice
  $myArray = array('jacek', 'placek', 'sracek');
  echo '<br></br>';
  echo $myArray[1];

  //associacyjna - mozna nadpisac klucz numeryczny dowolna wartoscia ktora
  $myArray2 = array('red' => 'redValue');
  echo '<br></br>';
  echo $myArray2['red'];

  $myArray2 = array('jacek', 'placek', 'sracek');
  echo '<br></br>';

  for ($i = 0; $i < count($myArray2); $i++) {
    echo $myArray2[$i];
  }
  echo '<br></br>';

  //to samo
  foreach ($myArray2 as $name) {
    echo $name;
  }
  echo '<br></br>';

  ?>
</body>

</html>