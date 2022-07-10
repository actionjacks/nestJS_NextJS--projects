start dev-db (service name is form docker-compose.yml)
```
docker-compose up -d
```

.env file - from setting docker-compose.yml
```
DATABASE_URL="postgresql://postgres:123@localhost:5434/nest?schema=public"
```

run if buil new skima model in schema.prisma
```
npx prisma migrate dev

npx prisma studio
```
