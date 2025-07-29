<?php

namespace App\Controller\Model;

use App\Controller\Model\StarshipStatusEnum;

class Json
{
  public function __construct(
    private int $id,
    private string $name,
    private string $class,
    private string $captain,
    private StarshipStatusEnum $status,
  ) {}
  public function getId(): int
  {
    return $this->id;
  }
  public function getName(): string
  {
    return $this->name;
  }
  public function getClass(): string
  {
    return $this->class;
  }
  public function getCaptain(): string
  {
    return $this->captain;
  }
  public function getStatus(): StarshipStatusEnum
  {
    return $this->status;
  }
}
