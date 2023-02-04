# INSTALLATION

1. Copy the repository link
2. Install all dependencies

```
npm i
```

3. Create DB environment

```
npx sequelize db:create
```

4. migrate the DB

```
npx sequelize db:migrate
```

5. Import all seeder data / dummy data

```
npx sequelize-cli db:seed:all
```

6. Run nodomen

```
npm run dev
```

# ENDPOINT & REQ BODY:

## LOGIN

link:

```
localhost:9900/api/v0/login
```

password is 12345 for both data user

req body:

```
{
      "name": "nova",
      "password": "12345"
}
```

Once you got the access_token, if you're using POSTMAN, copy it to Headers using "Authorization" key and input the token to value.
I'm just using Auth in User controller because all others controller is just GET method

#

## REGISTER

link:

```
localhost:9900/api/v0/register
```

Req body:

```
{
    "name": "tech",
    "email": "test123@gmail.com11",
    "password": "Us3r!",
    "rePassword": "Us3r!"
}
```

# ENDPOINT AND REQ BODY

## Kategories

1. **Get all detailed info about product**

```
localhost:9900/api/v0/allInfo
```

2. **Get kategories only:**

```

localhost:9900/api/v0/kategories

```

3. **Get kategories by ID:**

```

localhost:9900/api/v0/kategories/:id

```

      `ex: localhost:9900/api/v0/kategories/1`

4. **Get kategories by name:**

```

localhost:9900/api/v0/nameKategories

```

#

## PRODUCT

1. **Get product:**

```

localhost:9900/api/v0/getProd

```

2. **Get product with ascending price:**

```
localhost:9900/api/v0/getProdAsc/
```

#

## STOCK

1. **Get stock:**

```

localhost:9900/api/v0/getStock

```

`using query "name"`

#

## USER

1. **Get all user**

```
localhost:9900/api/v0/all
```

2. **Update data user**

```
localhost:9900/api/v0/update/:id
```

      ex: localhost:9900/api/v0/update/1

4. **Delete User**

```
localhost:9900/api/v0/delete/:id
```

      ex: localhost:9900/api/v0/delete/1

# FOR UNIT TESTING

1. **Make DB environment for testing**

```

sequelize db:create --env test

```

2. **Migrate it**

```

sequelize db:migrate --env test

```

3. **Seed data to DB test environment**

```

sequelize db:seed:all --env test

```

4.  **if needed, run**

```

./node_modules/jest/bin/jest --init

```

5. Don't forget to comment the response in controller
   **_ex: token response in login controller, product response when get any product._** so make sure the result is just JSON status and message

6. **Start testing use**

```

npm run test

```

7. Im commenting some test because some test require different data everytime otherwise it will encounter an error, so check it first is it commented or not if you want to try testing. (usually commenting all methode beside GET)

8. For **register, update, delete** unit test, make sure that you change the data once you success (or change the email because only 1 email can exist in registered account), otherwise you'll get an error because the data already exist / not exist if you run DELETE method twice without changing the parameter. Or just comment it for next testing.
