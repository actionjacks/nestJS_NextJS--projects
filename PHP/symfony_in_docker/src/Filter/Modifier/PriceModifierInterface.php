<?php

namespace App\Filter\Modifier;

use App\Controller\DTO\PromotionEnquiryInterface;
use App\Entity\Promotion;

interface PriceModifierInterface
{
  public function modify(
    int $price,
    int $quantity,
    Promotion $promotion,
    PromotionEnquiryInterface $enquiry
  ): int;
}
