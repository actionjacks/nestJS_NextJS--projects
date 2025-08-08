<?php

namespace App\DataFixtures;

use App\Controller\Model\StarshipStatusEnum;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\StarshipFromBase;
use App\Entity\StarshipPart;
use App\Factory\StarshipFromBaseFactory;
use App\Factory\StarshipPartFactory;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        StarshipFromBaseFactory::createOne([
            'name' => 'USS LeafyCruiser (NCC-0001)',
            'captain' => 'Jean-Luc Pickles',
            'status' => StarshipStatusEnum::IN_PROGRESS,
            'arrivedAt' => new \DateTimeImmutable('-1 day'),
        ]);
        StarshipFromBaseFactory::createOne([
            'name' => 'USS Espresso (NCC-1234-C)',
            'captain' => 'James T. Quick!',
            'status' => StarshipStatusEnum::COMPLETED,
            'arrivedAt' => new \DateTimeImmutable('-1 week'),
        ]);

        StarshipFromBaseFactory::createMany(20);
        StarshipPartFactory::createMany(50);

        # relation example===
        $starship = new StarshipFromBase();
        $starship->setName('USS Taco Tuesday');
        $starship->setCaptain('James T. Nacho');
        $starship->setStatus(StarshipStatusEnum::IN_PROGRESS);
        $starship->setArrivedAt(new \DateTimeImmutable('-2 days'));
        $manager->persist($starship);

        $part = new StarshipPart();
        $part->setName('spoiler');
        $part->setNotes('There\'s no air drag in space, but it looks cool.');
        $part->setPrice(500);
        $manager->persist($part);
        $part->setStarship($starship);
        $manager->flush();

        $starshipRelation = StarshipFromBaseFactory::createOne([
            'name' => 'USS Starship Relation',
            'captain' => 'Captain Relation',
            'status' => StarshipStatusEnum::IN_PROGRESS,
            'arrivedAt' => new \DateTimeImmutable('-3 days'),
        ]);
        StarshipPartFactory::createMany(100, [
            'starship' => $starshipRelation,
        ]);

        // $part = new StarshipPart();
        // $part->setName('spoiler');
        // $part->setNotes('There\'s no air drag in space, but it looks cool.');
        // $part->setPrice(500);
        // $manager->persist($part);
        // $part->setStarship($starship);
        // $manager->flush();
        #=======================

        // $ship1 = new StarshipFromBase();
        // $ship1->setName('USS LeafyCruiser (NCC-0001)');
        // $ship1->setCaptain('Jean-Luc Pickles');
        // $ship1->setStatus(StarshipStatusEnum::IN_PROGRESS);
        // $ship1->setArrivedAt(new \DateTimeImmutable('-1 day'));

        // $ship2 = new StarshipFromBase();
        // $ship2->setName('USS Espresso (NCC-1234-C)');
        // $ship2->setCaptain('James T. Quick!');
        // $ship2->setStatus(StarshipStatusEnum::COMPLETED);
        // $ship2->setArrivedAt(new \DateTimeImmutable('-1 week'));

        // $ship3 = new StarshipFromBase();
        // $ship3->setName('USS Wanderlust (NCC-2024-W)');
        // $ship3->setCaptain('Kathryn Journeyway');
        // $ship3->setStatus(StarshipStatusEnum::WAITING);
        // $ship3->setArrivedAt(new \DateTimeImmutable('-1 month'));

        // $manager->persist($ship1);
        // $manager->persist($ship2);
        // $manager->persist($ship3);

        // $manager->flush();

    }
}
