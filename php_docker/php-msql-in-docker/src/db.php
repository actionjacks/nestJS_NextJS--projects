<?php
/* 
connect to 
  DbServer adress
  loginDb 
  passwordDb 
  Db to connect
 */
$connect = mysqli_connect('mysql_db_container', 'root', 'admin', 'mydb');

if ($connect) {
  echo "connected";
  echo "<br/>";
} else {
  die("connection to db failed");
  echo "<br/>";
}