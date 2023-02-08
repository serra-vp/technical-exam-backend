# API Backend Node.js Diagnostic Exam


#### Application pre-requisites:
[XAMPP Control Panel](https://www.apachefriends.org/download.html)
[Visual Studio Code](https://code.visualstudio.com/)
[Node.js](https://nodejs.org/en/download/)
[Postman] ()

## Installation
1. Install the dependencies and devDependencies
2. Open xampp and start `mysql` server
3. Open this repository with `Visual Studio Code`
4. Rename the `.env.sample` to `.env`
5. Then run these scripts below:
```sh
npm i
npm run setup-db
npm start
```
6. Open Postman, create the http request for login before requesting other routes and after logging in, copy the token. 
  Dont forget to add the bearer token before doing a http request.
  -Auth -> Type[' Bearer Token '] -> token will be on login

Sample User and password
`
  "username":"vpserra",
  "password": "Test123"
`

### Features - Routes
1. Add a new user - `/users/create-user`
2. Edit a user - `/users/update-user`
3. Delete a user - `/users/delete-user?id=`
4. View list of all users in the system - `/users/`
5. View a User - `/users/6`
5. Delete multiple users to be removed - `/users/delete-multiple-user?users_id=`
6. Login - `/authenticate/login`


## Tech

Dillinger uses a number of open source projects to work properly:

- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework
- [jsonwebtoken] - data encryption for session package
- [Argon2] - password hasher package
- [knex] - database migration package
- [mysql2] - MYSQL package for nodejs






