<?php

namespace App\Entity;

use App\Repository\ProductPromotionRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProductPromotionRepository::class)]
class ProductPromotion
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'productPromotions')]
    #[ORM\JoinColumn(nullable: false)]
    private ?AdvancedProduct $product = null;

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    private ?Promotion $promotion = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTime $validTo = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProduct(): ?AdvancedProduct
    {
        return $this->product;
    }

    public function setProduct(?AdvancedProduct $product): static
    {
        $this->product = $product;

        return $this;
    }

    public function getPromotion(): ?Promotion
    {
        return $this->promotion;
    }

    public function setPromotion(?Promotion $promotion): static
    {
        $this->promotion = $promotion;

        return $this;
    }

    public function getValidTo(): ?\DateTime
    {
        return $this->validTo;
    }

    public function setValidTo(?\DateTime $validTo): static
    {
        $this->validTo = $validTo;

        return $this;
    }
}
