<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Clonar el repositorio.
2. Ejecutar 

```
npm install
```
3. Tener Nest CLI instalado

```
npm i -g @nestjs/cli
```

4. Levantar la base de datos
```
docker-compose -f ./docker/docker-compose.yml -p pokemon_service  up -d
```

5. Clonar el archivo __.env.template.__ y renonmbrar la copia a __.env.__

6. Llenar las variables de entornos definidas en el ```.env```

7. Ejecutar la aplicación en dev:
```
npm run start:dev 
```

8. Reconstruir la base de datos con la semilla (seed)
```
http://localhost:3000/api/v2/seed
```

## Stack usado
* Mongo DB
* Nest

# Production Build
1. Crear el archivo ```.env.prod```
2. Llenar las variables de entorno de producción.
3. En el docker-compose.prod.yaml cambiar la propiedad __external: true__ en __false__
   en caso de no tener un volumen ya creado.
4. Crear la nueva imagen usando el commando:
```
docker-compose -f./docker/docker-compose.prod.yaml --env-file .env.prod -p poke_service up -d 
```