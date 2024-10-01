// Definición del tipo ErrorResponse
type ErrorResponse = {
    message: string;
  };
  
  // Función que simula la ruta y devuelve un error
  function routeAPINames(): ErrorResponse {
    return { message: 'La petición ha fallado' };
  }
  
  // Ejemplo de uso
  console.log(routeAPINames());
  