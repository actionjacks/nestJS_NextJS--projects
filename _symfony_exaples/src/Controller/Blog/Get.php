<?php

namespace App\Controller\Blog;

use App\Entity\Post;
use App\Form\PostTypeForm; 
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse; 
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface; 

class Get extends AbstractController
{
    // Wstrzyknij SerializerInterface do kontrolera
    public function __construct(private SerializerInterface $serializer)
    {
    }

    #[Route('api/blog', name: 'blog_api', methods: ['GET'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        return new JsonResponse(['data' => [
            'lorem'=> 'ipsum dolor sit amet',
        ]], Response::HTTP_OK);
    }
}