# Docker Compose & NodeJS
## Integrantes de equipo
- Karla González Sánchez | A01541526
- Renet de Jesús Pérez | A01640555
- Axel Hernández Montes de Oca | A01369965
- Ivan Ortega Sotomayor | A01383282 
- Lucas Wong Mang | A01639032

## Descripción del proyecto
Implementación de un servidor web basada en la API de Rick & Morty, las tecnologias que utilizamos para poder hacer este proyecto:

- Passport 
- MySQL 
- Docker
- Handlebars
- Express
- NodeJS

La forma de autenticación la hicimos por medio de la estrategia de Passport de: _passport-google-oauth_.

# ¿Como correr el servidor?
Ejecturar: `docker-compose up`

## Variables de entorno 
### mysql-database
```
    MYSQL_ROOT_PASSWORD: <Your_root_password>
    MYSQL_DATABASE: <Your_database>
```
    
### web-nodejs
```
    MYSQL_DATABASE: <Your_database>
    MYSQL_USER: <Your_user>
    MYSQL_ROOT_PASSWORD: <Your_root_password>
    MYSQL_HOST: <Your_host>
    GOOGLE_CLIENT_ID: <Your_client_id>
    GOOGLE_CLIENT_SECRET: <Your_client_secret>
    PORT: 3000
```

## Notas
- Tener docker y mysql instalado (para el caso de docker si se esta haciendo en terminal, instalar el *motor docker* y *docker-compose*)
 
- Tener libre el puerto 3306, para la ejecución del servidor de MySQL.

- En caso de que el servicio de _"web-nodejs"_ tenga problemas para conectarse con la base de datos, reiniciar el servicio de _"web-nodejs"_ (procurar hacerlo cuando el servicio de MySQL termine de ejecutarse).
