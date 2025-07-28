<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
  #[Route('/', name: 'homepage', methods: ['GET'])]
  public function homepage()
  {
    $passedData = 'Passed-data--->';
    $myShip = [
      'name' => 'USS LeafyCruiser (NCC-0001)',
      'class' => 'Garden',
      'captain' => 'Jean-Luc Pickles',
      'status' => 'under construction',
    ];

    return $this->render('main/homepage.html.twig', [
      'passedData' => $passedData,
      'myShip' => $myShip,
    ]);
  }
}
