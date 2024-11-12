# Ejercicio 4: Ampliar los tipos de respuesta

Este ejercicio amplía los tipos de respuesta añadiendo un tipo personalizado que incluya una propiedad `status` y el resultado real de la ruta.

### Objetivos:
- Definir el tipo `ApiResponse`.
- Ampliar la respuesta de la función para incluir el estado y los datos.

### Código:
```typescript
type ApiResponse<T> = {
  status: string;
  data: T;
};

function getApiResponse<T>(data: T): ApiResponse<T> {
  return { status: 'success', data };
}
