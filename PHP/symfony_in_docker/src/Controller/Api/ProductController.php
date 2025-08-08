<?php

namespace App\Controller\Api;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;
use App\Entity\Product;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Validator\Validator\ValidatorInterface;

final class ProductController extends AbstractController
{
    #[Route('/api/products', methods: ['GET'])]
    public function index(
        EntityManagerInterface $em,
        SerializerInterface $serializer
    ): JsonResponse {
        $products = $em->getRepository(Product::class)->findAll();

        $json_content = $serializer->serialize($products, 'json', [
            ObjectNormalizer::IGNORED_ATTRIBUTES => ['id'],
        ]);

        // return $this->json([
        //     'data' =>  $products,
        // ]);
        return JsonResponse::fromJsonString($json_content);
    }

    #[Route('/api/products/{id}', methods: ['GET'])]
    public function show(
        EntityManagerInterface $em,
        SerializerInterface $serializer,
        int $id
    ): JsonResponse {
        $product = $em->getRepository(Product::class)->find($id);
        if (!$product) {
            return new JsonResponse(['error' => 'Product not found'], 404);
        }
        $json_content = $serializer->serialize($product, 'json', [
            ObjectNormalizer::IGNORED_ATTRIBUTES => ['id'],
        ]);
        return JsonResponse::fromJsonString($json_content);
    }

    #[Route('/api/products', methods: ['POST'])]
    public function create(
        EntityManagerInterface $em,
        SerializerInterface $serializer,
        Request $request,
        ValidatorInterface $validator
    ): JsonResponse {
        $data = $serializer->deserialize(
            $request->getContent(),
            Product::class,
            'json'
        );
        # $data = json_decode($request->getContent(), true);

        $errors = $validator->validate($data);
        if (count($errors) > 0) {
            $errorMessages = [];

            foreach ($errors as $error) {
                $errorMessages[$error->getPropertyPath()][] = $error->getMessage();
            }
            return new JsonResponse(['errors' => $errorMessages], 400);
        }

        // if (!$data || !isset($data['name'])) {
        //     return new JsonResponse(['error' => 'Invalid data'], 400);
        // }

        $product = new Product();
        $product->setName($data['name'])
            ->setSize($data['size'] ?? null)
            ->setIsAvailable($data['isAvailable'] ?? true)
            ->setPublishedOn(isset($data['publishedOn']) ? new \DateTime($data['publishedOn']) : null);
        $em->persist($product);
        $em->flush();
        $json_content = $serializer->serialize($product, 'json', [
            ObjectNormalizer::IGNORED_ATTRIBUTES => ['id'],
        ]);
        return new JsonResponse($json_content, 201, [], true);
    }

    #[Route('/api/products/{id}', methods: ['PUT'])]
    public function update(
        EntityManagerInterface $em,
        SerializerInterface $serializer,
        Request $request,
        int $id,
        ValidatorInterface $validator
    ): JsonResponse {
        $product = $em->getRepository(Product::class)->find($id);
        if (!$product) {
            return new JsonResponse(['error' => 'Product not found'], 404);
        }
        $data = $serializer->deserialize(
            $request->getContent(),
            Product::class,
            'json',
            ['object_to_populate' => $product]
        );
        $errors = $validator->validate($data);
        if (count($errors) > 0) {
            $errorMessages = [];
            foreach ($errors as $error) {
                $errorMessages[$error->getPropertyPath()][] = $error->getMessage();
            }
            return new JsonResponse(['errors' => $errorMessages], 400);
        }

        $product->setName($data->getName())
            ->setSize($data->getSize())
            ->setIsAvailable($data->isAvailable())
            ->setPublishedOn($data->getPublishedOn());
        $em->persist($product);
        $em->flush();
        $json_content = $serializer->serialize($product, 'json', [
            ObjectNormalizer::IGNORED_ATTRIBUTES => ['id'],
        ]);
        return new JsonResponse($json_content, 200, [], true);
    }

    #[Route('/api/products/{id}', methods: ['DELETE'])]
    public function delete(
        EntityManagerInterface $em,
        int $id
    ): JsonResponse {
        $product = $em->getRepository(Product::class)->find($id);
        if (!$product) {
            return new JsonResponse(['error' => 'Product not found'], 404);
        }
        $em->remove($product);
        $em->flush();
        return new JsonResponse(null, 204);
    }
}
