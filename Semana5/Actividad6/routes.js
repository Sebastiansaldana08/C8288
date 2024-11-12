var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Importar el tipo personalizado y fetch
import fetch from "node-fetch";
// Ruta para "Hello World"
const routeHello = () => "Hello World!";
// Ruta para obtener nombres de una API externa
const routeAPINames = () => __awaiter(void 0, void 0, void 0, function* () {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data; // Tipo de respuesta personalizado
    try {
        const response = yield fetch(url);
        data = (yield response.json());
    }
    catch (err) {
        return "Error"; // Manejo de errores simple
    }
    // Extraer los nombres de los elementos de la respuesta
    const names = data
        .map((item) => `id: ${item.id}, name: ${item.name}`)
        .join("<br>");
    return names;
});
// Ruta para consultar el clima
const routeWeather = (query) => queryWeatherData(query);
// Función auxiliar para generar los datos del clima
const queryWeatherData = (query) => {
    return {
        zipcode: query.zipcode,
        weather: "sunny",
        temp: 35, // Valor de temperatura ficticio
    };
};
// Exportar las rutas
export { routeHello, routeAPINames, routeWeather };
