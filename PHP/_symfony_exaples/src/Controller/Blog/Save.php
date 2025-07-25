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

class Save extends AbstractController
{
    // Wstrzyknij SerializerInterface do kontrolera
    public function __construct(private SerializerInterface $serializer)
    {
    }

    #[Route('api/blog/new', name: 'blog_new_api', methods: ['POST'])]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $post = new Post();
        $form = $this->createForm(PostTypeForm::class, $post);

        // API często odbierają dane JSON, a nie z formularzy HTML.
        // Jeśli będziesz wysyłać dane jako JSON, potrzebujesz czegoś takiego:
        $data = json_decode($request->getContent(), true);
        $form->submit($data); // Użyj submit zamiast handleRequest dla danych JSON

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($post);
            $entityManager->flush();

            // Zwróć nowo utworzony post jako JSON z kodem statusu 201 Created
            // Grupy serializacji są bardzo ważne, aby kontrolować, które pola są eksponowane.
            // Jeśli nie masz grup, wszystkie pola publiczne/gettery będą serializowane.
            $jsonContent = $this->serializer->serialize($post, 'json', ['groups' => 'post:read']);
            return new JsonResponse($jsonContent, Response::HTTP_CREATED, [], true);
        }

        // Jeśli formularz jest niepoprawny, zwróć błędy formularza
        // Serializuj błędy formularza do JSON
        $errors = [];
        foreach ($form->getErrors(true, false) as $error) {
            $errors[$error->getOrigin()->getName()] = $error->getMessage();
        }
        return new JsonResponse(['errors' => $errors], Response::HTTP_BAD_REQUEST);
    }
}