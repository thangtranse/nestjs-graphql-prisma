# Prisma schema - data model

## Setup DBML
1. Install libery
```bash
npm install -D prisma-dbml-generator
```
2. Add the generator to the schema.prisma
```
generator dbml {
  provider = "prisma-dbml-generator"
}
```
3. Running
```bash
npx prisma generate
```
4. [Visualize](https://dbdiagram.io/d) the schema.dbml

# References
1. [prisma-schema/data-model](https://www.prisma.io/docs/concepts/components/prisma-schema/data-model#defining-fields)

2. [prisma-dbml-generator](https://github.com/notiz-dev/prisma-dbml-generator)