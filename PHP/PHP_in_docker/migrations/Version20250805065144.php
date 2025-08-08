<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20250805065144 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE starship_part ADD starship_id INT NOT NULL');
        $this->addSql('ALTER TABLE starship_part ADD CONSTRAINT FK_41C447379B24DF5 FOREIGN KEY (starship_id) REFERENCES starship_from_base (id) NOT DEFERRABLE INITIALLY IMMEDIATE');
        $this->addSql('CREATE INDEX IDX_41C447379B24DF5 ON starship_part (starship_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE SCHEMA public');
        $this->addSql('ALTER TABLE starship_part DROP CONSTRAINT FK_41C447379B24DF5');
        $this->addSql('DROP INDEX IDX_41C447379B24DF5');
        $this->addSql('ALTER TABLE starship_part DROP starship_id');
    }
}
