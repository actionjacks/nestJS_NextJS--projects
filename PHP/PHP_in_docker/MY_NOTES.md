# This shows us some extra environment variables that the Symfony CLI is setting for us, in addition to the ones in .env.

```bash
php bin/console c:c
```

```bash
 symfony var:export --multiline
 symfony console doctrine:database:create
 
 # (php bin/console doctrine:database:create)
 # (php bin/console make:entity)
 # (php bin/console make:migration)
 # (php bin/console doctrine:migrations:migrate)
 ```

# create Entity
```bash
php bin/console make:entity
php bin/console make:migration
php bin/console doctrine:migrations:migrate
```

# AppFixtures - populating the database with sample data
# (src\DataFixtures\AppFixtures.php)


# debug
https://localhost/_profiler

##
# Controler-> chce cos wyszukac uzywa Repository -> repository uzywa ENCJI