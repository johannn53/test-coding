1. RUN NPM I TO INSTALL ALL DEPENDENCIES
2. npx sequelize-cli db:seed:all TO IMPORT ALL SEEDERS DATA
3. npx sequelize-cli db:seed --seed (seeders file name) to seed specific file/data
4. Login using admin account (if using "user" roles you'll have no access)

ENDPOINT:

1. Login: localhost:9900/api/v0/login
2. Get all user: localhost:9900/api/v0/all
3. Get stock: localhost:9900/api/v0/getStock
4. Get product: localhost:9900/api/v0/getProd
5. Get kategories: localhost:9900/api/v0/kategories
6. Get kategories by ID: localhost:9900/api/v0/kategories/:id <!-- ex: localhost:9900/api/v0/kategories/:id  -->
7. Get kategories by name: localhost:9900/api/v0/nameKategories/ <!-- using query "name" -->
