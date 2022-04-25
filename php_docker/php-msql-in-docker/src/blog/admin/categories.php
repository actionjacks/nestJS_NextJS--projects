<?php include "includes/header.php"; ?>

<div id="wrapper">

  <!-- Navigation -->

  <?php include "includes/navigation.php"; ?>

  <div id="page-wrapper">

    <div class="container-fluid">

      <!-- Page Heading -->
      <div class="row">
        <div class="col-lg-12">
          <h1 class="page-header">
            Welcome to admin
            <small>author</small>
          </h1>

          <div class="col-xs-6">

            <?php
            if (isset($_POST['submit'])) {
              $cat_title = $_POST['cat_title'];

              if ($cat_title == "" || empty($cat_title)) {
                echo "field should not be empty";
              } else {
                $query = "INSERT INTO categories(cat_title) ";
                $query .= "VALUE('{$cat_title}')";

                $create_category_query = mysqli_query($connect, $query);
                if (!$create_category_query) {
                  die('QUERY FAILED' . mysqli_error($connect));
                }
              }
            }
            ?>

            <form action="" method="post">
              <div class="form-group">
                <input class="form-control" type="text" name="cat_title">
              </div>
              <div class="form-group">
                <input class="btn btn-primary" type="submit" name="submit" value="add category">
              </div>
            </form>
          </div>


          <div class="col-xs-6">

            <?php
            $query = "SELECT * FROM categories";
            $select_categories = mysqli_query($connect, $query);
            ?>

            <table class="table table-bordered table-hover">
              <tr>
                <th>Id</th>
                <th>Category Title</th>
              </tr>

              <?php
              while ($row = mysqli_fetch_assoc($select_categories)) {
                $cat_id = $row['cat_id'];
                $cat_title = $row['cat_title'];

                echo "<tr>";
                echo "<th>{$cat_id}</th>";
                echo "<th>{$cat_title}</th>";
                echo "</tr>";
              }
              ?>

            </table>
          </div>
        </div>
      </div>
      <!-- /.row -->
    </div>
    <!-- /.container-fluid -->
  </div>
  <!-- /#page-wrapper -->

  <?php include "includes/footer.php"; ?>