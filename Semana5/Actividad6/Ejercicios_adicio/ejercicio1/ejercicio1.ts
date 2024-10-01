// Definición del tipo CityType
type CityType = {
    name: string;
    population: number;
  };
  
  // Array de ciudades con nombre y población
  const cities: CityType[] = [
    { name: 'Lima', population: 10000000 },
    { name: 'Arequipa', population: 1000000 },
    { name: 'Cusco', population: 500000 },
  ];
  
  // Ruta /api/cities para devolver el arreglo de ciudades
  function getCities(): CityType[] {
    return cities;
  }
  
  // Ejemplo de uso
  console.log(getCities());
  