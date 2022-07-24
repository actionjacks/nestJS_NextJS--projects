<?php
class Person
{
  public $name;
  public $age;

  public function __construct($name, $age)
  {
    $this->$name = $name;
    $this->$age = $age;
  }
  public function __destruct()
  {
    echo "wywola sie kiedy sie zniaszczy";
  }
}
