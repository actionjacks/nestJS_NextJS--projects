<?php

namespace App\Controller\DTO;

use App\Entity\AdvancedProduct;

interface PromotionEnquiryInterface
{
  public function getProduct(): ?AdvancedProduct;

  public function setPromotionId(int $promotionId);

  public function setPromotionName(string $promotionName);
}
