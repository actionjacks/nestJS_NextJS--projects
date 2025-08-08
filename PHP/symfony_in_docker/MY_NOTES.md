# This shows us some extra environment variables that the Symfony CLI is setting for us, in addition to the ones in .env.

```bash
alias sf="php bin/console" # in docker container
```

```bash
php bin/console c:c
php bin/console make:controller Api\\<controller_name>
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

# global handler
```bash
php bin/console make:listener Exception
```

# AppFixtures - populating the database with sample data
# (src\DataFixtures\AppFixtures.php)


# debug
https://localhost/_profiler

##
# CONTROLLER-> chce cos wyszukac uzywa REPOSITORY -> repository uzywa ENTITY

#