// Definición del tipo para la respuesta ampliada
type ApiResponse<T> = {
    status: string;
    data: T;
  };
  
  // Función que devuelve una respuesta con el estado y los datos
  function getApiResponse<T>(data: T): ApiResponse<T> {
    return { status: 'success', data };
  }
  
  // Ejemplo de uso
  console.log(getApiResponse({ temperature: 25, city: 'Lima' }));
  