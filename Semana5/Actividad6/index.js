var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Importar las rutas y los módulos necesarios
import { routeHello, routeAPINames, routeWeather } from "./routes.js";
import express from "express";
// Crear la instancia del servidor Express
const server = express();
const port = 3000;
// Ruta para "/hello"
server.get("/hello", function (_req, res) {
    const response = routeHello();
    res.send(response);
});
// Ruta para "/api/names"
server.get("/api/names", function (_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield routeAPINames();
            res.send(response);
        }
        catch (err) {
            console.log(err);
        }
    });
});
// Ruta para "/api/weather/:zipcode"
server.get("/api/weather/:zipcode", function (req, res) {
    const response = routeWeather({ zipcode: req.params.zipcode });
    res.send(response);
});
// Iniciar el servidor y escuchar en el puerto especificado
server.listen(port, function () {
    console.log("Listening on " + port);
});
