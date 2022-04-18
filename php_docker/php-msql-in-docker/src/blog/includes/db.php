<?php
$db['db_host'] = 'mysql_db_container';
$db['db_user'] = 'root';
$db['db_pass'] = 'admin';
$db['db_name'] = 'blog';

foreach ($db as $key => $value) {
  // echo $key;
  // echo '<br/>';
  // echo $value;
  define(strtoupper($key), $value);
}
//print_r($db);

$connect = mysqli_connect($db['db_host'], $db['db_user'], $db['db_pass'], $db['db_name']);
// //$connect = mysqli_connect('mysql_db_container', 'root', 'admin', 'blog');

if ($connect) {
  echo 'connected to db';
}