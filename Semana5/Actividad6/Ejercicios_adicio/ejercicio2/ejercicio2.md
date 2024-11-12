# Ejercicio 2: Manejo de errores con tipos personalizados

En este ejercicio se modifica la función `routeAPINames` para devolver un mensaje de error detallado cuando la petición falla. Se crea un tipo personalizado `ErrorResponse` que incluye la propiedad `message`.

### Objetivos:
- Crear el tipo `ErrorResponse`.
- Modificar la función para devolver un error con ese tipo.

### Código:
```typescript
type ErrorResponse = {
  message: string;
};

function routeAPINames(): ErrorResponse {
  return { message: 'La petición ha fallado' };
}
