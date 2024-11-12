import express, { Request, Response } from "express";
import path from "path";

// Inicializamos el servidor
const server = express();
const port = 3000;

// Ruta "/hello"
server.get("/hello", function (_req: Request, res: Response): void {
  const response = routeHello();
  res.send(response);
});

// Ruta "/api/names"
server.get("/api/names", async function (_req: Request, res: Response): Promise<void> {
  let response: string;
  try {
    response = await routeAPINames();
    res.send(response);
  } catch (err) {
    console.log(err);
  }
});

// Ruta "/api/weather/:zipcode"
server.get("/api/weather/:zipcode", function (req: Request, res: Response): void {
  const response = routeWeather({ zipcode: req.params.zipcode });
  res.send(response);
});

// Ruta "/components/weather" para servir el archivo HTML con React
server.get("/components/weather", function (_req: Request, res: Response): void {
  const filePath = path.join(process.cwd(), "public", "weather.html");
  res.setHeader("Content-Type", "text/html");
  res.sendFile(filePath);
});

// Iniciar el servidor
server.listen(port, function (): void {
  console.log("Escuchando en el puerto " + port);
});

// Función que maneja la ruta "/hello"
function routeHello(): string {
  return "Hello, World!";
}

// Función que simula la obtención de nombres en "/api/names"
async function routeAPINames(): Promise<string> {
  // Simulación de datos (puedes conectar una base de datos aquí si es necesario)
  return JSON.stringify(["John", "Jane", "Doe"]);
}

// Función que simula la obtención de datos meteorológicos según el código postal
function routeWeather({ zipcode }: { zipcode: string }): string {
  return `Clima para el código postal ${zipcode}`;
}
