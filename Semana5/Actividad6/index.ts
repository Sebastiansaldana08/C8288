// Importar las rutas y los módulos necesarios
import { routeHello, routeAPINames, routeWeather } from "./routes.js";
import express, { Request, Response } from "express";

// Crear la instancia del servidor Express
const server = express();
const port = 3000;

// Ruta para "/hello"
server.get("/hello", function (_req: Request, res: Response): void {
  const response = routeHello();
  res.send(response);
});

// Ruta para "/api/names"
server.get("/api/names", async function (_req: Request, res: Response): Promise<void> {
  try {
    const response = await routeAPINames();
    res.send(response);
  } catch (err) {
    console.log(err);
  }
});

// Ruta para "/api/weather/:zipcode"
server.get("/api/weather/:zipcode", function (req: Request, res: Response): void {
  const response = routeWeather({ zipcode: req.params.zipcode });
  res.send(response);
});

// Iniciar el servidor y escuchar en el puerto especificado
server.listen(port, function (): void {
  console.log("Listening on " + port);
});
