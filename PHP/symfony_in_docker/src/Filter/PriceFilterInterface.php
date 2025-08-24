<?php


namespace App\Filter;

use App\Controller\DTO\PriceEnquiryInterface;
use App\Entity\Promotion;

interface PriceFilterInterface extends PromotionsFilterInterface
{
  public function apply(
    PriceEnquiryInterface $enquiry,
    Promotion ...$promotion
  ): PriceEnquiryInterface;
}
