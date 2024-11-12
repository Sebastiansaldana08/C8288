# Ejercicio 3: Añadir validación de datos

Este ejercicio añade validación de datos en la ruta `/api/weather/:zipcode`. El código postal debe tener 5 dígitos. Si no es válido, se devuelve un error con el tipo personalizado `ValidationError`.

### Objetivos:
- Crear el tipo `ValidationError`.
- Añadir validación para asegurarse de que el código postal sea válido.

### Código:
```typescript
type ValidationError = {
  message: string;
};

function validateZipcode(zipcode: string): ValidationError | null {
  if (zipcode.length !== 5 || isNaN(Number(zipcode))) {
    return { message: 'Código postal no válido. Debe tener 5 dígitos.' };
  }
  return null;
}
