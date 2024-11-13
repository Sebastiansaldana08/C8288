
### Página Principal y Plantillas

http://localhost:3000/ - Renderiza la plantilla index.ejs con título y subtítulo.

### Rutas Estáticas

http://localhost:3000/users - Muestra la lista de usuarios.
http://localhost:3000/about - Muestra la página "Acerca de".

### Rutas Dinámicas y Opcionales

- Muestra información de un usuario específico según el id proporcionado. Ejemplo: http://localhost:3000/users/123 - http://localhost:3000/invoice/

- Muestra una factura específica si se proporciona el id; si no, muestra todas las facturas. Ejemplo: http://localhost:3000/invoice/456 o http://localhost:3000/invoice.

### Ruta con Expresión Regular

http://localhost:3000/butterfly, http://localhost:3000/dragonfly - Coincide con cualquier ruta que termine en "fly".

### Manejo de Respuestas HTTP

http://localhost:3000/headers - Muestra una página con encabezados HTTP personalizados.
http://localhost:3000/success - Devuelve un mensaje de éxito con código de estado 200.
http://localhost:3000/not-found - Devuelve un mensaje de recurso no encontrado con código de estado 404.
http://localhost:3000/error - Devuelve un mensaje de error del servidor con código de estado 500.

### Redirecciones

http://localhost:3000/google - Redirige a la página de Google.
http://localhost:3000/about-redirect - Redirige a la página /about.

### Respuestas en Diferentes Formatos

http://localhost:3000/text - Devuelve una respuesta en texto simple.
http://localhost:3000/json - Devuelve una respuesta en formato JSON.
http://localhost:3000/download - Descarga un archivo llamado archivo.txt.

### Procesamiento de Datos de Formulario

POST http://localhost:3000/submit-form - Procesa datos enviados en el cuerpo de la solicitud (campos name y email).
