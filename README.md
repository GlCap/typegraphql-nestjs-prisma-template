
![integration logo](https://raw.githubusercontent.com/MichalLytek/typegraphql-prisma/main/img/integration.png)
<p align="center">
  <img alt="nest logo" src="https://nestjs.com/img/logo_text.svg" width="300" height="200">
</p>

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository with [TypeGraphQL](https://github.com/MichalLytek/type-graphql) and [Prisma2](https://github.com/prisma/prisma) integrations using [typegraphql-prisma](https://github.com/MichalLytek/typegraphql-prisma) and [typegraphql-nestjs](https://github.com/MichalLytek/typegraphql-nestjs)

## Installation

```bash
$ yarn install
```

## Prisma

```bash
# Create a migration from changes in Prisma schema, apply it to the database, trigger generators (e.g. Prisma Client)
$ yarn prisma:migrate-dev

# Reset your database and apply all migrations
$ yarn prisma:migrate-reset

# Apply pending migrations to the database in production/staging
$ yarn prisma:migrate-deploy

# Check the status of migrations in the production/staging database
$ yarn prisma:migrate-status

# Generates prisma and typegraphql-prisma types a d resolvers
$ yarn prisma:generate
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```






