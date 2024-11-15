# Actividad 15 - Documentación

## Descripción General

En la Actividad 15, se configuró un entorno de pruebas completo en un proyecto Next.js con el objetivo de realizar pruebas de unidad, integración y de instantáneas para asegurar la funcionalidad y estabilidad del proyecto. A continuación, se documentan los pasos realizados y las herramientas utilizadas para configurar, ejecutar y mantener las pruebas.

## 1. Configuración del Entorno de Pruebas

### Dependencias Instaladas

Para llevar a cabo las pruebas, se instalaron las siguientes dependencias:

- **Jest**: Marco de pruebas utilizado para ejecutar pruebas en el proyecto.
- **Testing Library**: Con `@testing-library/react` y `@testing-library/jest-dom` para pruebas de componentes en React.
- **MongoDB Memory Server**: Para realizar pruebas en una base de datos en memoria, simulando interacciones con MongoDB.
- **React Test Renderer**: Para realizar pruebas de instantáneas en componentes React.
- **Node Mocks HTTP**: Para simular solicitudes HTTP en pruebas de API.

Instalación de dependencias:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom react-test-renderer mongodb-memory-server node-mocks-http
```
---
## 2. Configuración de Jest

Se configuró Jest para el entorno Next.js. En el archivo `jest.config.js`, se definieron las opciones necesarias para Jest y las extensiones utilizadas, permitiendo que Jest reconozca los archivos de prueba y ejecute las pruebas en un entorno adecuado.

```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^pages/(.*)$': '<rootDir>/pages/$1'
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
```

---
## 3. Pruebas de Servicios y Middleware
#### Pruebas en MongoDB con Jest y Memory Server
- Se implementaron pruebas para servicios que utilizan MongoDB, con la ayuda de mongodb-memory-server, permitiendo realizar operaciones CRUD sin afectar la base de datos de producción. En estas pruebas, se verificaron funcionalidades como findByZip y updateByZip.

#### Pruebas de Middleware
- Se crearon pruebas para verificar que el middleware de conexión a la base de datos (db-connect) se conecte y desconecte correctamente utilizando Jest.

---
## 4. Pruebas de API End-to-End
- Se implementaron pruebas e2e para las rutas de API en el directorio pages/api/v1/weather. Estas pruebas se encargaron de verificar que las respuestas de los endpoints fueran correctas, comprobando datos como el código postal y el formato de la respuesta.

---
## 5. Pruebas de Instantáneas
Se configuraron pruebas de instantáneas para el componente PageComponentWeather. Las pruebas de instantáneas verifican la salida HTML del componente, asegurando que no haya cambios inesperados en su estructura visual.

#### Prueba de Renderizado Inicial
- Se creó una prueba para verificar que el componente PageComponentWeather se renderizara correctamente, generando una instantánea inicial.

#### Prueba de Interacción (Click)
- Se añadió otra prueba que simula un clic en el elemento h1 del componente, actualizando el estado y generando una segunda instantánea para verificar que la actualización se refleje en la representación del componente.

---
## 6. Cobertura de Código
Para asegurar que todas las funcionalidades del componente estén cubiertas, se ejecutaron pruebas de cobertura de código con el siguiente comando:

```bash
npm test -- --coverage
```
Este comando genera un reporte de cobertura, indicando qué partes del código están completamente cubiertas y cuáles requieren atención adicional.

---
## 7. Actualización de Instantáneas
Después de simular interacciones que alteran el estado del componente, se actualizó la instantánea con el siguiente comando:

```bash
npm test -- -u
```
Este comando asegura que las instantáneas reflejen el estado actual del componente tras las interacciones, permitiendo validar cambios esperados en el HTML renderizado.
---
## Resultados Finales
- Al finalizar la configuración y ejecución de las pruebas, todas las pruebas pasaron exitosamente y se obtuvieron las siguientes métricas de cobertura de código:

- Cobertura de Componentes: 100% en el archivo weather.tsx, asegurando que todas las funcionalidades están cubiertas.
- Cobertura de Servicios y Middleware: Verificadas las conexiones y desconexiones a la base de datos, así como las operaciones CRUD en servicios de MongoDB.
- Pruebas e2e en API: Respuestas de los endpoints verificadas correctamente.
---
## Conclusión
La actividad proporcionó una configuración robusta de pruebas en un entorno Next.js, cubriendo aspectos fundamentales para el mantenimiento y la escalabilidad de la aplicación. Las pruebas implementadas permiten detectar cambios no deseados en el código, manteniendo la integridad de las funcionalidades críticas del proyecto.
