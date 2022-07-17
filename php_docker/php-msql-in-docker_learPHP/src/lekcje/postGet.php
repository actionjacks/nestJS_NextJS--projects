<?php
// sesia
session_start();

if (isset($_POST['login']) and isset($_POST['pass'])) {
  echo $_POST['login'];
  $_SESSION['user'] = $_POST['login'];
  // echo $_POST['pass'];
}
?>

<table>
  <tr>
    <td>
      <p>GET</p>
      <form action="postGet.php" method="get">
        <p>login <input type="text" name="login" id=""></p>
        <p>haslo <input type="password" name="pass" id=""></p>
        <input type="submit" value="wyslij">
      </form>
    </td>
  </tr>

  <tr>
    <td>
      <p>POST</p>
      <form action="postGet.php" method="post">
        <p>login <input type="text" name="login" id=""></p>
        <p>haslo <input type="password" name="pass" id=""></p>
        <input type="submit" value="wyslij">
      </form>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td>
      <?php
      if (isset($_GET['login']) and isset($_GET['pass'])) {
        echo $_GET['login'];
        echo $_GET['pass'];
      }
      if (isset($_SESSION['user'])) {
        echo $_SESSION['user'];
      }
      ?>
    </td>
  </tr>
</table>