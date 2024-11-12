## Ejercicio 2: Encadenamiento de Promesas

### Descripción del Problema:
Este ejercicio resuelve el problema del **Callback Hell** presentado en el **Ejercicio 1**, utilizando promesas para mejorar la legibilidad y escalabilidad del código.

### Pasos Implementados:
1. **Leer un archivo JSON** con la información de usuarios utilizando `fs.promises.readFile`.
2. **Hacer una solicitud HTTP** para obtener más información de cada usuario usando `axios`.
3. **Guardar los datos combinados** en un archivo JSON con `fs.promises.writeFile`.

### Explicación Técnica:
- Se emplean promesas para manejar operaciones asíncronas de manera más ordenada y legible.
- Se usa el operador `spread` (`...`) para combinar los datos obtenidos de la API externa con los datos originales de los usuarios.
- El uso de `Promise.all` permite manejar múltiples solicitudes HTTP de manera eficiente y simultánea.
- Los errores se capturan de manera centralizada utilizando `.catch`, lo que mejora la gestión de errores en comparación con los callbacks.

### Preguntas de Análisis:
1. **¿Cómo mejora la legibilidad del código en comparación con el uso de callbacks?**
   Usar promesas hace que el código sea más legible y lineal, evitando el anidamiento de callbacks y mejorando la claridad del flujo de ejecución.

2. **¿Cómo maneja las promesas los errores en comparación con los callbacks?**
   Las promesas permiten un manejo más limpio y centralizado de los errores. El método `.catch` se encarga de capturar cualquier error que ocurra en cualquiera de las etapas del proceso, lo que simplifica mucho la gestión de errores.
