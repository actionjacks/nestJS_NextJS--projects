<?php
if (isset($_POST['submit'])) {
  $textValueAfterFormSubmit = $_POST['text'];
  $passwordValueAfterFormSubmit = $_POST['password'];

  if (strlen($textValueAfterFormSubmit < 5)) {
    echo 'password is to short';
  }
  echo '<be/>';
  // echo $textValueAfterFormSubmit;
  // echo $passwordValueAfterFormSubmit;
}
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
  <div class="wrapper">
    <form action="form.php" method="post">
      <input type="text" name='text'><br />
      <input type="password" name='password'><br />
      <input type="submit" name='submit'><br />
    </form>

    <form action="form2.php" method="post">
      <input type="text" name='text'><br />
      <input type="password" name='password'><br />
      <input type="submit" name='submit'><br />
    </form>
  </div>

  <?php
  echo 'elo';
  ?>
</body>

</html>