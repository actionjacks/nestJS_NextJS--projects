<?php

namespace App\Repository;

use App\Controller\Model\Json;
use Psr\Log\LoggerInterface;
use App\Controller\Model\StarshipStatusEnum;

class StarshipRepository
{
  public function __construct(private LoggerInterface $logger) {}
  // takie bo tu nie dziala autowiring.
  public function findAll(): array
  {
    $this->logger->info('Starship collection retrieved');

    return [
      new Json(
        1,
        'USS LeafyCruiser (NCC-0001)',
        'Garden',
        'Jean-Luc Pickles',
        StarshipStatusEnum::IN_PROGRESS
      ),
      new Json(
        2,
        'USS Espresso (NCC-1234-C)',
        'Latte',
        'James T. Quick!',
        StarshipStatusEnum::COMPLETED
      ),
      new Json(
        3,
        'USS Wanderlust (NCC-2024-W)',
        'Delta Tourist',
        'Kathryn Journeyway',
        StarshipStatusEnum::WAITING
      ),
    ];
  }

  public function find(int $id): ?Json
  {
    foreach ($this->findAll() as $starship) {
      if ($starship->getId() === $id) {
        return $starship;
      }
    }
    return null;
  }
}
