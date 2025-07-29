<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\StarshipRepository;

class MainController extends AbstractController
{
  #[Route('/', name: 'homepage', methods: ['GET'])]
  public function homepage(StarshipRepository $starshipRepository)
  {
    $passedData = 'Passed-data--->';
    $myShip = $starshipRepository->findAll();

    return $this->render('main/homepage.html.twig', [
      'passedData' => $passedData,
      'myShip' => $myShip[array_rand($myShip)],
    ]);
  }
}
