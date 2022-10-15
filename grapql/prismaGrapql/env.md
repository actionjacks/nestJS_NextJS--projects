```
POSTGRES_USER=root
POSTGRES_PASSWORD=password
POSTGRES_DB=backend
```

```
DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@localhost:5432/${POSTGRES_DB}?schema=public&sslmode=prefer
```

```
docker-compose up
```

```
yarn prisma init
```

after add new record to prisma schema

```
yarn prisma migrate dev --migration name
```
