# Actividad 13: Integración de una API GraphQL en una Aplicación Next.js

## Objetivo
Integrar una API GraphQL en una aplicación Next.js para optimizar la gestión y obtención de datos. Esta actividad incluyó la configuración de un servidor Apollo, la definición de esquemas y resolvers, y la ejecución de consultas y mutaciones en el Apollo Sandbox.

## Descripción General
La actividad se enfocó en implementar el flujo básico de una API GraphQL en una aplicación Next.js. Utilizamos Apollo Server para gestionar las consultas y mutaciones y creamos resolvers personalizados para manejar el flujo de datos. La integración de GraphQL permite un acceso y actualización más eficientes de los datos, así como una mayor flexibilidad en las consultas.

## Pasos Realizados

### 1. Configuración del Entorno
- Instalación de las dependencias necesarias: `@apollo/server`, `graphql`, y `@as-integrations/next`.
- Creación de la carpeta de trabajo `actividad13` y configuración del entorno de desarrollo en Next.js.

### 2. Definición del Esquema GraphQL
- Creación de un archivo `schema.graphql` para definir los tipos de datos, consultas, y mutaciones soportados por la API.
- Definición de los tipos principales para la API:
  - **Tipos de entidad**: Definimos tipos básicos de entidades y sus propiedades para reflejar la estructura de datos utilizada en la aplicación.
  - **Consultas**: Definimos consultas para obtener datos específicos y listas de elementos.
  - **Mutaciones**: Creamos mutaciones para agregar, actualizar y eliminar elementos en la API.

### 3. Implementación de Resolvers
- Creación de resolvers en un archivo `resolvers.js` que gestiona la lógica de cada consulta y mutación definida en el esquema.
- Configuración de funciones para manejar la obtención y manipulación de datos:
  - **Query resolvers**: Se encargan de manejar la obtención de datos según los parámetros recibidos.
  - **Mutation resolvers**: Implementan la lógica para la creación, actualización y eliminación de datos.

### 4. Configuración del Servidor Apollo
- Configuración de Apollo Server en Next.js para manejar las solicitudes GraphQL.
- Configuración del endpoint de GraphQL en `api/graphql` utilizando `ApolloServer` y los resolvers definidos.
- Habilitación de **CORS** para permitir solicitudes desde diferentes orígenes.

### 5. Ejecución de Consultas y Mutaciones en Apollo Sandbox
- Uso de Apollo Sandbox para probar las consultas y mutaciones definidas en el esquema.
- Ejecución de consultas básicas para obtener datos y verificación de respuestas en tiempo real.
- Ejecución de mutaciones para probar la inserción, actualización y eliminación de datos.

### 6. Ejercicios Avanzados en Apollo Sandbox
Para extender la funcionalidad de la API y cubrir casos de uso avanzados:
- **Paginación**: Implementación de parámetros de paginación en las consultas para optimizar el rendimiento en listas largas.
- **Autenticación**: Configuración de una autenticación básica en los resolvers para proteger ciertos datos sensibles.
- **Optimización de consultas**: Configuración de consultas más eficientes mediante la optimización de los resolvers.

## Buenas Prácticas y Consideraciones
- **Validación de datos**: Asegurarse de que los datos enviados en las mutaciones cumplen con los requisitos del esquema.
- **Uso de tokens y autenticación**: Implementar medidas de seguridad para proteger el acceso a la API.
- **Manejo de errores**: Configurar mensajes de error claros en los resolvers para manejar casos de datos faltantes o errores de permisos.

## Conclusión
Esta actividad nos permitió implementar y configurar una API GraphQL funcional en Next.js con Apollo Server. Asimismo, se verificó que la integración de GraphQL facilita la gestión de datos y permite consultas flexibles y optimizadas en la aplicación, mejorando la experiencia de usuario y el rendimiento de la aplicación.
