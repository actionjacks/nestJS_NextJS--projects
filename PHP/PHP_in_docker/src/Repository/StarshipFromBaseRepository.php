<?php

namespace App\Repository;

use App\Controller\Model\StarshipStatusEnum;
use App\Entity\StarshipFromBase;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Pagerfanta\Pagerfanta;
use Pagerfanta\Doctrine\ORM\QueryAdapter;

/**
 * @extends ServiceEntityRepository<StarshipFromBase>
 */
class StarshipFromBaseRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, StarshipFromBase::class);
    }

    /**
     * @return Starship[]
     */
    public function findIncomplete(): array
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.status = :status')
            ->setParameter('status', StarshipStatusEnum::COMPLETED)
            ->orderBy('s.id', 'ASC')
            ->getQuery()
            ->getResult();
    }

    public function findIncompletePagination(): Pagerfanta
    {
        $query = $this->createQueryBuilder('s')
            ->andWhere('s.status = :status')
            ->orderBy('s.arrivedAt', 'DESC')
            ->setParameter('status', StarshipStatusEnum::COMPLETED)
            ->getQuery();

        return new Pagerfanta(new QueryAdapter($query));
    }
    //    /**
    //     * @return StarshipFromBase[] Returns an array of StarshipFromBase objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('s')
    //            ->andWhere('s.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('s.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?StarshipFromBase
    //    {
    //        return $this->createQueryBuilder('s')
    //            ->andWhere('s.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
