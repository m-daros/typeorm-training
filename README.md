# Awesome Project Build with TypeORM

### Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Run `npm start` command

### Steps to generate migrations
npm run typeorm migration:generate -- -n <MIGRATION_NAME>

### Steps to run pending migrations

npm run typeorm migration:run