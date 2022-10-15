```
DATABASE_URL="postgres://postgres:postgres@localhost:5432/median-db"
DATABASE_URL="postgres://postgres:postgres@localhost:5432/nestjs-workshop-test"

npx prisma migrate dev --name "init"
```

## prisma/seed.ts

is for dummy data

## tool for DB

```
npx prisma studio
```

in src/prisma is service extends all db connection using prisma

swagger doc in main.ts

## controllers is routes

## service is logic for routes

## test create new db
```
//.env.test
DATABASE_URL="postgres://postgres:postgres@localhost:5432/nestjs-workshop-test"

```