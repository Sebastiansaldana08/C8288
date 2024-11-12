// Función genérica para procesar datos
function processData<T>(data: T): T {
    return data;
  }
  
  // Función que procesa datos de clima usando la genérica
  function processWeatherData<T>(data: T): T {
    return processData(data);
  }
  
  // Ejemplo de uso
  console.log(processWeatherData({ city: 'Lima', temperature: 25 }));
  