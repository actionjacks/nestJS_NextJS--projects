<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Product;
use DateTime;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $products = [
            ['name' => 'Product 1', 'size' => 10, 'isAvailable' => true, 'publishedOn' => new \DateTime('2023-01-01')],
            ['name' => 'Product 2', 'size' => 20, 'isAvailable' => false, 'publishedOn' => new \DateTime('2023-02-01')],
            ['name' => 'Product 3', 'size' => null, 'isAvailable' => true, 'publishedOn' => null],
        ];
        foreach ($products as $data) {
            $product = new Product();
            $product->setName($data['name'])
                ->setSize($data['size'])
                ->setIsAvailable($data['isAvailable'])
                ->setPublishedOn($data['publishedOn']);
            $manager->persist($product);
        }
        $manager->flush();
    }
}
