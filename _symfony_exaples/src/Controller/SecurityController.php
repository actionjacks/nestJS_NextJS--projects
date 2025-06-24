<?php
// src/Controller/SecurityController.php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserRegistrationTypeForm;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface; // Import dla JWT

class SecurityController extends AbstractController
{
    public function __construct(
        private SerializerInterface $serializer,
        private EntityManagerInterface $entityManager,
        private UserPasswordHasherInterface $passwordHasher // Potrzebne do hashowania haseł
    ) {
    }

    #[Route('/api/register', name: 'api_register', methods: ['POST'])]
    public function register(Request $request): JsonResponse
    {
        $user = new User();
        $form = $this->createForm(UserRegistrationTypeForm::class, $user);

        // API oczekuje danych JSON
        $data = json_decode($request->getContent(), true);
        $form->submit($data);

        if ($form->isSubmitted() && $form->isValid()) {
            // Hashowanie hasła
            $hashedPassword = $this->passwordHasher->hashPassword(
                $user,
                $form->get('password')->getData() // Pobierz hasło z formularza
            );
            $user->setPassword($hashedPassword);
            $user->setRoles(['ROLE_USER']); // Domyślna rola dla nowego użytkownika

            $this->entityManager->persist($user);
            $this->entityManager->flush();

            // Zwróć sukces
            $jsonContent = $this->serializer->serialize($user, 'json', ['groups' => 'user:read']);
            return new JsonResponse(
                $jsonContent,
                Response::HTTP_CREATED, 
                [], 
                true
            ); // true oznacza, że odpowiedź jest już w formacie JSON
        }

        // Zwróć błędy walidacji formularza
        $errors = [];
        foreach ($form->getErrors(true) as $error) { // Usunięto drugi argument 'false'
            // getCause() zwraca obiekt ConstraintViolation, z którego można pobrać pole
            $propertyPath = $error->getCause() ? $error->getCause()->getPropertyPath() : null;
            // Jeśli błąd jest przypisany do konkretnego pola, użyj jego nazwy. W przeciwnym razie,
            // użyj nazwy formularza głównego (np. "form" lub "general").
            $fieldName = $propertyPath ? $propertyPath : 'general';
            $errors[$fieldName][] = $error->getMessage();
        }
        return new JsonResponse(['errors' => $errors], Response::HTTP_BAD_REQUEST);
    }

    // Endpoint do logowania (obsługiwany automatycznie przez LexikJWTAuthenticationBundle)
    // Nie potrzebujesz tutaj własnej logiki, pakiet to zrobi za Ciebie.
    // Wystarczy zdefiniować ten endpoint w security.yaml
    #[Route('/api/login', name: 'api_login', methods: ['POST'])]
    public function login(): JsonResponse
    {
        // Ta metoda będzie wywołana tylko w przypadku NIEPOPRAWNEJ autentykacji (np. złe dane logowania).
        // W przypadku sukcesu, JWTBundle przechwyci żądanie i zwróci token.
        // Zobacz konfigurację w security.yaml i lexik_jwt_authentication.yaml
        return new JsonResponse(['message' => 'Invalid credentials'], Response::HTTP_UNAUTHORIZED);
    }

    // Endpoint do pobierania informacji o zalogowanym użytkowniku (wymaga autentykacji JWT)
    #[Route('/api/login_check', name: 'api_me', methods: ['GET'])]
    public function me(): JsonResponse
    {
        /** @var User $user */
        $user = $this->getUser(); // Pobierz aktualnie zalogowanego użytkownika

        if (!$user) {
            return new JsonResponse(['message' => 'Not authenticated'], Response::HTTP_UNAUTHORIZED);
        }

        $jsonContent = $this->serializer->serialize($user, 'json', ['groups' => 'user:read']);
        return new JsonResponse($jsonContent, Response::HTTP_OK, [], true);
    }
}