## Ejercicio 1: Callbacks y el "Callback Hell"

### Descripción del Problema:
Este ejercicio se centra en implementar una aplicación en Node.js que realiza varias operaciones dependientes utilizando solo callbacks. El objetivo es enfrentar el problema conocido como **"Callback Hell"**, donde las funciones de callback anidadas hacen que el código sea difícil de leer y mantener.

### Pasos Implementados:
1. **Leer un archivo JSON** que contiene información de usuarios utilizando `fs.readFile`.
2. **Hacer una solicitud HTTP** para obtener información adicional de una API externa por cada usuario.
3. **Guardar los datos combinados** en un nuevo archivo JSON utilizando `fs.writeFile`.

### Explicación Técnica:
- **Callbacks**: Los callbacks son funciones que se ejecutan una vez que una operación asíncrona ha terminado. En este ejercicio, se utilizan para realizar operaciones secuenciales, como leer un archivo, hacer solicitudes HTTP y escribir el archivo combinado. Sin embargo, al anidar varias operaciones, el código cae en el llamado **"Callback Hell"**.
- **Callback Hell**: Ocurre cuando las operaciones asíncronas dependen unas de otras y los callbacks se anidan en múltiples niveles. Esto hace que el código sea difícil de leer, mantener y escalar.
- **Gestión de errores con callbacks**: Cada operación asíncrona necesita su propia gestión de errores, lo que complica el código. Se deben manejar errores en cada nivel de los callbacks, lo que incrementa el riesgo de omitir algún error en operaciones más grandes.

### Preguntas de Análisis:
1. **¿Cómo podrías mejorar la legibilidad del código?**
   La legibilidad se puede mejorar reemplazando los callbacks anidados con promesas o utilizando `async/await`, lo que haría el código más lineal y fácil de seguir.

2. **¿Qué problemas encontraste en la gestión de errores?**
   Manejar errores en callbacks requiere agregar lógica de error en cada función, lo que incrementa la complejidad del código y hace más difícil identificar y manejar los errores de manera centralizada.
