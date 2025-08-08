<?php

namespace App\Controller;

use App\Entity\StarshipFromBase;
use App\Repository\StarshipFromBaseRepository;
use App\Repository\StarshipPartRepository;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Contracts\Cache\CacheInterface;
use Symfony\Contracts\Cache\ItemInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\StarshipRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;

class MainController extends AbstractController
{
  #[Route('/', name: 'homepage', methods: ['GET'])]
  public function homepage(
    // StarshipRepository $starshipRepository,
    // HttpClientInterface $client,
    // CacheInterface $cache,
    EntityManagerInterface $em,
    // #[Autowire(param: 'iss_location_cache_ttl')]
    // $issLocationCacheTtl,
  ) {
    // dump($this->getParameter('kernel.project_dir')); // "/app"
    // dump($this->getParameter('iss_location_cache_ttl')); // 5 from (\config\services.yaml)
    // dd($issLocationCacheTtl); // 5 from (\config\services.yaml)

    // $passedData = 'Passed-data--->';
    // $myShip = $starshipRepository->findAll();

    // Szuka w pamięci podręcznej (cache) danych pod kluczem iss_location_data.
    // Jeśli znajdzie – zwraca je.
    // Jeśli nie – uruchamia funkcję anonimową (czyli tę function(...) { ... }).
    // Funkcja pobiera dane z API i je zapisuje do cache na 5 sekund.

    // $issData = $cache->get('iss_location_data', function (ItemInterface $item) use ($client): array {
    //   $item->expiresAfter(5);
    //   $response = $client->request('GET', 'https://api.wheretheiss.at/v1/satellites/25544');
    //   return $response->toArray();
    // });

    // dump($issData);

    // $ships = $em->createQuery('SELECT s FROM App\Entity\StarshipFromBase s')->getResult();
    // $myShip = $ships[array_rand($ships)];
    // dump($myShip);

    // $ships2 = $em->createQueryBuilder()
    //   ->select('s')
    //   ->from('App\Entity\StarshipFromBase', 's')
    //   ->getQuery()
    //   ->getResult();

    // dump($em->getRepository(StarshipFromBase::class));

    // return $this->json($ships2);

    // return $this->render('main/homepage.html.twig', [
    //   // 'passedData' => $passedData,
    //   // 'myShip' => $myShip[array_rand($myShip)],
    //   // 'issData' => $issData,
    //   'myShip' => $myShip,
    //   'ships' => $ships,
    // ]);
    $ships = $em->createQuery('SELECT s FROM App\Entity\StarshipFromBase s')->getResult();

    // Zwróć w JSON używając grupy serializacji
    return $this->json($ships, 200, [], ['groups' => 'starship:details']);
  }

  #[Route('/starships/{slug}', name: 'lorem', methods: ['GET'])]
  public function show(
    #[MapEntity(mapping: ['slug' => 'slug'])]
    StarshipFromBase $ship,
    // StarshipPartRepository $partRepository,
  ): Response {
    // $parts = $partRepository->findBy(['starship' => $ship]);
    dd($ship->getParts());
    # dd($parts);
    // dd($ship->getParts()->toArray());
    // foreach ($ship->getParts() as $part) {s
    //   dump($part);
    // }

    // return $this->json([
    //   'ship' => $ship,
    //   'parts' => $parts,
    // ]);
    return $this->json($ship);
  }
}
// Nebula Wraith
