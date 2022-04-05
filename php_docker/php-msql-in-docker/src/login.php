<?php
include "db.php";
include "functions.php";

if (isset($_POST['submit'])) {
  $userName = $_POST['name'];
  $password = $_POST['password'];
  $id = $_POST['id'];

  //code for post
  //createRecordSql($userName, $password);

  //code for updated
  updateRecordSql($userName, $password, $id);
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>

<body>
  <div class="container">
    <h1>CREATE</h1>
    <!-- <form action="login.php" method="post">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" name='password' class="form-control" id="exampleInputPassword1">
      </div>
      <button type="submit" name='submit' class="btn btn-primary">Submit</button>
    </form> -->

    <!-- update  -->
    <h1>UPDATE</h1>
    <form action="login.php" method="post">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" name='password' class="form-control" id="exampleInputPassword1">
      </div>
      <div class="mb-3">
        <select name="id" id="">
          <?php
          showAllData();
          ?>
        </select>
      </div>
      <button type="submit" name='submit' class="btn btn-primary">Update</button>
    </form>

    <!-- get data from SQL  -->
    <!-- <div class="col-sm-6"> -->
    <!-- <?php
          while ($row = mysqli_fetch_assoc($result_get_users)) {
          ?>
      <pre>
        <?php
            print_r($row);
        ?>
       </pre>
      <?php
          }
      ?> -->
    <!-- </div> -->
  </div>

</body>

</html>