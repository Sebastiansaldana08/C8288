# Actividad 12: Creación de Aplicaciones Web con Express

## Objetivo
Crear y configurar una aplicación web básica utilizando Express. La actividad incluyó la creación de rutas, el manejo de solicitudes y respuestas HTTP, la integración de middleware, y la configuración de un entorno de pruebas y depuración para Express.

## Descripción General
En esta actividad, desarrollamos una aplicación Express desde cero, configurando sus rutas básicas, middleware y pruebas. También exploramos cómo estructurar la aplicación y cómo implementar características comunes de un servidor web, como el manejo de archivos estáticos y la generación de vistas.

## Pasos Realizados

### 1. Inicialización del Proyecto y Configuración de Express
- Inicialización de la aplicación Express mediante `express-generator`, configurando una estructura de carpetas estándar.
- Instalación de las dependencias iniciales y configuración básica del entorno de desarrollo.

### 2. Configuración de Rutas Estáticas y Dinámicas
- **Rutas estáticas**: Configuramos una carpeta `public` para servir archivos estáticos, como CSS y JavaScript, que pueden ser accedidos directamente en el navegador.
- **Rutas dinámicas**: Creamos rutas que reciben parámetros, permitiendo responder a peticiones con contenido dinámico según los datos proporcionados en la URL.

### 3. Creación de Middleware
- Configuración de middleware para manejar solicitudes y respuestas:
  - **Middleware para manejo de errores**: Configuración de un middleware de manejo de errores que captura excepciones y envía respuestas de error.
  - **Middleware para procesamiento de datos**: Middleware que analiza el cuerpo de la solicitud (usando `express.json()` y `express.urlencoded()`).
- **Implementación de middleware personalizado**: Se añadió un middleware para registrar el tiempo de cada solicitud en la consola.

### 4. Configuración de Rutas de la Aplicación
- **Hello World**: Ruta simple que devuelve "Hello World!" para confirmar el funcionamiento básico de Express.
- **Rutas con parámetros**: Rutas que aceptan parámetros en la URL y responden dinámicamente.
- **Manejo de redirecciones y códigos de estado**: Configuración de rutas para redirigir a otras rutas o responder con códigos de estado específicos (e.g., 404 para recursos no encontrados).

### 5. Configuración de un Motor de Plantillas
- Integración de **EJS (Embedded JavaScript)** como motor de plantillas para generar vistas dinámicas.
  - Creación de vistas en la carpeta `views` y uso de variables de servidor para personalizar el contenido de cada página.
- Configuración de archivos `layout.ejs` y plantillas parciales para reutilizar estructuras de HTML entre páginas.

### 6. Herramientas de Depuración y Manejo de Archivos
- **express-debug**: Integración de una herramienta de depuración para monitorear el flujo de la aplicación y mejorar el diagnóstico de errores.
- **Manejo de archivos**: Configuración de rutas para manejar solicitudes de subida y descarga de archivos, usando middleware de Express.


## Conclusión
Esta actividad permitió implementar una aplicación básica en Express, explorando desde la configuración inicial hasta la creación de rutas y middleware personalizados. 

