# Actividad 14: Conectando la API GraphQL a la Base de Datos

## Objetivo
El objetivo de esta actividad fue comprender e implementar la conexión de una API GraphQL con una base de datos MongoDB usando Mongoose, promoviendo prácticas como la modularidad y la optimización de conexiones. Los ejercicios prácticos y teóricos buscaron fortalecer el uso de servicios y middleware para una integración eficiente y escalable.

## Pasos realizados:

1. **Implementación de Conexión a la Base de Datos**
   - Se estableció la conexión a MongoDB en el archivo `api/graphql.ts`.
   - Se configuró un middleware `dbConnect` para que todas las solicitudes que lleguen al punto `/graphql` utilicen la misma conexión a la base de datos, asegurando que solo haya una conexión activa y optimizando el manejo de conexiones en Next.js.

2. **Refactorización de Resolvers**
   - Se modificaron los resolvers de la API GraphQL para que, en lugar de usar datos estáticos, accedan a la base de datos a través de servicios.
   - En el archivo `graphql/resolvers.ts`, los resolvers para consultas y mutaciones (`findByZip` y `updateByZip`) se reorganizaron para aprovechar la base de datos, manteniendo una estructura modular al separar la lógica de acceso a datos en servicios independientes.

3. **Configuración de Servicios y CORS**
   - Los servicios se implementaron para separar la lógica de datos de la lógica de negocio, mejorando la mantenibilidad del código.
   - Se configuraron encabezados de CORS para permitir el acceso desde cualquier origen, y se sugirió restringir estos permisos en entornos de producción para mayor seguridad.

4. **Ejercicio Práctico en GraphQL Sandbox**
   - La actividad finalizó con pruebas en el sandbox de GraphQL, donde se validó la funcionalidad de las consultas y mutaciones implementadas:
     - **Consultar** datos meteorológicos por código postal.
     - **Actualizar** datos meteorológicos para una ubicación específica.
     - **Eliminar** registros meteorológicos.

## Ejercicios Adicionales

- **Configuración de Conexión a MongoDB**
  - Se creó un archivo `db-connect.ts` en la carpeta `middleware` que maneje correctamente la conexión a MongoDB y evite múltiples conexiones.

- **Implementación de Mutación de Eliminación**
  - Añadir una mutación `deleteWeather` para eliminar un registro por código postal, tanto en el resolver como en el servicio correspondiente.

## Conclusión
Con esta actividad, se logró conectar una API GraphQL a MongoDB, refactorizar el acceso a datos mediante servicios y probar la API en un sandbox de GraphQL, sentando las bases para aplicaciones escalables y bien estructuradas.
