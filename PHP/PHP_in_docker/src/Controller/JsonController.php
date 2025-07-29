<?php

namespace App\Controller;

use App\Repository\StarshipRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

use Psr\Log\LoggerInterface;

class JsonController extends AbstractController
{
  #[Route('/api/test', name: 'json_response', methods: ['GET'])]
  public function getCollection(LoggerInterface $logger, StarshipRepository $repository): Response
  // takie wstrzykiwanie dziala tylko w kontrolerach (autowiring)
  {
    $data = $repository->findAll();

    $logger->info('Starship collection retrieved');

    # dd($logger); 
    # Logs - https://localhost/_profiler/empty/search/results?limit=10
    return $this->json($data);
  }

  #[Route('/api/starships/{id<\d+>}', name: 'json_response_item', methods: ['GET'])]
  public function get(int $id, StarshipRepository $repository): Response
  {
    $starship = $repository->find($id);

    if (!$starship) {
      return $this->json(['error' => 'Starship not found'], Response::HTTP_NOT_FOUND);
    }

    return $this->json($starship);
  }
}
