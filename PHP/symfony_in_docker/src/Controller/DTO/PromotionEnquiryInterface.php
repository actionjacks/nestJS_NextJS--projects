<?php

namespace App\Controller\DTO;

interface PromotionEnquiryInterface
{
  public function getProduct(): ?Product;

  public function setPromotionId(int $promotionId);

  public function setPromotionName(string $promotionName);
}
