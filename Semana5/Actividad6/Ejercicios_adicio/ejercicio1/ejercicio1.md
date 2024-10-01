# Ejercicio 1: Extender el servidor

Este ejercicio extiende el servidor añadiendo una nueva ruta `/api/cities` que devuelve un arreglo de objetos con detalles de ciudades. 

### Objetivos:
- Definir un tipo personalizado `CityType` que contiene `name` y `population`.
- Crear una función que devuelva un array de ciudades usando ese tipo.

### Código:
```typescript
type CityType = {
  name: string;
  population: number;
};

const cities: CityType[] = [
  { name: 'Lima', population: 10000000 },
  { name: 'Arequipa', population: 1000000 },
  { name: 'Cusco', population: 500000 },
];

function getCities(): CityType[] {
  return cities;
}
