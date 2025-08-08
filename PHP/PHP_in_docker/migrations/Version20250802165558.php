<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250802165558 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('UPDATE starship_from_base SET slug = id, created_at = arrived_at, updated_at = arrived_at');


        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE starship_from_base ALTER slug SET NOT NULL');
        $this->addSql('ALTER TABLE starship_from_base ALTER created_at SET NOT NULL');
        $this->addSql('ALTER TABLE starship_from_base ALTER updated_at SET NOT NULL');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_F8A969DE989D9B62 ON starship_from_base (slug)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('DROP INDEX UNIQ_F8A969DE989D9B62');
        $this->addSql('ALTER TABLE starship_from_base ALTER slug DROP NOT NULL');
        $this->addSql('ALTER TABLE starship_from_base ALTER created_at DROP NOT NULL');
        $this->addSql('ALTER TABLE starship_from_base ALTER updated_at DROP NOT NULL');
    }
}
