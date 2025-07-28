<?php

namespace App\Controller;

use App\Controller\Model\Json;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

use Psr\Log\LoggerInterface;

class JsonController extends AbstractController
{
  #[Route('/api/test', name: 'json_response', methods: ['GET'])]
  public function getCollection(LoggerInterface $logger): Response
  {
    $data = [
      new Json(
        1,
        'USS LeafyCruiser (NCC-0001)',
        'Garden',
        'Jean-Luc Pickles',
        'taken over by Q'
      ),
      new Json(
        2,
        'USS Espresso (NCC-1234-C)',
        'Latte',
        'James T. Quick!',
        'repaired',
      ),
      new Json(
        3,
        'USS Wanderlust (NCC-2024-W)',
        'Delta Tourist',
        'Kathryn Journeyway',
        'under construction',
      ),
    ];
    $logger->info('Starship collection retrieved');
    # dd($logger); 
    # Logs - https://localhost/_profiler/empty/search/results?limit=10
    return $this->json($data);
  }
}
