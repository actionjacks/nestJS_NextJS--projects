<?php

namespace Jacek\TestBundle\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DemoController
{
    #[Route('/test/bundle', name: 'test_bundle_demo')]
    public function demo(): Response
    {
        return new Response('Hello from test bundle!');
    }
}
