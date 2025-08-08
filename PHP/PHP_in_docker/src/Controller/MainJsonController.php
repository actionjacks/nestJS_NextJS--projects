<?php

namespace App\Controller;

use App\Entity\StarshipFromBase;
use App\Repository\StarshipFromBaseRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;

class MainJsonController extends AbstractController
{
  #[Route('/api/json', name: 'app_homepage_api', methods: ['GET'])]
  public function homepage(
    StarshipFromBaseRepository $repository,
  ): Response {
    $ships = $repository->findIncomplete();

    return $this->json($ships);
  }

  #https://localhost/api/json/page?page=2
  #[Route('/api/json/page', name: 'app_homepage_api_page', methods: ['GET'])]
  public function homepagePage(
    StarshipFromBaseRepository $repository,
    Request $request,
  ): Response {
    $ships = $repository->findIncompletePagination();
    $ships->setMaxPerPage(5);
    $ships->setCurrentPage($request->query->get('page', 1)); // Example: set to page 1

    return $this->json($ships);
  }

  #[Route('/api/json/{slug}', name: 'app_starship_show')]
  public function show(
    #[MapEntity(mapping: ['slug' => 'slug'])]
    StarshipFromBase $ship
  ): Response {
    return $this->json($ship);
  }
}
