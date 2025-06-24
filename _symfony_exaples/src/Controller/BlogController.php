<?php
namespace App\Controller;

use App\Entity\Post;
use App\Form\PostTypeForm;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Request;

class BlogController extends AbstractController
{
    #[Route('/blog/new', name: 'blog_new')]
    public function new(Request $request, EntityManagerInterface $entityManager): Response
    {
        $post = new Post(); // Tworzymy nową pustą encję Post

        // Ustawienie createdAt, jeśli nie jest obsługiwane przez bazę danych (np. domyślna wartość)
        // Jeśli baza danych ma DEFAULT CURRENT_TIMESTAMP, to nie jest konieczne.
        // Jeśli chcesz ustawiać czas w PHP, to:
        // $post->setCreatedAt(new \DateTimeImmutable());

        $form = $this->createForm(type: PostTypeForm::class, data: $post); // Tworzymy formularz i przypisujemy mu encję

        $form->handleRequest($request); // Obsłuż żądanie HTTP (przetwórz dane z formularza)

        // Sprawdź, czy formularz został wysłany i czy jest poprawny
        if ($form->isSubmitted() && $form->isValid()) {
            // Persist (przygotuj do zapisu) encję
            $entityManager->persist($post);
            // Wykonaj zapis do bazy danych
            $entityManager->flush();

            $this->addFlash('success', 'Post created successfully!'); // Komunikat dla użytkownika

            // Przekieruj na listę postów po zapisaniu
            return $this->redirectToRoute('blog_list');
        }

        return $this->render('blog/new.html.twig', [
            'form' => $form->createView(), // Przekaż obiekt formularza do szablonu
        ]);
    }

    #[Route('/blog', name: 'blog_list')]
    public function list(EntityManagerInterface $entityManager): Response
    {
        $mock_posts = [
            ['id' => 1,'title' => 'First Post','content' => 'This is the content of the first post.'],
            ['id' => 2,'title' => 'Second Post','content' => 'This is the content of the second post.']
        ];

        $posts = $entityManager->getRepository(Post::class)->findBy([], ['createdAt' => 'DESC']);

        return $this->render('blog/list.html.twig', [
            'posts' => $posts,
        ]);
    }

    #[Route('/blog/{id}', name: 'blog_show')]
    public function show(int $id, EntityManagerInterface $entityManager): Response
    {
        // 1. Spróbuj znaleźć posta po ID
        $post = $entityManager->getRepository(Post::class)->find($id);

        // 2. Jeśli post nie został znaleziony, rzuć błąd 404
        if (!$post) {
            throw $this->createNotFoundException(
                'The blog post does not exist' // Opcjonalny komunikat, który może być wyświetlony na stronie błędu 404
            );
            // Ta linia zatrzyma wykonanie i pokaże stronę 404.
            // Możesz również przekierować użytkownika lub wyświetlić inną stronę.
        }

        // 3. Jeśli post został znaleziony, wyrenderuj szablon
        return $this->render('blog/show.html.twig', [
            'post' => $post,
        ]);
    }
}