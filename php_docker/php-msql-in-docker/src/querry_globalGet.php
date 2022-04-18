<?php
// session
session_start();

$_SESSION["greeting"] = "hello jacek";
echo $_SESSION["greeting"];

$name = "jace";
$value = 100;
$expiration = time() + (60 * 60 * 24 * 7); #week

print_r($_GET);

echo $_POST['name'];

if (isset($_COOKIE["jace"])) {
  $my_cookie = $_COOKIE["jace"];
} else {
  $my_cookie = "";
}

setcookie($name, $value, $expiration);
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>

  <form action="querry_globalGet.php" method="post">
    <input type="text" name="name">
    <button type="submit">submit</button>
  </form>

  <a href="querry_globalGet.php?id=200">send id 200</a>
</body>

</html>