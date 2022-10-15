## .env
```
POSTGRES_PASSWORD=123
POSTGRES_USER=jacek
POSTGRES_DB=jackdb

DATABASE_URL="postgresql://jacek:123@localhost:5432/jackdb?schema=public"
```

### steps

```
docker-compose up -d
```
## after changes in schema.prisma run
(--name of migration)
```
npx prisma migrate dev --name init
```

## generata client for DB 
```
npx prisma generate
```
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()