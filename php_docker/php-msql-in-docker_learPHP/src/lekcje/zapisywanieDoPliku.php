<?php
if (isset($_POST['name'])) {
  $textFromInput = $_POST['name'];
  // jesli nie ma pliku to go otworzy
  $openedFile = fopen('file.txt', 'a');
  fwrite($openedFile, $textFromInput . "/n");
  fclose($openedFile);
}
?>

<div>
  <form action="zapisywanieDoPliku.php" method="post">
    <p>imie <input type="text" name="name" id=""></p>
    <input type="submit" value="dodaj">
  </form>
</div>