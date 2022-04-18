<?php

class Car
{
  var $class_name = 'Car <br/>';
  var $wheels = 4;
  var $hood = 1;
  var $engine = 1;
  var $doors = 4;

  function __construct()
  {
    // $this->class_name = 'Car';
    echo 'class created' . $this->class_name;
  }

  function moveWheels()
  {
    $this->hood = 2;
    echo 'wrumm !!';
  }
}

if (class_exists("Car")) {
  echo "class Car exist";
}
if (method_exists("Car", "moveWheels")) {
  echo "method moveWheels exist";
}
echo '<br/>';

$bmw = new Car();
$bmw->moveWheels();
echo $bmw->wheels;

class Plane extends Car
{
  var $class_name = 'Plane <br/>';
}

$my_plane = new Plane();
echo $my_plane->wheels;

class Propertys
{
  var $prop1 = '1';
  public $prop2 = '2'; #can acces globaly this prop
  protected $prop3 = '3'; # can use this inside class and extendded classes
  private $prop4 = '4'; #can use onli WHIT THIS INSTANCE 

  static $prop5 = '5'; #we can call this props and we dont need to create Instance of this class Propertys::$prop5

  function __construct()
  {
    #run this method when created new instance
  }

  static function my_static_function()
  {
    echo 'static function my_static_function';
  }
}
echo '<br/>';
echo Propertys::$prop5;
echo Propertys::my_static_function();