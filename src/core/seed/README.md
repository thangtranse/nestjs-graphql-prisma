# Seeding NestJs with Prisma

1. Create file `seed.ts` with the script:

```typescript
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding...');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
```

2. Add the seeder to our `package.json` for ease of use:

```json
{
  "scripts": {
    "seed": "ts-node seed.ts"
  }
}
```

| you need to modify the `path` file of the seed file.

3. And then we run the seeder:

```bash
yarn seed
```


# References

https://www.prisma.io/docs/guides/database/seed-database
