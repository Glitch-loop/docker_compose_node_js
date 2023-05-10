# Docker Compose & NodeJS
## Team members
- Karla González Sánchez | A01541526
- Renet de Jesús Pérez | A01640555
- Axel Hernández Montes de Oca | A01369965
- Ivan Ortega Sotomayor | A01383282 
- Lucas Wong Mang | A01639032

## Project description
Implementation of a web application based on the Rick & Morty API.

Technologies used to carry out this project:

- Passport 
- MySQL 
- Docker
- Handlebars
- Express
- NodeJS

We did the authentication through the Passport strategy: *passport-google-oauth*

# How to build and run the server?
Ejecturar: `docker-compose up`

## Enviroment variables
### mysql-database service
```
    MYSQL_ROOT_PASSWORD: <Your_root_password>
    MYSQL_DATABASE: <Your_database>
```
    
### web-nodejs service
```
    MYSQL_DATABASE: <Your_database>
    MYSQL_USER: <Your_user>
    MYSQL_ROOT_PASSWORD: <Your_root_password>
    MYSQL_HOST: <Your_host>
    GOOGLE_CLIENT_ID: <Your_client_id>
    GOOGLE_CLIENT_SECRET: <Your_client_secret>
    PORT: 3000
```

## Notes
- Have **docker** and **mysql** installed (if you are using the Ubuntu operating system, you will need to install *docker engine* and *docker-compose*).

- Have port 3306 free, to run the Mysql server with `docker-compose up`

- If *web-nodejs* has problems connecting to the database, restart it (check for *mysql-database service* already terminated).
