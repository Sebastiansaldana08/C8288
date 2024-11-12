"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
// Inicializamos el servidor
const server = (0, express_1.default)();
const port = 3000;
// Rutas del servidor
server.get("/components/weather", function (req, res) {
    const filePath = path_1.default.join(process.cwd(), "public", "weather.xhtml");
    res.setHeader("Content-Type", "text/html");
    res.sendFile(filePath);
});
// Iniciamos el servidor
server.listen(port, function () {
    console.log(`Escuchando en el puerto ${port}`);
});
