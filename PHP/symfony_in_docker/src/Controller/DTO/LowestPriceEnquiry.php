<?php

namespace App\Controller\DTO;

use App\Entity\AdvancedProduct;
use Symfony\Component\Serializer\Annotation\Ignore;
use Symfony\Component\Validator\Constraints as Assert;

class LowestPriceEnquiry implements PriceEnquiryInterface
{
  #[Ignore]
  private ?AdvancedProduct $product;

  #[Assert\NotBlank]
  #[Assert\Positive]
  private ?int $quantity = 1;

  private ?string $requestLocation;

  private ?string $voucherCode;

  #[Assert\NotBlank]
  private ?string $requestDate;

  #[Assert\Positive]
  private ?int $price;

  private ?int $discountedPrice;

  private ?int $promotionId;

  private ?string $promotionName;

  /**
   * @return AdvancedProduct|null
   */
  public function getProduct(): ?AdvancedProduct
  {
    return $this->product;
  }

  /**
   * @param AdvancedProduct|null $product
   */
  public function setProduct(?AdvancedProduct $product): void
  {
    $this->product = $product;
  }

  /**
   * @return int|null
   */
  public function getQuantity(): ?int
  {
    return $this->quantity;
  }

  /**
   * @param int|null $quantity
   */
  public function setQuantity(?int $quantity): void
  {
    $this->quantity = $quantity;
  }

  /**
   * @return string|null
   */
  public function getRequestLocation(): ?string
  {
    return $this->requestLocation;
  }

  /**
   * @param string|null $requestLocation
   */
  public function setRequestLocation(?string $requestLocation): void
  {
    $this->requestLocation = $requestLocation;
  }

  /**
   * @return string|null
   */
  public function getVoucherCode(): ?string
  {
    return $this->voucherCode;
  }

  /**
   * @param string|null $voucherCode
   */
  public function setVoucherCode(?string $voucherCode): void
  {
    $this->voucherCode = $voucherCode;
  }

  /**
   * @return string|null
   */
  public function getRequestDate(): ?string
  {
    return $this->requestDate;
  }

  /**
   * @param string|null $requestDate
   */
  public function setRequestDate(?string $requestDate): void
  {
    $this->requestDate = $requestDate;
  }

  /**
   * @return int|null
   */
  public function getPrice(): ?int
  {
    return $this->price;
  }

  /**
   * @param int|null $price
   */
  public function setPrice(?int $price): void
  {
    $this->price = $price;
  }

  /**
   * @return int|null
   */
  public function getDiscountedPrice(): ?int
  {
    return $this->discountedPrice;
  }

  /**
   * @param int|null $discountedPrice
   */
  public function setDiscountedPrice(?int $discountedPrice): void
  {
    $this->discountedPrice = $discountedPrice;
  }

  /**
   * @return int|null
   */
  public function getPromotionId(): ?int
  {
    return $this->promotionId;
  }

  /**
   * @param int|null $promotionId
   */
  public function setPromotionId(?int $promotionId): void
  {
    $this->promotionId = $promotionId;
  }

  /**
   * @return string|null
   */
  public function getPromotionName(): ?string
  {
    return $this->promotionName;
  }

  /**
   * @param string|null $promotionName
   */
  public function setPromotionName(?string $promotionName): void
  {
    $this->promotionName = $promotionName;
  }
}
