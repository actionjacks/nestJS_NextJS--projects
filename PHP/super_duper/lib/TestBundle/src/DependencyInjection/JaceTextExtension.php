<?php

declare(strict_types=1);

namespace Jacek\TestBundle\DependencyInjection;

use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\Extension;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;

final class JaceTextExtension extends Extension
{
    /**
     * Loads specific configuration.
     *
     * @param array            $configs   Configurations
     * @param ContainerBuilder $container Container
     *
     * @throws \Exception
     */
    public function load(array $configs, ContainerBuilder $container): void
    {
        $loader = new YamlFileLoader($container, new FileLocator(__DIR__.'/../Resources/config'));
        $loader->load('services.yml');
        $configuration = $this->getConfiguration($configs, $container);
        if (null === $configuration) {
            throw new \Exception('Configuration not found');
        }

        $this->processConfiguration($configuration, $configs);
    }
}
