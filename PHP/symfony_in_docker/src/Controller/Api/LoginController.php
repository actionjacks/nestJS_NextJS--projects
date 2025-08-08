<?php

namespace App\Controller\Api;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

final class LoginController extends AbstractController
{
  #[Route('/api/login', methods: ['POST'])]
  public function login(): JsonResponse
  {
    return new JsonResponse(['message' => 'Login successful'], 200);
  }

  #[Route('/api/logout', methods: ['POST'])]
  public function logout(): JsonResponse
  {
    return new JsonResponse(['message' => 'Logout successful'], 200);
  }

  #[Route('/api/login_check', methods: ['POST'])]
  public function loginCheck(): JsonResponse
  {
    return new JsonResponse(['message' => 'Login check successful'], 200);
  }

  #[Route('/api/register', methods: ['POST'])]
  public function register(
    Request $request,
    EntityManagerInterface $em,
    UserPasswordHasherInterface $passwordHasher,
    SerializerInterface $serializer,
    ValidatorInterface $validator
  ): JsonResponse {
    # $data = json_decode($request->getContent(), true);
    $user = $serializer->deserialize(
      $request->getContent(),
      User::class,
      'json'
    );

    $errors = $validator->validate($user);
    if (count($errors) > 0) {
      $errorMessages = [];
      foreach ($errors as $error) {
        $errorMessages[$error->getPropertyPath()][] = $error->getMessage();
      }
      return new JsonResponse(['errors' => $errorMessages], 400);
    }

    // $email = $data['email'] ?? null;
    // $password = $data['password'] ?? null;
    // if (!$email || !$password) {
    //   return new JsonResponse(['error' => 'Email and password are required'], 400);
    // }

    if ($em->getRepository(User::class)->findOneBy(['email' => $user->getEmail()])) {
      return new JsonResponse(['error' => 'Email already exists'], 400);
    }

    $hashedPassword = $passwordHasher->hashPassword($user, $user->getPassword());
    $user->setPassword($hashedPassword);

    // $user = new User();
    // $user->setEmail($email);
    // $hashedPassword = $passwordHasher->hashPassword($user, $password);
    // $user->setPassword($hashedPassword);

    $user->setRoles(['ROLE_USER']);

    $em->persist($user);
    $em->flush();

    return new JsonResponse(['message' => 'Registration successful'], 201);
  }
}
