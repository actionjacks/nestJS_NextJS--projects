<?php

namespace App\Controller;

use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\HttpFoundation\Request;

class TestController
{
    private Filesystem $fs;
    private string $path;

    public function __construct()
    {
        $this->fs = new Filesystem();
        $this->path = __DIR__ . '/../sample-dir';
    }

    #[Route('/test', methods: ['GET'])]
    public function homepage(Request $request): Response
    {
        $text = $request->query->get('text', 'default text');

        try {
            $this->fs->mkdir($this->path);
            $this->fs->touch($this->path . '/text.txt');
            $this->fs->chmod($this->path . '/text.txt', 0644);

            file_put_contents($this->path . '/text.txt', $text . PHP_EOL, FILE_APPEND);
        } catch (IOExceptionInterface $e) {
            return new Response("File could not be created: " . $e->getMessage(), 500);
        }

        return new Response('File created successfully');
    }
}
