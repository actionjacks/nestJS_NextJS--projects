<table>
  <tr>
    <td>
      <p>COOKIE</p>
      <form action="cookie.php" method="post">
        <p>name <input type="text" name="name" id=""></p>

        <input type="submit" value="zapamietaj">
      </form>
    </td>
  </tr>
</table>

<?php
if (isset($_POST['name'])) {
  setcookie('name', $_POST['name']);
}
?>

<?php
if (isset($_COOKIE['name'])) {
  // del cookie
  // setcookie('name', '', time() - 1);
}
?>