<?php

namespace App\Controller\Api;

use App\Controller\DTO\LowestPriceEnquiry;
use App\Entity\Promotion;
use App\Filter\PromotionsFilterInterface;
use App\Repository\AdvancedProductRepository;
use App\Service\Serializer\DTOSerializer;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\BrowserKit\Response;
use Symfony\Component\Serializer\SerializerInterface;

final class AdvancedProductsController extends AbstractController
{
  public function __construct(
    private AdvancedProductRepository $advancedProductRepository,
    private EntityManagerInterface $entityManager
  ) {}

  #[Route('/api/products/{id}/lowest-price', name: 'lowest-price', methods: ['POST'])]
  public function lowestPrice(
    Request $request,
    int $id,
    DTOSerializer $serializer,
    PromotionsFilterInterface $promotionsFilter
  ): Response {
    //** @var LowestPriceEnquiry $lowestPriceEnquiry */
    $lowestPriceEnquiry = $serializer->deserialize(
      $request->getContent(),
      LowestPriceEnquiry::class,
      'json'
    );

    $product = $this->advancedProductRepository->findOrFail($id);

    $lowestPriceEnquiry->setProduct($product);

    $promotions = $this->entityManager->getRepository(Promotion::class)->findValidForProduct($product);

    $modifiedEnquiry = $promotionsFilter->apply($lowestPriceEnquiry);

    $responseContent = $serializer->serialize($modifiedEnquiry, 'json');

    return new Response($responseContent, 200);
    // return new JsonResponse(['message' => 'Lowest price product logic not implemented yet'], 501);
  }
}
