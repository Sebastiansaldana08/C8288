// Importar el tipo personalizado y fetch
import fetch from "node-fetch";

// Ruta para "Hello World"
const routeHello = (): string => "Hello World!";

// Ruta para obtener nombres de una API externa
const routeAPINames = async (): Promise<string> => {
  const url = "https://www.usemodernfullstack.dev/api/v1/users";
  let data: responseItemType[]; // Tipo de respuesta personalizado

  try {
    const response = await fetch(url);
    data = (await response.json()) as responseItemType[];
  } catch (err) {
    return "Error"; // Manejo de errores simple
  }

  // Extraer los nombres de los elementos de la respuesta
  const names = data
    .map((item) => `id: ${item.id}, name: ${item.name}`)
    .join("<br>");
    
  return names;
};

// Ruta para consultar el clima
const routeWeather = (query: WeatherQueryInterface): WeatherDetailType => 
  queryWeatherData(query);

// Función auxiliar para generar los datos del clima
const queryWeatherData = (query: WeatherQueryInterface): WeatherDetailType => {
  return {
    zipcode: query.zipcode,
    weather: "sunny",
    temp: 35, // Valor de temperatura ficticio
  };
};

// Exportar las rutas
export { routeHello, routeAPINames, routeWeather };
