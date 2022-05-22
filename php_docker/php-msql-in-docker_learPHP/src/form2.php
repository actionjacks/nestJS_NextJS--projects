<?php
if (isset($_POST['submit'])) {
  $textValueAfterFormSubmit = $_POST['text'];
  $passwordValueAfterFormSubmit = $_POST['password'];

  if (strlen($textValueAfterFormSubmit < 5)) {
    echo 'password is to short';
  }
  echo '<be/>';
  echo $textValueAfterFormSubmit;
  echo $passwordValueAfterFormSubmit;
}