# Ejercicio 6: Refactorización con tipos genéricos

Este ejercicio refactoriza la función `routeWeather` para aceptar diferentes tipos de datos de entrada usando tipos genéricos. Además, se crea otra función que usa el mismo tipo genérico para procesar otra clase de datos.

### Objetivos:
- Refactorizar la función usando tipos genéricos.
- Crear una función genérica para procesar diferentes tipos de datos.

### Código:
```typescript
function processData<T>(data: T): T {
  return data;
}

function processWeatherData<T>(data: T): T {
  return processData(data);
}
