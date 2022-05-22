<?php
include "db.php";

function showAllData()
{
  global $connect;

  $query_get = "SELECT * FROM users";
  $result_get_users = mysqli_query($connect, $query_get);

  while ($row = mysqli_fetch_assoc($result_get_users)) {
    $id = $row['id'];
    echo "<option value='$id'>$id</option>";
  }
};

function createRecordSql($userName, $password)
{
  if ($userName && $password) {
    global $connect;

    $query = "INSERT INTO users(username,password) ";
    $query .= "VALUES ('$userName', '$password')";

    $result = mysqli_query($connect, $query);
    if (!$result) {
      die('No inserted to DB' . mysqli_error($connect));
    }
  }
};

function updateRecordSql($userName, $password, $id)
{
  global $connect;

  $query = "UPDATE users SET ";
  $query .= "username = '$userName', ";
  $query .= "password = '$password' ";
  $query .= "WHERE id = $id ";

  $result = mysqli_query($connect, $query);
  if (!$result) {
    die("query faiiled" . mysqli_error($connect));
  }
}

function deleteRecordSql($userName, $password, $id)
{
  global $connect;

  $query = "DELETE FROM users ";
  $query .= "WHERE id = $id ";

  $result = mysqli_query($connect, $query);
  if (!$result) {
    die("query faiiled" . mysqli_error($connect));
  }
}